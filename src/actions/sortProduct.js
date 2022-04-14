export const sortMobilesByBrand = (brand) => (dispatch, getState) => {
  let brands = { ...getState().productSort };

  brands.mobiles = { brand: [...brand] };

  dispatch({ type: "SORT_MOBILE_BRAND", payload: { ...brands } });
};
