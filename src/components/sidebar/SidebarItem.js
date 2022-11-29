import React from "react";
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

function SidebarItem({ menu, isActive }) {
  return isActive === true ? (
    <div className="sidebar-item active">
      <p> {menu.img} {menu.name}  <ArrowRightOutlinedIcon className="next-icon"/> </p>
    </div>
  ) : (
    <div className="sidebar-item ">
      <p> {menu.img} {menu.name} <ArrowRightOutlinedIcon className="next-icon" /> </p>
    </div>
  );
}

export default SidebarItem;