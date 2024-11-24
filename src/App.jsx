
import Clock from "./Components/Clock";
import ColorFlipper from "./Components/ColorFlipper";
import Currency from "./Components/Currency";
import Timer from "./Components/Timer";
import { Routes, Route, Link } from "react-router-dom";
import WeatherApp from "./Components/WeatherApp";

const App = () => {
  return (
    <div className="">
   
      <nav className="flex flex-wrap bg-blue-600 text-white justify-around py-[0.5rem] ">
        <Link
          className="px-2 py-1 hover:bg-white hover:text-black rounded-md"
          to="/clock"
        >
          clock
        </Link>
        <Link
          className="px-2 py-1 hover:bg-white hover:text-black rounded-md"
          to="/colorFlipper"
        >
          colorFlipper
        </Link>
        <Link
          className="px-2 py-1 hover:bg-white hover:text-black rounded-md"
          to="/currency"
        >
          currency
        </Link>
        <Link
          className="px-2 py-1 hover:bg-white hover:text-black rounded-md"
          to="/timer"
        >
          Timer
        </Link> 
        <Link
          className="px-2 py-1 hover:bg-white hover:text-black rounded-md"
          to="/weather"
        >
          Weather
        </Link>
      </nav>
      <Routes>
        <Route path="/clock" element={<Clock />} />
        <Route path="/colorFlipper" element={<ColorFlipper />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/weather" element={<WeatherApp />} />
      </Routes>
    </div>
  );
};

export default App;
