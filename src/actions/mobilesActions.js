import { mobile } from "../data/mobile";
import _ from "lodash";

export const mobileInit = () => (dispatch) => {
  dispatch({ type: "INIT_MOBILE", payload: mobile });
};

export const mobileSortBySell = () => (dispatch, getState) => {
  const state = getState().productSort;

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
  if (_.isEmpty(state)) {
    dispatch({ type: "SORT_BY_SELL", payload: sorted });
  } else {
    const brands = [];
    sorted.map((m, i) => {
      state.mobiles.brand.map((b) => {
        if (m.brand === b.toLowerCase()) {
          brands.push(m);
        }
      });
    });
    dispatch({ type: "SORT_BY_BRANDS", payload: brands });
    if (state.mobiles.brand.length === 0) {
      dispatch({ type: "SORT_BY_SELL", payload: sorted });
    }
  }
};

export const mobileSortByView = () => (dispatch, getState) => {
  const state = getState().productSort;

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

  if (_.isEmpty(state)) {
    dispatch({ type: "SORT_BY_SELL", payload: sorted });
  } else {
    const brands = [];
    sorted.map((m, i) => {
      state.mobiles.brand.map((b) => {
        if (m.brand === b.toLowerCase()) {
          brands.push(m);
        }
      });
    });
    dispatch({ type: "SORT_BY_BRANDS", payload: brands });
    if (state.mobiles.brand.length === 0) {
      dispatch({ type: "SORT_BY_SELL", payload: sorted });
    }
  }
};

export const mobileSortByCheapest = () => (dispatch, getState) => {
  const state = getState().productSort;

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

  if (_.isEmpty(state)) {
    dispatch({ type: "SORT_BY_SELL", payload: sorted });
  } else {
    const brands = [];
    sorted.map((m, i) => {
      state.mobiles.brand.map((b) => {
        if (m.brand === b.toLowerCase()) {
          brands.push(m);
        }
      });
    });
    dispatch({ type: "SORT_BY_BRANDS", payload: brands });
    if (state.mobiles.brand.length === 0) {
      dispatch({ type: "SORT_BY_SELL", payload: sorted });
    }
  }
};
export const mobileSortByExpensive = () => (dispatch, getState) => {
  const state = getState().productSort;

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

  if (_.isEmpty(state)) {
    dispatch({ type: "SORT_BY_SELL", payload: sorted });
  } else {
    const brands = [];
    sorted.map((m, i) => {
      state.mobiles.brand.map((b) => {
        if (m.brand === b.toLowerCase()) {
          brands.push(m);
        }
      });
    });
    dispatch({ type: "SORT_BY_BRANDS", payload: brands });
    if (state.mobiles.brand.length === 0) {
      dispatch({ type: "SORT_BY_SELL", payload: sorted });
    }
  }
};


// --------------------------------------------------------------------------

export const mobilesSortByBrands = (brand) => (dispatch, getState) => {
  const brands = [];
  const state = getState().productSort;

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
