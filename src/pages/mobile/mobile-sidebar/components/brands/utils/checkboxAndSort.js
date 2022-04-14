import _ from "lodash";

export const brandSort = (brandMobiles, item) => {
  if (_.isEmpty(brandMobiles)) {
    const b = [];
    b.push(item.name);
    return b;
  } else {
    const b = [...brandMobiles.mobiles.brand];
    b.push(item.name);
    return b;
  }
};

export const changeCheckbox = (brandRef ,item) => {
  if (brandRef) {
    brandRef.current.map((el, i) => {
      if (el.current.classList.contains(item.name)) {
        el.current.checked
          ? (el.current.checked = false)
          : (el.current.checked = true);
      }
    });
  }
};
