/// <reference lib="webworker" />

addEventListener('message', (ev) => {
  fetch(ev.data.url, {
    // headers: {
    //   Authorization: 'Bearer ' + ev.data.token
    // }
  })
    .then((res) => res.json())
    .then((res) => {
      postMessage({
        res
      });
    })
    .catch((error) => {
      postMessage({
        error
      });
    });
});
