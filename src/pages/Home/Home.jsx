import styles from "./Home.module.scss";
import { Avatar, Card, Icon } from "../../components";

export const Home = ({ userData }) => {
  return (
    <Card>
      {userData.message === "Not Found" ? (
        <h3>User not found</h3>
      ) : (
        <>
          <div className={styles.userInfo}>
            <h3>{userData.login}</h3>
            <Avatar src={userData.avatar_url} className={styles.avatar} />
            <a href={userData.html_url} target="_blank" rel="noreferrer">
              <span>See user</span>
              <Icon.ArrowRight className={styles.arrow} />
            </a>
            <div className={styles.userDetail}>
              <p>
                <span>Name: </span>
                {userData.name}
              </p>
              <p>
                <span>Bio: </span>
                {userData.bio}
              </p>
              <p>
                <span>Email: </span>
                {userData.email}
              </p>
              <p>
                <span>Company: </span>
                {userData.company}
              </p>
              <p>
                <span>Location: </span>
                {userData.location}
              </p>
              <p>
                <span>Followers: </span>
                {userData.followers}
              </p>
              <p>
                <span>Create at: </span>
                {userData.updated_at}
              </p>
            </div>
          </div>
        </>
      )}
    </Card>
  );
};
