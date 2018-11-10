import axios from 'axios';

const url = 'http://localhost:8080';


export async function getUserById(id) {
    return axios.get('/user', {
        params: {
          id: id
        }
      })
      .then(function (response) {
        return response.json();
      })
      .catch(function (error) {
        console.log(error);
        return null;
      });
}
