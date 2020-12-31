export const cpuReducer = (state = {}, action) => {
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "CPU_INFORMATION_CHANGED":
            newState.data = action.payload;
            return newState;
        case "CPU_REQEST_STATUS_CHANGED":
            newState.progress = action.payload;
            return newState;
        default:
            return newState;
    }
};