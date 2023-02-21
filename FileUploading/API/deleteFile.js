const express = require('express');
const fs = require('fs');
const app = express();

app.delete('/employee', (req, res) => {
  fs.unlink('./employee.json', (err) => {
    if (err) {
      return res.status(500).send({ message: 'Error deleting the file' });
    }

    return res.status(200).send({ message: 'File deleted successfully' });
  });
});

app.listen(3000, () => {
  console.log('Employee API listening on port 3000');
});
