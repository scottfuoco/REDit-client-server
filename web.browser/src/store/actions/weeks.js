import { URL, API, GETREQUEST } from '../../constants';
import { fetchingResource, doneFetching } from './fetching';

export const addWeek = (id, title, lessons) => ({
  type: 'ADD_WEEK',
  payload: { id, title, lessons},
});

export const addLessons = lessons => ({
  type: 'ADD_LESSONS',
  payload: lessons,
});

export const loadLessons = lessons => ({
  type: 'LOAD_LESSONS',
  payload: lessons,
});

export const fetchLessons = lessons => dispatch => {
  dispatch(fetchingResource());
  fetch(`${URL}/${API}/weeks`, GETREQUEST)
    .then(res => res.json())
    .then(json => {
      dispatch(loadLessons(json));
      dispatch(doneFetching);
    });
};