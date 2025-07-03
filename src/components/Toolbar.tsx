import { ArrowDownTrayIcon, ArrowUpTrayIcon, ShareIcon } from '@heroicons/react/24/outline';

const Toolbar: React.FC = () => (
  <div className="flex items-center justify-between py-2">
    {/* Left section */}
    <div className="flex items-center space-x-3">
      <button className="text-sm text-gray-700 hover:text-gray-900">Tool bar</button>
      <button className="text-sm text-gray-700 hover:text-gray-900">Hide fields</button>
      <button className="text-sm text-gray-700 hover:text-gray-900">Sort</button>
      <button className="text-sm text-gray-700 hover:text-gray-900">Filter</button>
      <button className="text-sm text-gray-700 hover:text-gray-900">View</button>
    </div>

    {/* Right section */}
    <div className="flex items-center space-x-2">
      <button className="flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded hover:bg-gray-200 text-sm">
        <ArrowUpTrayIcon className="h-5 w-5 mr-1" /> Import
      </button>
      <button className="flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded hover:bg-gray-200 text-sm">
        <ArrowDownTrayIcon className="h-5 w-5 mr-1" /> Export
      </button>
      <button className="flex items-center bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
        <ShareIcon className="h-5 w-5 mr-1" /> Share
      </button>
    </div>
  </div>
);

export default Toolbar;
