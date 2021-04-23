import { createSelector } from "reselect";
import { actions } from "./actions";

const initialState = {
  videos: null,
};

export const getVideoSelector = createSelector(
  (state) => state.homeReducer.videos,
  (videos) => videos
);


const HomeReducer = (state = initialState, payload = {}) => {
  switch (payload.type) {
    case actions.SAVE_VIDEO_DATA: {
      return {
        ...state,
        videos: payload.videos,
      };
    }
    case actions.REMOVE_DATA:{
      return initialState;
    }
    default:
      return {
        ...state,
      };
  }
};

export default HomeReducer;
