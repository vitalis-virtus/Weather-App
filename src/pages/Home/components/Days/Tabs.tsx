import React from "react";
import s from "./Days.module.scss";

type Props = {};

interface Tab {
  value: string;
}

export const Tabs = (props: Props) => {
  const tabs: Tab[] = [
    { value: "На тиждень" },
    { value: "На 10 днів" },
    { value: "На місяць" },
  ];
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab) => (
          <div key={tab.value} className={s.tab}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.cancel}>Відмінити</div>
    </div>
  );
};
