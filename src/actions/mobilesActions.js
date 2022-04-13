import { mobile } from "../data/mobile";

export const mobileInit = () => (dispatch) => {
  dispatch({ type: "INIT_MOBILE", payload: mobile });
};

export const mobileSortBySell = () => (dispatch) => {
  const compare = (a, b) => {
    if (b.sell < a.sell) {
      return -1;
    }
    if (b.sell > a.sell) {
      return 1;
    }
    return 0;
  };

  const sorted = mobile.sort(compare);

  dispatch({ type: "SORT_BY_SELL", payload: sorted });
};

export const mobileSortByView = () => (dispatch) => {
  const compare = (a, b) => {
    if (b.view < a.view) {
      return -1;
    }
    if (b.view > a.view) {
      return 1;
    }
    return 0;
  };

  const sorted = mobile.sort(compare);

  dispatch({ type: "SORT_BY_VIEW", payload: sorted });
};

export const mobileSortByCheapest = () => (dispatch) => {
  const compare = (a, b) => {
    if (Number(a.price) < Number(b.price)) {
      return -1;
    }
    if (Number(a.price) > Number(b.price)) {
      return 1;
    }
    return 0;
  };

  const sorted = mobile.sort(compare);

  dispatch({ type: "SORT_BY_CHEAPEST", payload: sorted });
};
export const mobileSortByExpensive = () => (dispatch) => {
  const compare = (a, b) => {
    if (Number(b.price) < Number(a.price)) {
      return -1;
    }
    if (Number(b.price) > Number(a.price)) {
      return 1;
    }
    return 0;
  };

  const sorted = mobile.sort(compare);

  dispatch({ type: "SORT_BY_EXPENSIVE", payload: sorted });
};

export const mobilesSortByBrands = (brand) => (dispatch) => {
  const brands = [];

  if (brand.length === 0) {
    dispatch({ type: "INIT_MOBILE", payload: mobile });
  } else {
    mobile.map((m, i) => {
      brand.map((b) => {
        if (m.brand === b.toLowerCase()) {
          brands.push(m);
        }
      });
    });
    dispatch({ type: "SORT_BY_BRANDS", payload: brands });
  }
};
