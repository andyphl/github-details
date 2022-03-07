export const getGithubUser = async (search) => {
  try {
    const res = await fetch(`https://api.github.com/users/${search}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getGithubUserDetails = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
