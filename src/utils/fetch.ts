export const fakeFetch = <T>(data: T, timer: number): Promise<T> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // if (Math.random() > 0.8) {
      //   reject(new Error("에러 발생"));
      // } else {
      resolve(data);
      // }
    }, timer);
  });
};
