
import './Tabs.scss';

const Tabs = () => {
  return (
    <div className="kzui-tabs">
      <div className="kzui-tab kzui-tab--active">Colors</div>
      <div className="kzui-tab kzui-tab--disabled">Group</div>
      <div className="kzui-tab kzui-tab--disabled">Settings</div>
    </div>
  );
};

export default Tabs;
