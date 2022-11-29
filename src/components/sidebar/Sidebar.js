import React from "react";
// import "../styles/sidebar.css";
import { Link, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import "../../styles/sidebar.scss";

import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AddToQueueOutlinedIcon from '@mui/icons-material/AddToQueueOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import DoNotDisturbAltOutlinedIcon from '@mui/icons-material/DoNotDisturbAltOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function Sidebar() {

  // URL의 path값을 받아올 수 있다.
  const pathName = useLocation().pathname;

  const menus = [
    { img: <ArticleOutlinedIcon/>, name: "채혈접수", path: "/Collecting" },
    { img: <AddToQueueOutlinedIcon />, name: "검체등록", path: "/Register" },
    { img: <AssignmentIndOutlinedIcon />, name: "검사결과 등록", path: "/InsertResult" },
    { img: <DoNotDisturbAltOutlinedIcon />, name: "부적합 검체등록", path: "/Unsuitable" },
    { img: <ContentPasteSearchOutlinedIcon />, name: "검사결과 조회", path: "/ResultCheck" }
  ];

  return (
    <>
 
    <div className="sidebar">
   
      <div className="user_wrap">
        <div className="user">
          <AccountCircleRoundedIcon /> <span>김현민 님</span>
        </div>
      </div>

      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <SidebarItem
              menu={menu}
              isActive={pathName === menu.path ? true : false}	// 현재 URL pathname과 객체에 담긴 path값 일치 여부 확인
            />
          </Link>
        );
      })}
    </div>

    </>
  );
}

export default Sidebar;