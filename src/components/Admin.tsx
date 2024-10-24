import React from 'react';
import Sidebar from './Sidebar';
import { CirclePlus } from 'lucide-react';

const sampleCardsData = [
  {
    name: "Generic",
    adminCount: 10,
    membersCount: 10
  },
  {
    name: "Generic",
    adminCount: 10,
    membersCount: 10
  },
  {
    name: "Generic",
    adminCount: 10,
    membersCount: 10
  },
  {
    name: "Generic",
    adminCount: 10,
    membersCount: 10
  },
  {
    name: "Generic",
    adminCount: 10,
    membersCount: 10
  },
];

const Admin = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header Section */}
        <div className="bg-yellow-300 h-[60px] flex justify-end px-4 py-2">
          <button className="bg-black text-white font-bold rounded-md px-4 py-2">Logout</button>
        </div>

        {/* Card Section */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleCardsData.map((card, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">{card.name}</h2>
              <p className="text-gray-600">Admins: {card.adminCount}</p>
              <p className="text-gray-600">Members: {card.membersCount}</p>
            </div>
          ))}

          <div className='bg-white shadow-md rounded-lg p-4 flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <button> <CirclePlus color='grey'/> </button>
                <p className="text-gray-600">Add Organization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
