import axios from 'axios';

const url = 'http://localhost:3000';


const service = {
    getUserById: async (id) => {
        return axios.get(`${url}/user/${id}`)
          .then((response) =>  {
            const user = response.data.user;
            if (user) {
                return user;
            } else {
                return undefined;
            }
          })
          .catch((error) =>  {
            console.log(error);
            return undefined;
          });
    },

    createUser: async (user) => {
        return axios.post(`${url}/user/`, {
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            houseID: null,
            removed: false
        });
    },

    updateUser: async (user) => {
        return axios.put(`${url}/user/`, {
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            houseID: null,
            removed: false
        });
    }
}

export default service;
