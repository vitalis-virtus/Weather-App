import React, { useEffect, useState } from "react";
import Select from "react-select";
import { GlobalSvgSelector } from "../../assets/images/icons/global/GlobalSvgSelector";
import { Theme } from "../../context/ThemeContext";
import { useTheme } from "../../hooks/useTheme";

import s from "./Header.module.scss";

type Props = {};

export const Header = (props: Props) => {
  const theme = useTheme();

  const changeCurrentTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const options = [
    { value: "city-1", label: "Kyiv" },
    { value: "city-2", label: "Polonne" },
    { value: "city-3", label: "Novoselitsia" },
  ];

  //styles for our select-component
  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.LIGHT ? "rgba(71, 147, 255, 0.2)" : "#4f4f4f",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: "100",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.LIGHT ? "#000" : "#fff",
    }),
    indicatorSeparator: (styles: any) => ({
      ...styles,
      display: "none",
    }),
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
          <div className={s.title}>Weather App</div>
        </div>
      </div>

      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeCurrentTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          options={options}
          styles={colourStyles}
          defaultValue={options[0]}
        />
      </div>
    </header>
  );
};
