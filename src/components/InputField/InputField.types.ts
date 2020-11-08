import type { WrappedFieldProps } from "redux-form";

export interface IMyFieldProps extends Partial<WrappedFieldProps> {
  name: string;
  type?: "password" | "input" | "email" | "text";
  placeholder?: string;
  label?: string;
  classNames?: string[];
  fullWidth?: boolean;
  multiline?: boolean;
  select?: boolean;
  selectProps?: Record<string, unknown>;
  rows?: number | string;
  rowsMax?: number | string;
  defaultValue?: any;
  required?: boolean;
}
