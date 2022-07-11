import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchCharactersSuccess, fetchCharactersError } from '../actions';

function* fetchCharactersSaga() {
    try {
        const response = yield call(
            fetch, 
            "https://rickandmortyapi.com/api/character");
        const data = yield response.json();
        yield put(fetchCharactersSuccess(data.results));
    } catch (error) {
        yield put(fetchCharactersError(error.message));
    }

    
}

function* filterCharactersSaga({ payload }) {
    try {
        const response = yield call(fetch,
            `https://rickandmortyapi.com/api/character/?name=${payload}`
        );
        const data = yield response.json();
        yield put(fetchCharactersSuccess(data.results));

    } catch (error) {
        yield put(fetchCharactersError(error.message));
    }
}

function* nextPageCharactersSaga({ payload }) {
    try {
      const response = yield call(
        fetch,
        `https://rickandmortyapi.com/api/character?page=${payload}`
      );
      const data = yield response.json();
      yield put(fetchCharactersSuccess(data.results));
    } catch (error) {
      yield put(fetchCharactersError(error.message));
    }
  }

  function* previousPageCharactersSaga({ payload }) {
    try {
      const response = yield call(
        fetch,
        `https://rickandmortyapi.com/api/character?page=${payload}`
      );
      const data = yield response.json();
      yield put(fetchCharactersSuccess(data.results));
    } catch (error) {
      yield put(fetchCharactersError(error.message));
    }
  }
  

export default function* sagas() {
    yield takeLatest('FETCH_CHARACTERS_START', fetchCharactersSaga);
    yield takeLatest('FILTER_CHARACTERS_START', filterCharactersSaga);
    yield takeLatest('NEXT_PAGE_CHARACTERS', previousPageCharactersSaga);
    yield takeLatest('PREVIOUS_PAGE_CHARACTERS', nextPageCharactersSaga);
}