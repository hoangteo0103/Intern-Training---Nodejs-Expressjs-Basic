const express = require('express');
const fs = require('fs');
const app = express();

app.get('/employee', (req, res) => {
  fs.readFile('./employee.json', (err, data) => {
    if (err) {
      return res.status(500).send({ message: 'Error reading the file' });
    }

    const employeeData = JSON.parse(data);
    return res.status(200).send({ employeeData });
  });
});

app.post('/employee', (req, res) => {
  const employeeData = req.body;
  
  fs.writeFile('./employee.json', JSON.stringify(employeeData), (err) => {
    if (err) {
      return res.status(500).send({ message: 'Error writing the file' });
    }

    return res.status(200).send({ message: 'File saved successfully' });
  });
});

app.listen(3000, () => {
  console.log('Employee API listening on port 3000');
});
