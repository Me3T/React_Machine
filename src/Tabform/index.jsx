import { useState } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Settings from "./Settings";
import "./style.css";

const Tabform = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "Meet",
    age: "26",
    email: "meet@gmail.com",
    interest: ["Cricket", "Anime"],
    theme: "dark",
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interest",
      component: Interest,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const prevTab = () => {
    setActiveTab((prev) => prev - 1);
  };

  const nextTab = () => {
    setActiveTab((prev) => prev + 1);
  };

  const submit = () => {
    console.log(data);
  };

  const ActiveTab = tabs[activeTab].component;

  return (
    <div>
      <div className="heading-container">
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className="heading"
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <div className="tab-body">
        <ActiveTab data={data} setData={setData} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={prevTab}>Prev</button>}
        {activeTab < tabs.length - 1 && <button onClick={nextTab}>Next</button>}

        {activeTab === tabs.length - 1 && (
          <button onClick={submit}>Submit</button>
        )}
      </div>
    </div>
  );
};
export default Tabform;
