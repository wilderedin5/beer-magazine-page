export const required = (value) => (value ? undefined : "Обязательное поле");

export const maxAbv260 = (value) =>
  value > 260 ? "Значение не может быть больше 1500" : undefined;

export const maxAbv60 = (value) =>
  value > 60 ? "Значение не может быть больше 60" : undefined;
