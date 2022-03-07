import styles from "./Home.module.scss";

export const Home = ({ userData }) => {
  return (
    <div>
      <h3>{userData.login}</h3>
      <div>
        <img src={userData.avatar_url} alt="github avatar" />
        <a href={userData.html_url} target="_blank" rel="noreferrer">
          See user
        </a>
        <p>Name: {userData.name}</p>
        <p>Bio: {userData.bio}</p>
        <p>Email: {userData.email}</p>
        <p>Company: {userData.company}</p>
        <p>Location: {userData.location}</p>
        <p>Followers: {userData.followers}</p>
        <p>Create at: {userData.updated_at}</p>
      </div>
    </div>
  );
};
