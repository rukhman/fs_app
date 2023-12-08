import { hot } from "react-hot-loader/root";
import * as React from "react";
import {Layout} from "./Layout";
import {Header} from "./Header";
import {Body} from "./Body";
import '../main.global.less'

function AppComponent() {
  return (
      <Layout>
        <Header />
        <Body />
      </Layout>
  );
}

export const App = hot(AppComponent);
