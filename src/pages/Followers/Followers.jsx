import { useState, useEffect } from "react";
import { Icon } from "../../components";
import { getGithubUserDetails } from "../../api/github";

export const Followers = ({ followersUrl }) => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getGithubUserDetails(followersUrl);
      setFollowers(data);
    })();
  }, [followersUrl]);

  return (
    <div>
      {followers.map((follower) => (
        <div key={follower.id}>
          <h3>{follower.login}</h3>
          <img src={follower.avatar_url} alt={`${follower.id}'s avatar`} />
          <a href={follower.url}>
            See user <Icon.ArrowRight />
          </a>
        </div>
      ))}
    </div>
  );
};
