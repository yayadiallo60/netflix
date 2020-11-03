import "./App.css";
import data from "./assests/data.json";
import Section from "./components/Sections";
import logo from "./assests/image/logo.png";

const App = () => {
  return (
    <>
      <img className="logo" src={logo} alt="logo" />
      <Section data={data} />
    </>
  );
};

export default App;
