import { Client } from "@notionhq/client";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../", ".env") });

const notion = new Client({ auth: process.env.NOTION_INTEGRATION_SECRET });

async function getBlocks(block_id) {
  const { results: children } = await notion.blocks.children.list({ block_id });
  for (const child of children) {
    const grandChildren = await getBlocks(child.id);
    child.children = grandChildren;
  }
  return children;
}

async function importPages() {
  console.log("Beginning export");
  const { results: pages } = await notion.databases.query({
    database_id: process.env.NOTION_BLOGS_DATABASE_ID,
  });

  for (const page of pages) {
    const blocks = await getBlocks(page.id);
    page.children = blocks;
  }

  const outputFile = path.join(__dirname, "notion-export.json");
  fs.writeFileSync(outputFile, JSON.stringify(pages, null, 2));
  console.log("Done exporting");
}

importPages();
