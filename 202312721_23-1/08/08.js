const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.get('/login', (req, res) => {
  res.send('로그인');
});

app.get('/user', (req, res) => {
  res.send('사용자 페이지');
});

app.listen(8080, () => {
  console.log('서버가 8080 포트에서 실행중입니다.');
});