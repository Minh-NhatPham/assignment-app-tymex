export const filterItems = (items, filters) => {
  return items.filter((item) => {
    return Object.keys(filters).every((key) => {
      if (filters[key] === "all") {
        return item[key];
      }
      return item[key] === filters[key];
    });
  });
};
