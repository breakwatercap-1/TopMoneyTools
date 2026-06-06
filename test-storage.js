const { Storage } = require('@google-cloud/storage');

// Explicitly pointing to your project and your real bucket
const storage = new Storage({
  projectId: 'project-7ee9ba0e-6038-467d-83a'
});
const bucketName = 'topmoneytools-knowledge-base'; 

async function testConnection() {
  try {
    console.log(`Connecting to bucket: ${bucketName}...`);
    const [files] = await storage.bucket(bucketName).getFiles({ maxResults: 5 });
    
    console.log('✅ Connection successful! Localhost is paired with Google Cloud.');
    if (files.length === 0) {
      console.log('The bucket is currently empty. Ready for your clean data!');
    } else {
      console.log('Found existing documents:');
      files.forEach(file => console.log(` - ${file.name}`));
    }
  } catch (error) {
    console.error('❌ Connection failed.');
    console.error(`Error details: ${error.message}`);
  }
}

testConnection();
