const express = require('express');
const multer = require('multer');
const app = express();

// set up multer for file handling
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('employee'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: 'No file uploaded' });
  }

  if (req.file.mimetype !== 'application/json') {
    return res.status(400).send({ message: 'Invalid file type, only JSON is allowed' });
  }

  const employeeData = JSON.parse(req.file.buffer.toString());

  // process the employee data as per your needs

  return res.status(200).send({ message: 'File uploaded successfully' });
});

app.listen(3000, () => {
  console.log('File upload API listening on port 3000');
});
