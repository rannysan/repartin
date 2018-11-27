import axios from 'axios';

const url = 'http://localhost:3000';


const service = {
    getById: async (path, id) => {
        console.log(`Buscando documento em ${path} usando o id: ${id}`);

        return axios.get(`${url}/${path}/${id}`)
            .then((response) => {
                if (response.status == 200) {
                    return response.data;
                } else {
                    return undefined;
                }
            })
            .catch((err) => {
                console.log(`Erro ao buscar documento em ${path}`);
                handleError(err);
            });
    },

    getByHouse: async (path, id) => {
        console.log(`Buscando documento em ${path} usando o house id: ${id}`);

        return axios.get(`${url}/${path}/house/${id}`)
            .then((response) => {
                if (response.status == 200) {
                    return response.data;
                } else {
                    return undefined;
                }
            })
            .catch((err) => {
                console.log(`Erro ao buscar documento em ${path}`);
                handleError(err);
                return undefined;

            });
    },

    create: async (path, body) => {
        console.log(`Criando novo documento em ${path} com o body: ${JSON.stringify(body)}`);

        return axios.post(`${url}/${path}`, body)
            .then(response => {
                return response.data;
            }).catch((err) => {
                console.log(`Erro ao inserir documento em ${path}`);
                handleError(err);
                return undefined;
            });
    },

    update: async (path, id, body) => {
        console.log(`Atualizando documento em ${path} com o body: ${JSON.stringify(body)}`);

        return axios.put(`${url}/${path}/${id}`, body)
            .then(response => {
                return response.data;
            }).catch((error) => {
                console.log(`Erro ao atualizar documento em ${path}`);
                handleError(err);
                return undefined;
            });
    },

    delete: async (path, id) => {
        console.log(`Deletando documento em ${path} com o id: ${JSON.stringify(id)}`);

        return axios.delete(`${url}/${path}`, id)
            .then(response => {
                return response.data;
            }).catch((error) => {
                console.log(`Erro ao deletar documento em ${path}`);
                handleError(err);
                return undefined;
            });
    },


    saveCredential: (token) => {
        localStorage.setItem('auth-credential', JSON.stringify(token));
    },

    getCredential: () => {
        var retrievedObject = localStorage.getItem('auth-credential');
        return JSON.parse(JSON.parse(retrievedObject));
    }
}

function handleError(error) {
    const err = JSON.parse(JSON.stringify(error));
    const status = err.response.status;
    const message = err.response.data.message;
    console.log(`HTTP STATUS: ${status}`);
    if (message)
        console.log(`MENSAGEM: ${message}`);
    else
        console.log(`ERROR: ${JSON.stringify(error)}`);

}
export default service;
