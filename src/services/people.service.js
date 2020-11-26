import axios from 'axios';

export const baseUrl = 'https://api.tvmaze.com/';
export const searchUrl = `${baseUrl}search/people?q=`;
export const peopleUrl = `${baseUrl}people/`;

const matchWhitespace = /\s/g;

export const searchPeople = async ({ query }) => {
    const result = await axios.get(`${searchUrl + query.toLowerCase().replace(matchWhitespace, '+')}`)
        .then(({ data }) => data)
        .catch(err => console.error({ err })); // TODO add error checking for 429

    return result;
}

export const getCrewCredits = async (personID) => {
    const result = await axios.get(`${peopleUrl + personID + "/crewcredits?embed=show"}`)
        .then(({ data }) => data)
        .catch(err => console.error({ err })); // TODO add error checking for 429

    return result;
}
export const getCastCredits = async (personID) => {
    const result = await axios.get(`${peopleUrl + personID + "/castcredits?embed=show"}`)
        .then(({ data }) => data)
        .catch(err => console.error({ err })); // TODO add error checking for 429

    return result;
}

export const getPerson = async (peopleID) => {
    const result = await axios.get(`${peopleUrl + peopleID}`)
        .then(({ data }) => data )
        .catch(err => console.log({ err })); // TODO add error checking for 429

    return result;
}