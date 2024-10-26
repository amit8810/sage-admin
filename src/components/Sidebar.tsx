import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Building } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarProps {
  onToggle: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggle }) => {
  const [isOpen, setOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setOpen((prev) => {
      onToggle(!prev);
      return !prev;
    });
  };

  return (
    <div className={`fixed h-screen bg-yellow-500 ${isOpen ? "w-[200px]" : "w-[60px]"} transition-width duration-300`}>
      <button
        className="absolute bg-black rounded-full p-1 mt-2 transition-all duration-200"
        style={{ left: isOpen ? "185px" : "45px" }}
        onClick={toggleSidebar}
      >
        {isOpen ? <ChevronLeft size={24} color="white" /> : <ChevronRight size={24} color="white" />}
      </button>
      
      <ul className="flex flex-col items-center p-4 mt-1 gap-2">
        <li className="bg-black text-white font-bold mb-4 px-4 py-2 rounded-full w-full flex justify-center hover:bg-gray-700 transition-colors">
          <Link to="/organizations">
            {isOpen ? "@Demo" : "@"}
          </Link>
        </li>
        
        <li className="flex items-center gap-2 bg-black text-white font-bold px-4 py-2 rounded-md w-full justify-center hover:bg-gray-700 transition-colors">
          <Link to="/organizations">
            <Building color="white" size={24} />
          </Link>
          {isOpen && <span>Organizations</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
