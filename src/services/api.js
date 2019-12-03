export function fetchData() {
  return fetch(`http://localhost:3000/data`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'GET',
  }).then(function(response) {
    return response.json().then(function(data) {
      return data;
    });
  });
}

export function saveData(id, data) {
  return fetch(`http://localhost:3000/data/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify(data),
  }).then(function(response) {
    return response.json().then(function(data) {
      return data;
    });
  });
}
