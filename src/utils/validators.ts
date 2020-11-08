import { isEmpty } from "lodash";

export const taskFormValidator = (fields: any) => {
  const errors: any = {};

  if (isEmpty(fields.name)) {
    errors.name = "Поле должно быть заполнено";
  }

  if (isEmpty(fields.priority)) {
    errors.priority = "Поле должно быть заполнено";
  }

  if (isEmpty(fields.status)) {
    errors.status = "Поле должно быть заполнено";
  }

  return errors;
};

export const signupFormValidator = (fields: any) => {
  const errors: any = {};

  if (isEmpty(fields.email)) {
    errors.email = "Поле должно быть заполнено";
  }

  if (isEmpty(fields.firstName)) {
    errors.firstName = "Поле должно быть заполнено";
  }

  if (isEmpty(fields.lastName)) {
    errors.lastName = "Поле должно быть заполнено";
  }

  if (isEmpty(fields.password)) {
    errors.password = "Поле должно быть заполнено";
  }

  return errors;
};

export const loginFormValidator = (fields: any) => {
  const errors: any = {};

  if (isEmpty(fields.emailField)) {
    errors.emailField = "Поле должно быть заполнено";
  }

  if (isEmpty(fields.passwordField)) {
    errors.passwordField = "Поле должно быть заполнено";
  }

  return errors;
};

export const passLength = (len: number) => (value: string) => {
  return value?.length < len
    ? `Пароль должен быть не менее ${len} символов`
    : null;
};

export const onlyEmail = () => (value: string) => {
  if (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
  ) {
    return null;
  } else {
    return "Неверный формат email";
  }
};
