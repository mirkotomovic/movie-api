import axios from 'axios';

export const baseUrl = 'http://api.tvmaze.com/';
export const peopleUrl = `${baseUrl}people/`;

// const peopleInstance = axios.create({
//     baseURL: 'http://api.tvmaze.com/people',
//     timeout: 1000
// });

export const getPerson = async (peopleID) => {
    const result = await axios.get(`${peopleUrl + peopleID}`)
        .then(({ data }) => data )
        .catch(err => console.log({ err })); // TODO add error checking for 429

    return result;
}