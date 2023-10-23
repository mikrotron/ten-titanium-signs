export const enablePolling = true;
export const pollingInterval = 1000;

export const newCommentDelay = 2500;

export const server = window.location.origin.replace("5173", "3001");
console.log("HOLLA", server);
export const endpoint = {
  fetch: `${server}/getComments`,
  create: `${server}/createComment`,
  seed: `${server}/createComments`,
  purge: `${server}/deleteComments`,
};
export const apiHeaders = { "Content-Type": "application/json" };
