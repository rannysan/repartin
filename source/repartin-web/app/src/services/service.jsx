import axios from 'axios';

const url = 'http://localhost:3000';


const service = {
    getById: async (path, id) => {
        console.log(`Buscando documento em ${path} usando o id: ${id}`);

        return axios.get(`${url}/${path}/${id}`)
          .then((response) =>  {
            if (response.status == 200) {
                return response.data;
            } else {
                return undefined;
            }
          })
          .catch((error) =>  {
            console.log(`Erro ao buscar documento em ${path}. Seguinte erro foi disparado: ${JSON.stringify(error)}`);
            return undefined;
          });
    },

    getByHouse: async (path, id) => {
        console.log(`Buscando documento em ${path} usando o house id: ${id}`);

        return axios.get(`${url}/${path}/house/${id}`)
          .then((response) =>  {
            if (response.status == 200) {
                return response.data;
            } else {
                return undefined;
            }
          })
          .catch((error) =>  {
            console.log(`Erro ao buscar documento em ${path}. Seguinte erro foi disparado: ${JSON.stringify(error)}`);
            return undefined;
          });
    },

    create: async (path, body) => {
        console.log(`Criando novo documento em ${path} com o body: ${JSON.stringify(body)}`);

        return axios.post(`${url}/${path}/`, body)
            .then(response => {
                return response.data;
            }).catch((error) =>  {
                console.log(`Erro ao inserir documento em ${path}. Seguinte erro foi disparado: ${JSON.stringify(error)}`);
                return undefined;
            });
    },

    update: async (path, body) => {
        console.log(`Atualizando documento em ${path} com o body: ${JSON.stringify(body)}`);

        return axios.put(`${url}/${path}/`, body)
            .then(response => {
                return response.data;
            }).catch((error) =>  {
                console.log(`Erro ao atualizar documento em ${path}. Seguinte erro foi disparado: ${JSON.stringify(error)}`);
                return undefined;
            });
    },

    delete: async (path, id) => {
        console.log(`Deletando documento em ${path} com o id: ${JSON.stringify(id)}`);

        return axios.delete(`${url}/${path}/`, id)
            .then(response => {
                return response.data;
            }).catch((error) =>  {
                console.log(`Erro ao deletar documento em ${path}. Seguinte erro foi disparado: ${JSON.stringify(error)}`);
                return undefined;
            });
    }
}

export default service;
