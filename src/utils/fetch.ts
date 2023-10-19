export const fakeFetch = <T>(data: T, timer: number): Promise<T> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, timer);
  });
};
