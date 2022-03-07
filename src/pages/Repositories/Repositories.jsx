import { useState, useEffect } from "react";
import { getGithubUserDetails } from "../../api/github";
import { Card, Icon } from "../../components";
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
    <Card>
      {reposList.length === 0 ? (
        <h3>No repositories found.</h3>
      ) : (
        reposList.map((repo) => (
          <div key={repo.id} className={styles.repo}>
            <div className={styles.details}>
              <h3>{repo.name}</h3>
              <p>
                <span>Description:</span> {repo.description}
              </p>
            </div>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              <span>See repo</span>
              <Icon.ArrowRight className={styles.arrow} />
            </a>
          </div>
        ))
      )}
    </Card>
  );
};
