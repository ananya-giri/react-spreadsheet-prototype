import { useState } from 'react';
import Toolbar from './components/Toolbar';
import Tabs from './components/Tabs';
import SpreadsheetTable from './components/SpreadsheetTable';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Q3 Financial Overview');
  const tabs = ['Q3 Financial Overview', 'Sheet 2', 'Sheet 3'];

  return (
    <div className="max-w-7xl mx-auto mt-8 p-4 bg-white shadow rounded">
      {/* Toolbar */}
      <Toolbar />

      {/* Tabs */}
      <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />

      {/* Spreadsheet */}
      <SpreadsheetTable />
    </div>
  );
};

export default App;
