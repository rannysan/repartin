export function create(path, body) {
    return {type: 'CREATE', path, body};
}

export function update(path, body) {
    return {type: 'UPDATE', path, body};
}

export function delete(path,id){
    return {type: 'DELETE',path,id};
}

export function getById(path, id){
    return {type: 'GET_BY_ID', path, id};
}