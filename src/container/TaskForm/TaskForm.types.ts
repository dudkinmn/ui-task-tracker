import type { InjectedFormProps } from "redux-form";

export type TTaskFormStateProps = Record<string, unknown>;

export type TTaskFormDispatchProps = Record<string, unknown>;

export type TTaskFormOwnProps = Record<string, unknown>;

export type TTaskFormData = Record<string, unknown>;

export interface ITaskFormProps
  extends InjectedFormProps<TTaskFormData, TTaskFormOwnProps>,
    TTaskFormStateProps,
    TTaskFormOwnProps {}
