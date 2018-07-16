export function list() {
  const url = '/api/images';

  return fetch(url)
    .then((response) => response.json());
}
