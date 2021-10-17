import express from 'express';
import http from 'http';
import path from 'path';

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});



