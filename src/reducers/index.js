import { ACTION_TYPE_UNIT, ACTION_TYPE_CATEGORY, ACTION_SET_DATA } from '../actions'

const initialData = {
    units: [],
    categories: []
};

export default (state = initialData, action) => {
    if (action.actionType === ACTION_TYPE_UNIT) {
        debugger
        switch (action.type) {
            case ACTION_SET_DATA:
                return { units: action.payload }
            default:
                return state;
        }
    }
    if (action.actionType === ACTION_TYPE_CATEGORY) {
        switch (action.type) {
            case ACTION_SET_DATA:
                return { categories: action.payload }
            default:
                return state;
        }
    }
    return state;
}