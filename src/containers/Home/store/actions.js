export const actions = {
  FETCH_VIDEO_DATA: "FETCH_VIDEO_DATA",
  SAVE_VIDEO_DATA: "SAVE_VIDEO_DATA",
  REMOVE_DATA: "REMOVE_DATA",
};

export const fetchVideosData = () => ({
  type: actions.FETCH_VIDEO_DATA,
});

export const saveVideoData = (videos) => ({
  type: actions.SAVE_VIDEO_DATA,
  videos,
});

export const removeData = () =>({
  type: actions.REMOVE_DATA,
});
