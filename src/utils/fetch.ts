const fakeFetch = <T,>(data: T, timer: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, timer);
  });
};
