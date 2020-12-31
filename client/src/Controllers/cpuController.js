import {
    getCpuInformationsRequest,
} from '../Services/cpuServices';


import {
    cpuRequestStatusChanged,
    cpuInformationChanged,
} from '../Actions/cpuActions';


function getCpuInformations() {
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            dispatch(cpuRequestStatusChanged(true));
            var getCpuInformationsPromise = getCpuInformationsRequest();
            getCpuInformationsPromise.then(function (result) {
                dispatch(cpuInformationChanged(result));
                return resolve(result);
            }, function (error) {
                console.log("  error", error)
            });
            getCpuInformationsPromise.finally(function (finalResult) {
                dispatch(cpuRequestStatusChanged(false));
            });
        });
    };
}


export default {
    getCpuInformations: getCpuInformations,
};