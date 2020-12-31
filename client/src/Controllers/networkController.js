import {
    getNetworkInformationsRequest,
} from '../Services/networkServices';


import {
    networkRequestStatusChanged,
    networkInformationChanged,
} from '../Actions/networkActions';


function getNetworkInformations() {
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            dispatch(networkRequestStatusChanged(true));
            var getNetworkInformationsPromise = getNetworkInformationsRequest();
            getNetworkInformationsPromise.then(function (result) {
                dispatch(networkInformationChanged(result));
                return resolve(result);
            }, function (error) {
                console.log("  error", error)
            });
            getNetworkInformationsPromise.finally(function (finalResult) {
                dispatch(networkRequestStatusChanged(false));
            });
        });
    };
}


export default {
    getNetworkInformations: getNetworkInformations,
};