let answer = `먼저 events 모듈을 불러옵니다. 
const EventEmitter = require('events');
`;
console.log(answer);
const EventEmitter = require('events');
 
answer = `새로운 이벤트 객체 myEmitter를 생성합니다.. 
const myEmitter = new EventEmitter();
`;
console.log(answer);
const myEmitter = new EventEmitter();

answer = `result 문자열 상수를 선언합니다.. 
const result = "안녕 나는 최기훈이야";
`;
console
console.log(answer);
const result = "안녕 나는 최기훈이야";

// 이벤트 리스너 선언
answer = 'event1과 event2 라는 두 개의 이벤트 리스너를 선언합니다. 이벤트가 실행될 때 콘솔에 메시지를 출력합니다.';
console.log(answer);
answer = `먼저 events 모듈을 불러옵니다. 
myEmitter.on('event1', () => {
    console.log(\`${result} - 이벤트 1이 실행되었습니다.\`);
  });
  
  myEmitter.on('event2', () => {
    console.log(\`${result} - 이벤트 2가 실행되었습니다.\`);
  });
  `;
console.log(answer)
myEmitter.on('event1', () => {
  console.log(`${result} - 이벤트 1이 실행되었습니다.`);
});

myEmitter.on('event2', () => {
  console.log(`${result} - 이벤트 2가 실행되었습니다.`);
});


answer = '이벤트 실행 순서를 설명하는 메시지를 출력하고, event1과 event2 이벤트를 순차적으로 실행합니다.';
console.log(answer);
// 이벤트 실행
console.log('이벤트 실행 순서 시작');
myEmitter.emit('event1');
myEmitter.emit('event2');
console.log('이벤트 실행 순서 끝');
