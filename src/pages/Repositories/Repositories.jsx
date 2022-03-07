import { useState, useEffect } from "react";
import { getGithubUserDetails } from "../../api/github";
import { Card, Icon, LoadingSpin } from "../../components";
import styles from "./Repositories.module.scss";

export const Repositories = ({ reposUrl }) => {
  const [reposList, setReposList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getGithubUserDetails(reposUrl);
      setReposList(data);
      setIsLoading(false);
    })();
  }, [reposUrl]);

  return (
    <>
      {isLoading ? (
        <LoadingSpin />
      ) : (
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
      )}
    </>
  );
};
