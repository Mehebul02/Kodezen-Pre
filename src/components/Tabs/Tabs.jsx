
import './Tabs.css';

const Tabs = () => {
  return (
    <div className="kzui-tabs">
      <div className="kzui-tab kzui-tab--active">Colors</div>
      <div className="kzui-tab kzui-tab--disabled">Group 1</div>
      <div className="kzui-tab kzui-tab--disabled">Group 2</div>
    </div>
  );
};

export default Tabs;
