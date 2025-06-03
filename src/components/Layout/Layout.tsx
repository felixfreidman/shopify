import React from "react";
import classes from "../../index.module.scss";
import { Header } from "../Header/Header";

interface BasicPagWithProps extends React.PropsWithChildren {}

export const Layout = ({ children }: BasicPagWithProps) => {
  return (
    <div className={classes.Layout}>
      <Header />
      <main className={classes.MainSection}>{children}</main>
    </div>
  );
};
