import "@testing-library/jest-dom";
global.structuredClone = (val) => JSON.parse(JSON.stringify(val));
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
