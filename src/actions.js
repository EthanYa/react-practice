/*
 * action types
 */

export const SET_POSTS = 'SET_POSTS'
export const REMOVE_POST = 'REMOVE_POST'

/*
 * action creators
 */

export function setPosts(posts) {
  return { type: SET_POSTS, posts }
}

export function removePost(id) {
  return { type: REMOVE_POST, id }
}