export const required = (value) => (value ? undefined : "Обязательное поле");

export const maxAbv15 = (value) =>
  value > 15 ? "Значение не может быть больше 15" : undefined;

export const minAbv = (value) =>
  value < 0 ? "Значение не может быть меньше 0" : undefined;
