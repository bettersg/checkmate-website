import { Client } from "@notionhq/client";
import { onRequest } from "firebase-functions/v2/https";
import { defineString } from "firebase-functions/params";
import { getStorage } from "firebase-admin/storage";
import { logger } from "firebase-functions/v2";

const NOTION_INTEGRATION_SECRET = defineString("NOTION_INTEGRATION_SECRET");
const NOTION_BLOGS_DATABASE_ID = defineString("NOTION_BLOGS_DATABASE_ID");

const notion = new Client({ auth: NOTION_INTEGRATION_SECRET.value() });

// Cloud Function Entry point to get Notion JSON from Firebase Storage
export const getNotionJSON = onRequest(
  { cors: true },
  async (request, response) => {
    try {
      const notionBlogsBucket = getStorage().bucket("notion-blogs");
      const file = notionBlogsBucket.file("notion-blogs.json");

      const data = await file.download();
      response.send(data[0].toString());
    } catch (error) {
      console.error("Error getting Notion JSON", error);
    }
  }
);

// Clound Function Entry point to export Notion data to Firestore
export const dailyExportNotionToFirestore = onSchedule(
  "0 8 * * *", // 8am UTC, 12am SGT
  async (event) => {
    try {
      await exportNotionPages();
      console.log("Successfully exported Notion data");
      // response.send("Successfully exported Notion data");
    } catch (err) {
      console.error("Error exporting Notion data to Firestore", err);
      // response.status(500).send("Failed to export Notion data");
    }
  }
);

export const manualTriggerExportNotionToFirestore = onRequest(
  async (request, response) => {
    try {
      await exportNotionPages();
      // console.log("Successfully exported Notion data");
      response.send("Successfully exported Notion data");
    } catch (err) {
      // console.error("Error exporting Notion data to Firestore", err);
      response.status(500).send("Failed to export Notion data");
    }
  }
);

// Queries the Notion Database and exports the pages to Firebase Storage
async function exportNotionPages() {
  const { results: pages } = await notion.databases.query({
    database_id: NOTION_BLOGS_DATABASE_ID.value(),
  });

  if (!pages || pages.length === 0) {
    console.warn("No Notion pages found to export");
    return;
  }

  for (const page of pages) {
    const blocks = await getNotionBlocks(page.id);
    page.children = blocks;
  }

  // Convert pages to JSON string
  const json = JSON.stringify(pages, null, 2);

  // Upload JSON string to Firebase Storage
  const notionBlogsBucket = getStorage().bucket("notion-blogs");
  logger.info(notionBlogsBucket);
  const file = notionBlogsBucket.file("notion-blogs.json");
  await file.save(json, {
    metadata: {
      contentType: "application/json",
    },
  });
  console.log("Exported Notion pages to Firebase Storage");
}

// Helper function to recurisively get Notion blocks
async function getNotionBlocks(block_id) {
  const { results: children } = await notion.blocks.children.list({
    block_id,
  });

  for (const child of children) {
    const grandChildren = await getNotionBlocks(child.id);
    child.children = grandChildren;
  }
  return children;
}
