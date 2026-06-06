@'
const { Storage } = require('@google-cloud/storage');
const path = require('path');
const fs = require('fs');

const storage = new Storage({
  projectId: 'project-7ee9ba0e-6038-467d-83a'
});
const bucketName = 'topmoneytools-knowledge-base';

async function uploadFile(localFilePath) {
  if (!localFilePath) {
    console.error('❌ Error: Please provide a file path.');
    console.log('Example: node upload-doc.js "C:\\Users\\break\\Documents\\financial-guide.pdf"');
    return;
  }

  // Resolve relative paths if you use them
  const absolutePath = path.resolve(localFilePath);

  if (!fs.existsSync(absolutePath)) {
    console.error(`❌ Error: File not found at path: ${absolutePath}`);
    return;
  }

  const fileName = path.basename(absolutePath);
  console.log(`⏳ Uploading "${fileName}" to Google Cloud Storage...`);

  try {
    // Google Cloud automatically detects content types (PDF, HTML, TXT, etc.) on upload
    await storage.bucket(bucketName).upload(absolutePath, {
      destination: fileName,
    });

    console.log(`\n✅ Success! "${fileName}" has been safely injected into your ground-truth vault.`);
    console.log(`Vertex AI will automatically discover and index it shortly.`);
  } catch (error) {
    console.error('❌ Ingestion failed.');
    console.error(`Error details: ${error.message}`);
  }
}

// Capture the target file from your terminal argument
const targetFile = process.argv[2];
uploadFile(targetFile);
'@ | Out-File -FilePath upload-doc.js -Encoding utf8 -Force