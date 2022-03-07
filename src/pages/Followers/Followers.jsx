import { useState, useEffect } from "react";
import { Avatar, Card, Icon } from "../../components";
import { getGithubUserDetails } from "../../api/github";
import styles from "./Followers.module.scss";

export const Followers = ({ followersUrl }) => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getGithubUserDetails(followersUrl);
      setFollowers(data);
    })();
  }, [followersUrl]);

  return (
    <Card>
      {followers.length === 0 ? (
        <h3>No followers found.</h3>
      ) : (
        followers.map((follower) => (
          <div key={follower.id} className={styles.follower}>
            <div className={styles.wrapper}>
              <h3>{follower.login}</h3>
              <Avatar
                src={follower.avatar_url}
                alt={`${follower.login}'s avatar`}
              />
            </div>
            <a href={follower.url} target="_blank" rel="noreferrer">
              <span>See user</span>
              <Icon.ArrowRight className={styles.arrow} />
            </a>
          </div>
        ))
      )}
    </Card>
  );
};
