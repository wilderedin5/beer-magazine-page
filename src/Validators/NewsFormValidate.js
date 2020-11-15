export const required = (value) => (value ? undefined : "Обязательное поле");

export const maxAbv1500 = (value) =>
  value > 1500 ? "Значение не может быть больше 1500" : undefined;

export const maxAbv60 = (value) =>
  value > 60 ? "Значение не может быть больше 60" : undefined;
