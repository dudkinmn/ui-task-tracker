import React, { ReactElement } from "react";
import { Field, BaseFieldProps } from "redux-form";
import { TextField } from "@material-ui/core";
import { isString } from "lodash";
import type { IMyFieldProps } from "./InputField.types";

const MyField = ({ meta, input, ...props }: IMyFieldProps): ReactElement => {
  return (
    <TextField
      margin={"normal"}
      error={meta?.touched && meta.invalid}
      helperText={
        meta?.touched && meta.invalid && isString(meta?.error) && meta?.error
      }
      {...props}
      {...input}
    />
  );
};

const InputField: React.FC<IMyFieldProps & BaseFieldProps> = (props) => {
  return <Field component={MyField} {...props} />;
};

export default InputField;
