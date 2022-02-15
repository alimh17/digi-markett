export const setPorductAction = (product) => (dispatch, setState) => {
  dispatch({ type: "SET_PRODUCT", payload: product });
};
