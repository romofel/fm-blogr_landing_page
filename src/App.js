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

      <section id="state-art">
        <div>
          <img src="" alt="" />
        </div>
        <h1>State of the Art Infrastructure</h1>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </section>

      <section id="features"></section>

      <footer>
        <div>Blogr</div>
        <ul>
          <li>
            <span>Product</span>
            <ul>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
          </li>
          <li>
            <span>Company</span>
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </li>
          <li>
            <span>Connect</span>
            <ul>
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
