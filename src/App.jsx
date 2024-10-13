


import './App.css';
import ColorList from './components/ColorList/ColorList';
import Tabs from './components/Tabs/Tabs';

const App = () => {
  return (
    <div className="kzui-app">
      <h1>Color Manager</h1>
      <Tabs/>
      <ColorList />
    </div>
  );
};

export default App;
