import React, { useState } from 'react';
import Sidebar from './Sidebar';

const sampleCardsData = [
  { id: 1, name: "Generic", adminCount: 10, membersCount: 10 },
  { id: 2, name: "Enterprise", adminCount: 5, membersCount: 50 },
  { id: 3, name: "Professional", adminCount: 8, membersCount: 30 },
  { id: 4, name: "Startup", adminCount: 3, membersCount: 15 },
  { id: 5, name: "Corporate", adminCount: 12, membersCount: 70 },
  { id: 6, name: "Small Business", adminCount: 4, membersCount: 20 },
  { id: 7, name: "Non-Profit", adminCount: 2, membersCount: 10 },
  { id: 8, name: "Educational", adminCount: 6, membersCount: 40 },
  { id: 9, name: "Agency", adminCount: 9, membersCount: 25 },
];

const Organizations: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar onToggle={setSidebarOpen} />

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-[200px]" : "ml-[60px]"}`}>
        {/* Header Section */}
        <div className=" bg-yellow-300 h-[60px] flex justify-end px-4 py-2">
          <button className="bg-black text-white font-bold rounded-md px-4 py-2">Logout</button>
        </div>

        {/* Card Section */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleCardsData.map((card) => (
            <div key={card.id} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">{card.name}</h2>
              <p className="text-gray-600">Admins: {card.adminCount}</p>
              <p className="text-gray-600">Members: {card.membersCount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organizations;
