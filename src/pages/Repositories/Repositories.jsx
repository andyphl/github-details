import { useState, useEffect } from "react";
import { getGithubUserDetails } from "../../api/github";
import styles from "./Repositories.module.scss";

export const Repositories = ({ reposUrl }) => {
  const [reposList, setReposList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getGithubUserDetails(reposUrl);
      setReposList(data);
    })();
  }, [reposUrl]);

  return (
    <div>
      {reposList.length === 0 ? (
        <p>No repositories found.</p>
      ) : (
        reposList.map((repo) => (
          <div key={repo.id}>
            <h3>{repo.name}</h3>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              See repo
            </a>
            <p>Description: {repo.description}</p>
          </div>
        ))
      )}
    </div>
  );
};
