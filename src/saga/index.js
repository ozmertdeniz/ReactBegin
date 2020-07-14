import { takeEvery, call, put } from 'redux-saga/effects'
import { ACTION_LOAD_DATA, setDataActionCreator, ACTION_TYPE_UNIT, ACTION_TYPE_CATEGORY } from '../actions';
import axios from 'axios'

export default function* setup() {
    console.log("Saga middleware is running.");
    yield takeEvery(ACTION_LOAD_DATA, loadData);
}

function* loadData(action) {
    try {
        console.log("SAGA:loadData");
        console.log(action);
        debugger
        switch (action.actionType) {
            case "UNIT":
                debugger
                let result = yield call(sendGetRequest);
                yield put(setDataActionCreator(ACTION_TYPE_UNIT, result));
                break;
            case "CATEGORY":
                let categories = yield call(sendGetCategoryRequest);
                yield put(setDataActionCreator(ACTION_TYPE_CATEGORY, categories));
                break;
            default:
        }


    } catch (e) {
        console.log(e);
    }
}

const sendGetRequest = () => {
    console.log("Data is loading.....");
    return axios.get("https://jsonplaceholder.typicode.com/posts")    
        .then(res => res.data.data)
        .catch(e => e);
}

const sendGetCategoryRequest = () => {
    console.log("Data is loading.....");
    return axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.data.data)
        .catch(e => e);
}