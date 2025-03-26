import { useState } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Settings from "./Settings";
import "./style.css";

const Tabform = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    interest: [""],
    theme: "dark",
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Only 18+";
        }
        if (!data.email || data.email < 2) {
          err.email = "Email is not valid";
        }

        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.interest.length < 1) {
          err.interest = "Select atleast one interest";
        }
        setErrors(err);
        return err.interest ? false : true;
      },
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
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const submitButton = () => {
    console.log(data);
  };
  const [errors, setErrors] = useState({});

  const ActiveTab = tabs[activeTab].component;

  return (
    <div>
      <div className="heading-container">
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className="heading"
              onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <div className="tab-body">
        <ActiveTab data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={prevTab}>Prev</button>}
        {activeTab < tabs.length - 1 && <button onClick={nextTab}>Next</button>}

        {activeTab === tabs.length - 1 && (
          <button onClick={submitButton}>Submit</button>
        )}
      </div>
    </div>
  );
};
export default Tabform;
