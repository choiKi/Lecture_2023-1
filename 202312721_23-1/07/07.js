// Promise
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
            name: '기훈',
            age: 27,
            city: '월계'
        };
        resolve(data);
      }, 2000);
    });
  }
  
  fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));

    // asynd/await

    function fetchData() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const data = {
              name: '기훈',
              age: 27,
              city: '월계'
            };
            resolve(data);
          }, 2000);
        });
      }
      
      async function getData() {
        try {
          const data = await fetchData();
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }
      
      getData();