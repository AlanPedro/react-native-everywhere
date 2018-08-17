import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";

const URL = 'http://reduxblog.herokuapp.com/api';
const KEY = '?key=123';

export function getPosts() {
  const request = axios.get(`${URL}/posts${KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}
