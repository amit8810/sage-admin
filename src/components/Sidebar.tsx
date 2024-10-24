import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-yellow-500 text-black transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static`}>
        <div className="p-4">
          <h2 className="text-lg font-semibold">@Demo</h2>
          <nav className="mt-4">
            <ul>
              <li className="py-2 px-4 bg-black text-white hover:bg-yellow-600">Organization</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Hamburger Button (for mobile) */}
      <div className="lg:hidden p-4">
        <button onClick={toggleSidebar} className="text-black bg-yellow-500 p-2 rounded-md">
          {isOpen ? 'Close' : 'Open'} Menu
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
