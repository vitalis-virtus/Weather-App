import React from "react";
import Moment from "react-moment";
import { GlobalSvgSelector } from "../../../../assets/images/icons/global/GlobalSvgSelector";
import { Weather } from "../../../../store/types/types";

import s from "./ThisDay.module.scss";

type Props = {
  weather: Weather;
};

export const ThisDay = ({ weather }: Props) => {
  // console.log("weather: ", weather);
  // console.log("weather name: ", weather.name);

  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={s.this__day_name}>Сьогодні</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Час: <span>{<Moment format="HH:mm:ss" interval={1000} />}</span>
        </div>
        <div className={s.this__city}>
          Місто: <span>{weather.name}</span>
        </div>
      </div>
    </div>
  );
};
