
export function fetchUserImages({ username, authToken }) {
  const url = `/api/users/${username}/images`;

  return fetch(url, {
    method: 'GET',
    headers: { Authorization: authToken }
  })
    .then((response) => response.json());
}

export function fetchProfile({ username, authToken }) {
  const url = `/api/users/${username}/profile`;

  return fetch(url, {
    method: 'GET',
    headers: { Authorization: authToken }
  })
    .then((response) => response.json());
}

export function login({ username, password }) {
  const url = '/api/login';

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => response.json());
}

export function logout({ authToken }) {
  const url = '/api/logout';

  return fetch(url, {
    method: 'GET',
    headers: { Authorization: authToken }
  })
    .then((response) => response.json());
}
