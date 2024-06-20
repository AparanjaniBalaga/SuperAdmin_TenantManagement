import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ManageTenant from './components/ManageTenant';
import Landlord from './components/Landlord';
import Subscription from './components/Subscription';
import Reports from './components/Reports';
import Properties from './components/Properties';
import DocumentVerification from './components/DocumentVerification';
import Agreement from './components/Agreement';
import LandlordTerms from './components/LandlordTerms';
import TenantTerms from './components/TenantTerms';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-auto">
      <aside className="bg-gray-900 w-64 p-4 rounded-r-2xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold pb-[5vw] text-white">Dashboard</h1>
        </div>
        <nav>
          <ul className='space-y-[3vw] text-[#ABB3BB]'>
            <li className="mb-4"><Link to="/manage-tenant" className=' p-[1vw] rounded-3xl' >Manage Tenant</Link></li>
            <li className="mb-4"><Link to="/landlord" className=' p-[1vw] rounded-3xl' >Landlords</Link></li>
            <li className="mb-4"><Link to="/subscription" className=' p-[1vw] rounded-3xl' >Subscription</Link></li>
            <li className="mb-4"><Link to="/reports" className='p-[1vw] rounded-3xl' >Reports</Link></li>
            <li className="mb-4"><Link to="/properties" className='p-[1vw] rounded-3xl' >Properties</Link></li>
            <li className="mb-4"><Link to="/document-verification" className='p-[1vw] rounded-3xl' >Document Verification</Link></li>
            <li className="mb-4"><Link to="/agreement" className='p-[1vw] rounded-3xl' >Agreement</Link></li>
            <li className="mb-4"><Link to="/landlord-terms" className='p-[1vw] rounded-3xl' >Landlord <br/>Terms & Conditions</Link></li>
            <li className="mb-4"><Link to="/tenant-terms" className='p-[1vw] rounded-3xl' >Tenant <br className=''/>Terms & Condition</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-500 p-4">
        {children}
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/manage-tenant" element={<ManageTenant />} />
          <Route path="/landlord" element={<Landlord />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/document-verification" element={<DocumentVerification />} />
          <Route path="/agreement" element={<Agreement />} />
          <Route path="/landlord-terms" element={<LandlordTerms />} />
          <Route path="/tenant-terms" element={<TenantTerms />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;