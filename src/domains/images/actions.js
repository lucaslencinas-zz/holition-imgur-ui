import * as actions from './actionTypes';
import * as imagesService from '../../services/imagesService';

export function fetchImages() {
  return (dispatch) => (
    imagesService.list()
      .then((images) => (
        dispatch({
          type: actions.FETCH_IMAGES_SUCCESS,
          images
        })
      ))
  );
}
