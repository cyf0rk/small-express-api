const express = require('express');
const app = express();
const router = require('./routes/index');
const port = process.env.PORT || 3000;

app.use('/api/crypto', router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
