import axios from 'axios';

export const baseUrl = 'https://api.tvmaze.com/';
export const searchUrl = `${baseUrl}search/shows?q=`;

const matchWhitespace = /\s/g;

export const searchShow = async ({ query }) => {
  const result = await axios
    .get(`${searchUrl + query.toLowerCase().replace(matchWhitespace, '+')}`)
    .then(({ data }) => data)
    .catch((err) => console.error({ err })); // TODO add error checking for 429

  return result;
};

export const getBasicInfo = async (showID) => {
  const result = await axios
    .get(`${baseUrl + 'shows/' + showID + '?embed[]=cast&embed[]=crew'}`)
    .then(({ data }) => data)
    .catch((err) => console.error({ err })); // TODO add error checking for 429

  return result;
};

export const seasonsEpisodes = async (showID) => {
  const result = await axios
    .get(`${baseUrl + 'shows/' + showID + '?embed[]=seasons&embed[]=episodes'}`)
    .then(({ data }) => data)
    .catch((err) => console.error({ err }));

  return result;
};
