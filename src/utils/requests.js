'use strict';

export let getItems = function(url) {
  return fetch(url).then(items => items.json());
};

export let postItem = function (url, item) {
  return fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  })
    .then(status => status.json());
};

export let putItem = function (url, amount) {
  return fetch(url, {
    method: 'PUT',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  })
    .then(status => status.json());
};

export let deleteItem = function (url) {
  return fetch(url, {
    method: 'DELETE',
    headers: { "Content-Type": "application/json" },
  })
    .then(status => status.json());
};