export const mobilesReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_MOBILE":
      return action.payload;
    case "SORT_BY_SELL":
      return action.payload;
    case "SORT_BY_VIEW":
      return action.payload;
    case "SORT_BY_CHEAPEST":
      return action.payload;
    case "SORT_BY_BRANDS":
      return action.payload;
    default:
      return state;
  }
};
