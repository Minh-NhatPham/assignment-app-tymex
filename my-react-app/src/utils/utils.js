export const filterItems = (items, filters) => {
  return items.filter((item) => {
    return Object.keys(filters).every((key) => {
      if (filters[key] === "all") {
        return item[key];
      }
      return item[key].toString() === filters[key].toString();
    });
  });
};
export const sortItems = (items, option) => {
  const [key, value] = option?.split(":");

  if (value === "all") return items;

  return items?.sort((a, b) => (value === "asc" ? a[key] - b[key] : b[key] - a[key]));
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
