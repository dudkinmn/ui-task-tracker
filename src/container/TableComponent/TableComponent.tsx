import React, { ReactElement, useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import type { TState } from "../../store/store.types";
import {
  FilteringState,
  IntegratedFiltering,
  IntegratedPaging,
  IntegratedSorting,
  PagingState,
  SortingState,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  PagingPanel,
  Table,
  TableFilterRow,
  TableHeaderRow,
  Toolbar,
} from "@devexpress/dx-react-grid-material-ui";
import { fetchTasksAction } from "store/actions";
import { tasksUpdateInterval } from "consts/const";
import { TableRow } from "./TableRow/TableRow";
import { columns, pageSizes } from "consts/table";

const TableComponent = (): ReactElement => {
  const dispatch = useDispatch();
  const rows = useSelector((state: TState) => state.tasks);
  const userData = useSelector((state: TState) => state.userData);
  const [, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchTasksAction(userData?.id));
      setSeconds((seconds) => seconds + 1);
    }, tasksUpdateInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        <FilteringState />
        <SortingState />
        <PagingState />

        <IntegratedFiltering />
        <IntegratedSorting />
        <IntegratedPaging />
        <Table rowComponent={TableRow} />

        <TableHeaderRow showSortingControls={true} />
        <TableFilterRow messages={{ filterPlaceholder: "Фильтр" }} />
        <PagingPanel
          pageSizes={pageSizes}
          messages={{
            rowsPerPage: "Строк на странице",
            info: (parameters: { from: number; to: number; count: number }) =>
              `${parameters.from}-${parameters.to} из ${parameters.count}`,
          }}
        />
        <Toolbar />
      </Grid>
    </Paper>
  );
};

export default TableComponent;
