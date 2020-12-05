import { call, put } from 'redux-saga/effects';
import { doAddStories, doFetchStoriesError } from '../actions/story';
import { fetchStories } from '../api/story';

function* handleFetchStories(action) {
    const { query } = action;
    try{
    const result = yield call(fetchStories, query);
    yield put(doAddStories(result.hits));
    }
    catch (error) {
        yield put(doFetchStoriesError(error));
    }
}

export {
    handleFetchStories,
};