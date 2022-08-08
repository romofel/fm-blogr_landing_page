import logo from "./logo.svg";
import "./App.css";
import Hamburger from "hamburger-react";

function App() {
  return (
    <div>
      <nav>
        <div>Blogr</div>
        <Hamburger />
      </nav>

      <div>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>

        <div className="ctas">
          <button>Start for Free</button>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default App;
