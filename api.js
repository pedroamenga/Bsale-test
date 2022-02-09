const API_URL = 'http://jsonplaceholder.typicode.com';

const xhr = XMLHttpRequest();

const onRequestHandler = () => {
    if(this.eadyState === 4){
    // 0 = UNSET, no se ha llamado al metodo open.
    // 1 = OPENED, se ha llamado al metodo open.
    // 2 = HEADERS_RECIEVED, se esta llamando al metodo send().
    // 3 = LOADING, esta cargando, es decir, está recibiendo la respuesta.
    // 4 = DONE, se ha completado la operación.
    console.log(this.response)
    }
};
 
xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', `${API_URL}/users`)
xhr.send();