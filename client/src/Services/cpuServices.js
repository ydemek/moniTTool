import axios from 'axios';
import proxy from './proxy.js';


export var getCpuInformationsRequest = function () {
    return new Promise(function (resolve, reject) {
        var axiosGetCpuInformationsPromise = axios.get(
            proxy.URL + '/api/cpu/');
        axiosGetCpuInformationsPromise.then(function (result) {
            console.log("  result", result)
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
