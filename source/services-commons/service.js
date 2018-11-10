import axios from 'axios';

const url = 'http://localhost:8080';

export const getUserById = async (id) => {
    return axios.get('/user', {
        params: {
          id: id
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
}

