const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");

const storageName = ''

const defaultAzureCredential = new StorageSharedKeyCredential(
  storageName,  // isim
  ''   // access key
)
     
const blobServiceClient = new BlobServiceClient(
  'https://'+storageName+'.blob.core.windows.net',
  defaultAzureCredential
);

const containerClient = blobServiceClient.getContainerClient('files');

const blobName = "item_" + new Date().getTime() + '.png';
const blockBlobClient = containerClient.getBlockBlobClient(blobName);

blockBlobClient.uploadFile('blob.png', {
  blobHTTPHeaders: {
    blobContentType: 'image/png'
  }
})
.then((response) => {
    console.log(response)

    const fileUrl = 'https://'+storageName+'.blob.core.windows.net' + '/files/' + blobName
    console.log('file url: ', fileUrl)
})
.catch((err) => {
    console.log(err)
})