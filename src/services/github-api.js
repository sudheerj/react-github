import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export {getRepositories, getUserData, getStars, getFollowers, getFollowing};

function getRepositories(username) {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  return axios.get(url).then(response => response.data);
}

function getStars(username) {
    const url = `${BASE_URL}/users/${username}/starred?per_page=250`;
    return axios.get(url).then(response => response.data);
}

function getFollowers(username) {
    const url = `${BASE_URL}/users/${username}/followers?per_page=250`;
    return axios.get(url).then(response => response.data);
}

function getFollowing(username) {
    const url = `${BASE_URL}/users/${username}/following?per_page=250`;
    return axios.get(url).then(response => response.data);
}

function getUserData(username) {
  return axios.all([
    axios.get(`${BASE_URL}/users/${username}`),
    axios.get(`${BASE_URL}/users/${username}/orgs`),
  ])
  .then(([user, orgs]) => ({
    user: user.data,
    orgs: orgs.data,
  }));
}
