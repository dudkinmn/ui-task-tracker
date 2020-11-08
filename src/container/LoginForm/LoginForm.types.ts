import type { InjectedFormProps } from "redux-form";
/*import { MutateProps } from "@apollo/react-hoc";*/

export type TLoginStateProps = Record<string, unknown>;

export type TLoginDispatchProps = Record<string, unknown>;

export type TLoginOwnProps = Record<string, unknown>;

export type TLoginFormData = {
  emailField: string;
  passwordField: string;
};

export interface ILoginProps
  extends InjectedFormProps<
      TLoginFormData,
      TLoginOwnProps /*& MutateProps<ILogin, ILoginVariables>*/
    >,
    TLoginOwnProps /*,
    MutateProps<ILogin, ILoginVariables>*/ {}
