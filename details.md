# Holition's Imgur UI - Details

- Better improvements for login sessions. If you refresh the page you lose the token and have to re-login again. The token can be stored in the local storage or have it in a cookie.
- Infinite scroll. When having a lot of images the API should be able to retrieve images by pages, using offset and limit.
- Handling the images sizes a little bit better. Now the height and width is fixed so image may not look as good always.
- Use containers for getting things from the Redux state and passing it to the component.
- Serverside rendering. If you want to have better SEO, we should have a node server that serves the UI already built in the server with all the info.
- Better design for the login form. autofocus and when writing password and hitting enter should login. Better UX.
- In the listing the `(public)` shouldn't be shown. All of them are public.
- Just basic testing. Unit for happy paths for simple React components and interacting with the inner state, for actions, reducers, selectors and services. If more time, I would use [protractor](https://www.protractortest.org/#/), [puppeteer](https://www.npmjs.com/package/puppeteer) for component tests. Or [pix-diff](https://www.npmjs.com/package/pix-diff) for visual test
- ![][]esponsive UI but can be a little better.
- Better error handling for the actions.
- When doing commits I didn't test right away due to time constraint. I tested at the end. It wouldn't be like this. Each feature has it tests in the correct branch to be seen before merging it to master.
