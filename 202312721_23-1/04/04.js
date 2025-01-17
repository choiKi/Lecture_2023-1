const answer = `결과적으로 포트 3000에서 실행되는 HTTP 웹서버를 생성하는 코드입니다. 서버에 요청을 보내게 되면 'Hello World\n' 문자열을 반환합니다.
이 코드에 대해 자세히 서술하자면 http 모듈을 불러오고, http.createServer() 함수를 호출하여 웹 서버를 생성합니다. 
이 함수는 요청에 대한 처리를 담당하는 콜백 함수를 인수로 받습니다.
 콜백 함수의 인수로는 request(요청 객체)와 response(응답 객체)가 전달됩니다.
 콜백 함수 내부에서, 응답 헤더를 설정합니다. 여기서는 HTTP 상태 코드 200과 Content-Type 헤더를 설정하며,
  이는 응답의 콘텐츠 타입이 'text/plain'임을 나타냅니다. 응답 본문에 'Hello World\n' 문자열을 추가하고, 응답을 종료합니다.
  마지막으로, 웹 서버가 3000 포트에서 수신 대기하도록 설정합니다.
`;

var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    fs.readFile('answer.txt', 'utf8', function (err, data) {
        if (err) {
            response.end('Error reading file.');
        } else {
            response.end('ㅇㄴㅇㄴ');
        }
    });
}).listen(3000);

console.log(answer);