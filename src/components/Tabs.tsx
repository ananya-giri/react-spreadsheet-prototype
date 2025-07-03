type TabsProps = {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
};

const Tabs: React.FC<TabsProps> = ({ tabs, active, onChange }) => (
  <div className="flex border-b border-gray-200">
    {tabs.map(tab => (
      <button
        key={tab}
        onClick={() => onChange(tab)}
        className={`py-2 px-4 -mb-px ${
          active === tab
            ? 'border-b-2 border-blue-600 text-blue-600 font-semibold'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default Tabs;
