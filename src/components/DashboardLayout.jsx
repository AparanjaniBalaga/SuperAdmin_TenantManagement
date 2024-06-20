import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <aside className="bg-gray-900 text-white w-64 p-4 rounded-xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/manage-tenant" className="flex items-center">
                <span className="ml-2">Manage Tenant</span>
              </Link>
            </li>
            <li className="mb-4"><Link to="/landlord">Landlord's</Link></li>
            <li className="mb-4"><Link to="/subscription">Subscription</Link></li>
            <li className="mb-4"><Link to="/reports">Reports</Link></li>
            <li className="mb-4"><Link to="/properties">Properties</Link></li>
            <li className="mb-4"><Link to="/document-verification">Document Verification</Link></li>
            <li className="mb-4"><Link to="/agreement">Agreement</Link></li>
            <li className="mb-4"><Link to="/landlord-terms">Landlord Terms & Condition</Link></li>
            <li className="mb-4"><Link to="/tenant-terms">Tenant Terms & Condition</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-500 p-4">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;