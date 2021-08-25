import logo from './logo.svg';
import './App.css';
import Address from './Component/Address';
import FullName from './Component/FullName';
import ProfilePhoto from './Component/ProfilePhoto';
function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
   <Address/>
    </div>
  );
}

export default App;
