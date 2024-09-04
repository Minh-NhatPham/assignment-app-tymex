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

export const buildCategoriesOptions = (categories) => {
  return Object.keys(categories).map((key) => {
    const options = categories[key].map((option) => ({
      value: `${key}:${option.value}`,
      label: option.label,
    }));
    return { title: key, options };
  });
};
