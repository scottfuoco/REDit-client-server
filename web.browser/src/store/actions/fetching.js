const FETCHING_RESOURCE = 'FETCHING_RESOURCE';
const DONE_FETCHING = 'DONE_FETCHING';

export const fetchingResource = () => ({ type: FETCHING_RESOURCE });
export const doneFetching = () => ({ type: DONE_FETCHING });