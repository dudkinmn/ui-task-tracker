import React, { ReactElement, useCallback } from "react";
import { Button, Typography } from "@material-ui/core";
import styles from "./Header.module.css";
import history from "../../utils/history";
import { useDispatch } from "react-redux";
import { logOffAction } from "store/actions";

const Header = (): ReactElement => {
  const dispatch = useDispatch();

  const handleClickLogOff = useCallback(() => {
    dispatch(logOffAction());
    history.push("/");
  }, [dispatch]);

  const handleClick = useCallback(
    (path) => () => {
      history.push(path);
    },
    []
  );

  return (
    <div className={styles.header}>
      <div>
        <Typography variant="overline" display="inline">
          Вид:
        </Typography>
        <Button onClick={handleClick(`/auth/tasks`)}>Список</Button>
        <Button onClick={handleClick(`/auth/board`)}>Доска</Button>
      </div>
      <Button onClick={handleClick(`/auth/task`)}>Создать задачу</Button>

      <Button onClick={handleClickLogOff} color="secondary">
        Выход
      </Button>
    </div>
  );
};

export default Header;
