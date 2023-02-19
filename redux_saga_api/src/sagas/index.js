import { all, takeLatest, put } from "redux-saga/effects";

function* fetchNews() {
    const getData = yield fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-06-06&sortBy=publishedAt&apiKey=e2647c10a1a74b9586e48dc9376bd6b6").then(response => response.json());

    yield put({
        type: "NEWS_RECEIVED", 
        json: getData.articles
    })
}

function* actionWatcher() {
    yield takeLatest('GET_NEWS', fetchNews)
}

export default function* rootSaga() {
    yield all([
        actionWatcher()
    ])
}