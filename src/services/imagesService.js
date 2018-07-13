export function list() {
  // const url = '/api/images';
  //
  // return fetch(url)
  //   .then((response) => response.json());
  return Promise.resolve([
    {
      imgId: 'some-id1',
      imgUrl: 'http://some-url.com/lucas-example',
      username: 'lucas',
      title: 'Some title for some-id1',
      isPublic: true
    },
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
      username: 'lencinas',
      title: 'Some title for some-id1',
      isPublic: true
    }
  ]);
}
