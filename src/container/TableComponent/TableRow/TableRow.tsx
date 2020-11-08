import React from "react";
import { Table } from "@devexpress/dx-react-grid-material-ui";
import history from "../../../utils/history";

export const TableRow = (props: Table.DataRowProps) => (
  <Table.Row
    {...props}
    // eslint-disable-next-line react/jsx-no-bind
    onClick={() => {
      history.push(`/auth/task/${props.row.id}`);
    }}
    style={{
      cursor: "pointer",
    }}
  />
);
