const express = require('express');
const app = express();
const port = process.env.PORT;
app.listen(port, () => console.log(`Bot running on http://localhost:${port}`));
