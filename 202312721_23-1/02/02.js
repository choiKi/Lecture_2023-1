const answer = `콜백핸들러에 전달되는 인수는 다른 함수에 인자이며, 콜백 지옥이란 , 이런 콜백 지옥을 해결하기 위한 방법으로는 promises가 있습니다.
다음은  콜백지옥에 빠진 예시입니다.
const fs = require('fs');

fs.readFile('file1.txt', 'utf8', (error1, data1) => {
  if (error1) {
    console.error('Error reading file1:', error1);
  } else {
    fs.readFile('file2.txt', 'utf8', (error2, data2) => {
      if (error2) {
        console.error('Error reading file2:', error2);
      } else {
        fs.writeFile('file3.txt', data1 + data2, (error3) => {
          if (error3) {
            console.error('Error writing file3:', error3);
          } else {
            console.log('Successfully wrote file3');
          }
        });
      }
    });
  }
});

다음은 promises를 이용하여 콜백지옥을 해결하여 동기/비동기로 코드를 구성한 예시입니다.
const fs = require('fs').promises;

async function main() {
  try {
    const data1 = await fs.readFile('file1.txt', 'utf8');
    const data2 = await fs.readFile('file2.txt', 'utf8');
    await fs.writeFile('file3.txt', data1 + data2);
    console.log('Successfully wrote file3');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
`;
console.log(answer);