import React, { useState } from "react";

const Recomendedproducts = () => {
  const [activeTab, setActiveTab] = useState("featured");

  const tabs = [
    { id: "featured", label: "Featured", color: "bg-[red]" },
    { id: "new", label: "New Arrivals", color: "bg-[#5eff00]" },
    { id: "top", label: "Top Rated", color: "bg-[#0077ff]" },
    { id: "best", label: "Best Seller", color: "bg-[#ae00ff]" },
  ];

  return (
    <div className="container">
      <div className="bg-[#b1b1b1]">
        <h2 className="text-[23px] font-[600] text-center mt-[40px]">
          Recommended For You
        </h2>

        {/* Tabs */}
        <div className="grid justify-center mt-[30px]">
          <ul className="flex gap-8 font-[500]">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative cursor-pointer hover:text-[#0066ff]
                ${activeTab === tab.id ? "text-[#0066ff] after:w-full" : ""}
                after:content-[''] after:block after:h-[2px] after:bg-[#0066ff] after:transition-all after:duration-300
                ${activeTab === tab.id ? "after:w-full" : "after:w-0"}
                after:mx-auto after:mt-[5px]
                `}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Tab Content */}
        <div className="mt-[40px] relative h-[500px]">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                tab.color
              } ${activeTab === tab.id ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recomendedproducts;
