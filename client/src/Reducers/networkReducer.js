export const networkReducer = (state = {}, action) => {
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "NETWORK_INFORMATION_CHANGED":
            newState.data = action.payload;
            return newState;
        case "NETWORK_REQUST_STATUS_CHANGED":
            newState.progress = action.payload;
            return newState;
        default:
            return newState;
    }
};