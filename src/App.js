import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Panel } from "./layouts";
import { Header, Hamburger, SearchForm } from "./components";
import { Home, Repositories, Followers } from "./pages";
import { getGithubUser } from "./api/github";

function App() {
  const [userData, setUserData] = useState({});

  const fetchUserData = async (search) => {
    try {
      const data = await getGithubUser(search);
      setUserData(data);
    } catch (error) {
      setUserData({});
    }
  };

  useEffect(() => {
    fetchUserData("andyphl");
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Panel>
          <Hamburger />

          <main>
            <SearchForm fetchUserData={fetchUserData} />
            {/* TODO: react router setup */}
            <section className="main-section">
              <Routes>
                <Route
                  path="/"
                  exact
                  element={userData && <Home userData={userData} />}
                />
                <Route
                  path="/repos"
                  exact
                  element={
                    userData?.repos_url ? (
                      <Repositories reposUrl={userData.repos_url} />
                    ) : (
                      <h3>User not found</h3>
                    )
                  }
                />
                <Route
                  path="/followers"
                  exact
                  element={
                    userData?.followers_url ? (
                      <Followers followersUrl={userData.followers_url} />
                    ) : (
                      <h3>User not found</h3>
                    )
                  }
                />
              </Routes>
            </section>
          </main>
        </Panel>
      </BrowserRouter>
    </div>
  );
}

export default App;
