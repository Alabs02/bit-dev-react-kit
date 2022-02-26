import { Fragment, FC } from "react";
import AppBar from "../components/AppBar";
import AppFooter from "../components/AppFooter";

const App: FC = () => {
  return (
    <Fragment>
      <AppBar />

      <main className="main">
      </main>

      <AppFooter />
    </Fragment>
  );
}

export default App;
