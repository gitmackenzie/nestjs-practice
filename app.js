const express = require('express');
const connect = require('./models');
const cors = require("cors");
const app = express();
const port = 3000;

connect();

// app.use(cors());

const requestMiddleware = (req, res, next) => {
    console.log('Request URL:', req.originalUrl, ' - ', new Date());
    next();
};
//Request 로그 남기는 미들웨어(위에 로그 남기는 함수 만듬)
app.use(requestMiddleware);

//JSON이라는 규격의 body 데이터를 손쉽게 코드에서 사용할 수 있게 도와주는 미들웨어
app.use(express.json()); 

const postsRouter = require('./routes/post');
// const usersRouter = require('./routes/user');
// const commentsRouter = require('./routes/comment');
//form-urlencoded라는 규격의 body 데이터를 손쉽게 코드에서 사용할 수 있게 도와주는 미들웨어
app.use('/api', express.urlencoded({ extended: false }), postsRouter);
// app.use('/api', express.urlencoded({ extended: false }), usersRouter);
// app.use('/api', express.urlencoded({ extended: false }), commentsRouter);

//http GET method 라우터(루트'/'에서 get요청 했을 때 응답 "서버연결")
app.get('/', (req, res) => {
    res.send("서버연결");
});

app.listen(port, () => {
    console.log(port, '포트로 서버가 켜졌어요!');
});