//연습 코드 : 비동기 처리 확인(async-await)
//try-catch : async랑 거의 기계적으로 같이 사용; async를 try-catch로 감싼다.
async function checkPromise() {
  try {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("완료!"), 1000);
    });
    let result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
checkPromise();
