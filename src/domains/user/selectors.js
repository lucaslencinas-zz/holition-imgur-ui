export const profile = (state) => state.user.profile;
export const isLoggedIn = (state) => {
  const { profile: userProfile } = state.user;
  return userProfile && !!userProfile.authToken;
}; // TODO use reselect instead
export const userImages = (state) => state.user.images;
