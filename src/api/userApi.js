import {
  userEndpoint,
  titleEndpoint,
  commentsEndpoint,
} from "../endpoints/endpoints";

export async function fetchAllUsers() {
  const res = await fetch(userEndpoint.fetchAll);

  return res.json();
}

export async function fetchChangeTitle() {
  const res = await fetch(titleEndpoint.fetchAll);

  return res.json();
}

export async function fetchShowComments() {
  const res = await fetch(commentsEndpoint.fetchAll);

  return res.json();
}