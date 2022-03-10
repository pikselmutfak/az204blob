const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");

const storageName = 'mystorageke'

const defaultAzureCredential = new StorageSharedKeyCredential(
  storageName,  // isim
  'jKzFhI6iqD5s4pqsg3seceeO7ymegqt1aLupQOWI8yb/XxYE/GX8MtD0uaMK3emOD6AEGvGleTc8+AStd41ojw=='   // access key
)
     
const blobServiceClient = new BlobServiceClient(
  'https://'+storageName+'.blob.core.windows.net',
  defaultAzureCredential
);

const containerClient = blobServiceClient.getContainerClient('images');

const blobName = "item_" + new Date().getTime() + '.png';
const blockBlobClient = containerClient.getBlockBlobClient(blobName);

blockBlobClient.uploadFile('blob.png', {
  blobHTTPHeaders: {
    blobContentType: 'image/png'
  }
})
.then((response) => {
    console.log(response)

    const fileUrl = 'https://'+storageName+'.blob.core.windows.net' + '/images/' + blobName
    console.log('file url: ', fileUrl)
})
.catch((err) => {
    console.log(err)
})