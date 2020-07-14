// ACTION
export const ACTION_LOAD_DATA = 'LOAD_DATA';
export const ACTION_SET_DATA='SET_DATA'
// ACTION TYPE
export const ACTION_TYPE_UNIT = 'UNIT';
export const ACTION_TYPE_CATEGORY = 'CATEGORY';

// ACTION CREATOR
export const loadDataActionCreator = (actionType) => {
    debugger
    return {
        type: ACTION_LOAD_DATA,
        actionType: actionType
    }
}

export const setDataActionCreator = (actionType,data) => {
    return {
        type: ACTION_SET_DATA,
        actionType: actionType,
        payload:data
    }
}