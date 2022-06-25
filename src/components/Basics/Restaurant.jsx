import "./Restaurant.css";
import Menu from "./menuApi.js";
import { MenuCard } from "./MenuCard";
import { useState } from "react";
import { Navbar } from "./Navbar";

const uniqueCategoryList = [
  ...new Set(
    Menu.map((item) => {
      return item.category;
    })
  ),
  "All",
];

// console.log(uniqueCategoryList);

export const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [categoryList, setCategoryList] = useState(uniqueCategoryList);

  const filterCategory = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedMenu = Menu.filter((item) => {
      return item.category === category;
    });
    setMenuData(updatedMenu);
  };

  return (
    <>
      <Navbar filterCategory={filterCategory} categoryList={categoryList} />
      <MenuCard menuData={menuData} />
    </>
  );
};
