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
        {activeTab > 0 && <button>Prev</button>}
        {activeTab < tabs.length - 1 && <button>Next</button>}
        
        {activeTab === tabs.length - 1 && <button>Submit</button>}
      </div>
    </div>
  );
};
export default Tabform;
