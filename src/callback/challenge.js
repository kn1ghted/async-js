// use node package
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// API path
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){
    // create a request using node package
    let xhttp = new XMLHttpRequest();
    // open the request with type, URL and enabled state 
    xhttp.open('GET', urlApi, true);

    // Listen the state of the request
    // 0 - UNSENT client created but not opened
    // 1 - OPENED client opened
    // 2 - HEADERS_RECEIVED request has been sent send() and headers are available
    // 3 - LOADING request response downloading, responseText holds partial data
    // 4 - DONE operation complete
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error' + urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(`${API}/products`, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}` , function(error2, data2) {
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3) {
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});