import { Fragment } from "react";
import { GlobalStyle } from "./../styles/GlobalStyle";
import { PageWithSidebar } from "./pages/PageWithSidebar";

export function App() {
  return (
    <Fragment>
      <PageWithSidebar />
      <GlobalStyle />
    </Fragment>
  );
}
