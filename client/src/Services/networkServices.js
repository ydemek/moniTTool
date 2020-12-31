import axios from 'axios';
import proxy from './proxy.js';
 

export var getNetworkInformationsRequest = function () {
    return new Promise(function (resolve, reject) {
        var axiosGetNetworkInformationsPromise = axios.get(
            proxy.URL + '/api/network/');
        axiosGetNetworkInformationsPromise.then(function (result) {
            console.log(result.data);
            result.data = result.data.replace("\'", "\"")
            result.data = result.data.replace("\'", "\"")
            result.data = result.data.replace("\'", "\"")
            result.data = result.data.replace("\'", "\"")
            result.data = result.data.replace("\'", "\"")
            result.data = result.data.replace("\'", "\"")
            result.data = JSON.parse(result.data)
            resolve(result.data)
        }, function (error) {
            if (error.response && error.response.status) {
                console.log(error.response);
                reject(error.response.status);
            }
            reject(error);
        });
    });
};
