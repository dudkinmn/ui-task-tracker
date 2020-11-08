import React, { ReactElement, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksAction } from "../../store/actions";
import Header from "../../components/Header/Header";
import styles from "./Authorized.module.css";
import type { TState } from "store/store.types";
import { AuthorizedRoutes } from "components/Routes/AuthorizedRoutes";

const Authorized = (): ReactElement => {
  const userData = useSelector((state: TState) => state.userData);
  const { path } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasksAction(userData?.id));
  }, []);

  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.background} />
      {AuthorizedRoutes(path)}
    </div>
  );
};

export default Authorized;
