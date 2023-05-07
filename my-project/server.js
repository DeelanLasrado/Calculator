const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname, "/my-project/calc.html");
});


app.post('/calculate', express.urlencoded({ extended: true }), (req, res) => {
  const { expression } = req.body;
  let result;

  try {
    result = eval(expression);
  } catch (error) {
    result = 'Error';
  }

  res.send(result.toString());
});

// Start the server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
