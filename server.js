const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/index');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/crypto', router);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
