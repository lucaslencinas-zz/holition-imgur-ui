
export function fetchUserImages() {
  // const url = '/api/users/:username/images';
  //
  // return fetch(url)
  //   .then((response) => response.json());
  return Promise.resolve([
    {
      imgId: 'some-id2',
      imgUrl: 'http://some-url.com/leonardo-example',
      username: 'leonardo',
      title: 'Some title for some-id1',
      isPublic: false
    },
    {
      imgId: 'some-id3',
      imgUrl: 'http://some-url.com/lencinas-example',
      username: 'leonardo',
      title: 'Some title for some-id1',
      isPublic: true
    }
  ]);
}

export function fetchProfile() {
  // const url = '/api/users/:username';
  //
  // return fetch(url)
  //   .then((response) => response.json());
  return Promise.resolve({
    name: 'Lucas',
    username: 'lucas'
  });
}

export function fetchFullProfile() {
  // const url = '/api/users/:username/profile';
  //
  // return fetch(url)
  //   .then((response) => response.json());
  return Promise.resolve({
    name: 'Lucas',
    username: 'lucas',
    age: 25,
    gender: 'male',
    password: 'lucas123'
  });
}
