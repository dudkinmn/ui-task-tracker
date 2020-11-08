import React, { ReactElement } from "react";
import { reduxForm } from "redux-form";
import { useDispatch } from "react-redux";
import type {
  ILoginProps,
  TLoginOwnProps,
  TLoginFormData,
} from "./LoginForm.types";
import { fetchLoginAction } from "../../store/actions";
import { loginFormValidator, onlyEmail } from "../../utils/validators";
import InputField from "../../components/InputField/InputField";
import { Button } from "@material-ui/core";
//import ErrorServer from "../../components/ErrorServer/ErrorServer";
import styles from "./LoginForm.module.css";
import { Typography } from "@material-ui/core";

const emailValidator = onlyEmail();

const LoginForm = ({ ...props }: ILoginProps): ReactElement => {
  const dispatch = useDispatch();

  const handleSubmit = (fields: any) => {
    dispatch(fetchLoginAction(fields));
  };

  return (
    <div className={styles.body}>
      <div className={styles.background} />
      <form
        onSubmit={props.handleSubmit(handleSubmit)}
        className={styles.formLayout}
      >
        <div className={styles.formContent}>
          <Typography>Вход</Typography>
          <InputField
            name="email"
            type="email"
            label="Электронная почта"
            fullWidth={true}
            required={true}
            validate={[emailValidator]}
          />
          <InputField
            name="password"
            type="password"
            label="Пароль"
            fullWidth={true}
            required={true}
          />
          <div className={styles.buttonWrapper}>
            <Button type="submit" variant="contained">
              Войти
            </Button>
          </div>
        </div>
        {/*props.error ? <ErrorServer errorText={props.error} /> : null*/}
      </form>
    </div>
  );
};

const connectedToReduxForm = reduxForm<TLoginFormData, TLoginOwnProps>({
  form: "loginForm",
  validate: loginFormValidator,
});

export default connectedToReduxForm(LoginForm);
