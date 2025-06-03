import React from "react";
import classes from "./index.module.scss";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { OverviewPage } from "./pages/OverviewPage/OverviewPage";

const App = () => {
  return (
    <div className={classes.App}>
      <Layout>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
