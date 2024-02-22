import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputFile = path.join(__dirname, "notion-export.json");

if (!fs.existsSync(outputFile)) {
  console.error(`File ${outputFile} does not exist.`);
  process.exit(1);
}

const pages = JSON.parse(fs.readFileSync(outputFile));

const preview = pages.map((page) => {
  const {
    ["Blog Title"]: articleTitle,
    Tags: tags,
    ["Preview Image"]: previewImage,
    Duration: duration,
    Summary: summary,
  } = page.properties;

  console.log(articleTitle, tags, previewImage, duration, summary);
});

preview;
