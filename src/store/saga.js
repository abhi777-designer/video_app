import { all, fork } from 'redux-saga/effects';
import * as homeSaga from '../containers/Home/store/saga';

export default function* sagas() {
    yield all([...Object.values(homeSaga)].map(fork));
}