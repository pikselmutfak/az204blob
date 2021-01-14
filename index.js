const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");

const defaultAzureCredential = new StorageSharedKeyCredential('pixstorageacc', 'fmeRgymDN24J5cLEgSHDfs6oejQEuZHldSTlEaBIMOB7JNpAYUp/+ZTOn4EHIjGYUiDiOPTbMI59VxwXuMWh5A==')
     
const blobServiceClient = new BlobServiceClient(
  'https://pixstorageacc.blob.core.windows.net',
  defaultAzureCredential
);

const containerClient = blobServiceClient.getContainerClient('images');

const blobName = "item_" + new Date().getTime() + '.png';
const blockBlobClient = containerClient.getBlockBlobClient(blobName);

blockBlobClient.uploadFile('blob.png')
.then((response) => {
    console.log(response)

    const fileUrl = 'https://pixstorageacc.blob.core.windows.net' + '/images/' + blobName
    console.log('file url: ', fileUrl)
})
.catch((err) => {
    console.log(err)
})