export const dateFormat = (date: Date) => {
  return `${date.getHours()}:${date.getMinutes()}`;
};

// 임시로 사용하기 위함
export const dateFormatNew = (date: Date, h: number, m: number) => {
  let date1 = new Date(date);
  date1.setHours(h);
  date1.setMinutes(m);

  return `${String(date1.getHours()).padStart(2, "0")}:${String(
    date1.getMinutes()
  ).padStart(2, "0")}`;
};
