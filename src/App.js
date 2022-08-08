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

      <section id="future">
        <h1>Designed for the future</h1>
        <div>
          <img src="" alt="" />
        </div>
        <h2>Introducing an extensible editor</h2>
        <p>
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blag.
        </p>
        <h2>Robust content management</h2>
        <p>
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you're
          in full control.
        </p>
      </section>
    </div>
  );
}

export default App;
