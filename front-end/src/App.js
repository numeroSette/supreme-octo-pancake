import React from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import axios from 'axios';
import './App.css';

const { Dragger } = Upload;

// const props = {
//   name: 'file',
//   multiple: true,
//   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//   onChange(info) {
//     const { status } = info.file;
//     if (status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully.`);
//     } else if (status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };

async function customRequest(options) {

  const { onSuccess, onError, file, onProgress } = options;

  // setBlock(true);

  const formData = new FormData();

  formData.append('file', file)

  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    },
    onUploadProgress: ({ total, loaded }) => {
      onProgress({ percent: parseInt(Math.round((loaded * 100) / total)) }, file)
    }
  }

  try {

    const response = await axios.post('http://localhost:3000/file/upload', formData, config);

    console.log(response, 'response');

  } catch (error) {
    console.log(error, 'error');
  }



  // try {

  //   const response = await Api.post('/file/upload', formData, config);

  //   onSuccess(response.data, file);

  // } catch (err) {
  //   onError({ err })
  // } finally {
  //   setBlock(false);
  // }
}

const App = () => (
  <Dragger
    customRequest={customRequest}
    showUploadList={true}
  >
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
  </p>
  </Dragger>
);

export default App;