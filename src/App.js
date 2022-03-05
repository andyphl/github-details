import { BrowserRouter, Link } from "react-router-dom";
import { Panel } from "./layouts";
import { Icon, Header, Hamburger, Nav, SearchForm } from "./components";
import styles from "./layouts/Panel/Panel.module.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Panel>
          <Hamburger />

          <main>
            <SearchForm />
            {/* TODO: react router setup */}
            <section>
              {/* TODO: home, repositories, gists, followers page design */}
              <div></div>
            </section>
          </main>
        </Panel>
      </BrowserRouter>
    </div>
  );
}

export default App;
