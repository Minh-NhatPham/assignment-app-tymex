import { Select } from "antd";
import React from "react";
import SearchBox from "../../components/SearchBox";
import useFetch from "../../hooks/useFetch";
import { buildCategoriesOptions } from "../../utils/utils";
import "./Sidebar.css";

function Sidebar({ onFilterChange, onSortChange }) {
  const { error, loading, response } = useFetch({ url: "/category" }, []);
  const handleChange = (option) => {
    const [key, value] = option.split(":");
    onFilterChange({ key, value });
  };

  const handleSortChange = (option) => {
    onSortChange(option);
  };
  return (
    <>
      <SearchBox />
      <div className="category-selector-container">
        {response?.data
          ? buildCategoriesOptions(response.data).map(({ title, options }) => (
              <div className="category-selector__wrapper" key={`category-select__${title}`}>
                <div className="category-selector__label">{title.toUpperCase()}</div>
                <Select
                  className={"category-selector__select"}
                  style={{ width: "100%" }}
                  defaultValue={"All"}
                  options={options}
                  onChange={handleChange}
                />
              </div>
            ))
          : null}
        <div className="sort-selector__wrapper">
          <div className="sort-selector__label">SORT BY</div>
          <Select
            className={"sort-selector__select"}
            style={{ width: "100%" }}
            defaultValue={"all"}
            options={[
              {
                value: "all",
                label: "No Sort",
              },
              {
                value: "price:des",
                label: "Price: High to low",
              },
              {
                value: "price:asc",
                label: "Price: Low to high",
              },
            ]}
            onChange={handleSortChange}
          />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
