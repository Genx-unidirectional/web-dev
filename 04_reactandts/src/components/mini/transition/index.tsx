"use client";
import { useState } from "react";
import AboutTab from "./AboutTab";
import ContactTab from "./ContactTab";
import PostsTab from "./PostsTab";
import TabButton from "./TabButton";

export default function TabTransition() {
  const [tab, setTab] = useState("about");
  const TAB_ARR = [
    {
      name: "about",
      component: <AboutTab />,
    },
    {
      name: "contact",
      component: <ContactTab />,
    },
    {
      name: "posts",
      component: <PostsTab />,
    },
  ];

  return (
    <div className="w-[400px] h-[400px] justify-center items-center flex flex-col">
      <div className="flex justify-between items-center">
        {TAB_ARR.map((item) => {
          return (
            <TabButton
              key={`${item.name}aa13`}
              tabName={item.name}
              isACtive={tab === item.name}
              setTab={setTab}
            />
          );
        })}
      </div>
      {TAB_ARR.map((item) => {
        if (tab === item.name) {
          return <div key={`${item.name}aa123`}>{item.component}</div>;
        } else {
          return null;
        }
      })}
    </div>
  );
}
