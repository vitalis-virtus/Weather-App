import React from "react";
import { GlobalSvgSelector } from "../../../../assets/images/icons/global/GlobalSvgSelector";

import s from "./ThisDay.module.scss";

type Props = {};

export const ThisDay = (props: Props) => {
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>20°</div>
          <div className={s.this__day_name}>Сьогодні</div>
        </div>
        <GlobalSvgSelector id="sun"/>
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Час: <span>14:08</span>
        </div>
        <div className={s.this__city}>
          Місто: <span>Kyiv</span>
        </div>
      </div>
    </div>
  );
};
