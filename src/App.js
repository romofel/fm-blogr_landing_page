import "./App.css";
import Hamburger from "hamburger-react";
import { useState } from "react";
import logo from "./assets/logo.svg";
import iconArrowDark from "./assets/icon-arrow-dark.svg";
import illustrationEditorMobile from "./assets/illustration-editor-mobile.svg";
import illustrationPhones from "./assets/illustration-phones.svg";
import bgPatternCircles from "./assets/bg-pattern-circles.svg";

function HoverMenuItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="hover-menu-item">
      <div className="hover-menu-title" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>{" "}
        <img className="hover-arrow" src={iconArrowDark} alt="down arrow" />
      </div>
      {isOpen && children}
    </li>
  );
}

function HoverMenu() {
  return (
    <div class="hover-menu">
      <ul>
        <HoverMenuItem title="Product">
          <HoverSubMenu
            items={[
              "Overview",
              "Pricing",
              "Marketplace",
              "Features",
              "Integrations",
            ]}
          />
        </HoverMenuItem>
        <HoverMenuItem title="Company">
          <HoverSubMenu items={["About", "Team", "Blog", "Careers"]} />
        </HoverMenuItem>
        <HoverMenuItem title="Contact">
          <HoverSubMenu items={["Contact", "Newsletter", "LinkedIn"]} />
        </HoverMenuItem>
      </ul>

      <div className="separator"></div>

      <div className="hover-ctas">
        <button className="hover-login">Login</button>
        <button className="hover-signup">Sign Up</button>
      </div>
    </div>
  );
}

function HoverSubMenu({ items }) {
  return (
    <ul className="hover-sub-menu">
      {items.map((item) => (
        <li className="hover-sub-menu-item">{item}</li>
      ))}
    </ul>
  );
}

function SectionLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="landing-bg">
      <nav>
        <div className="nav-bar">
          <div className="logo-container">
            <img src={logo} alt="company logo" />
          </div>
          <Hamburger
            color="white"
            onToggle={(toggled) => setIsMobileMenuOpen(toggled)}
          />
        </div>
        {isMobileMenuOpen && <HoverMenu />}
      </nav>

      <div className="landing-content-container">
        <h1 className="landing-title">A modern publishing platform</h1>
        <p className="landing-content">
          Grow your audience and build your online brand
        </p>

        <div className="ctas">
          <button className="cta-start">Start for Free</button>
          <button className="cta-learn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

function FutureContentItem({ children }) {
  return <div className="future-content-item">{children}</div>;
}

function SectionFuture() {
  return (
    <section id="future">
      <h1 className="future-heading">Designed for the future</h1>
      <div className="future-hero">
        <img src={illustrationEditorMobile} alt="" />
      </div>
      <div className="future-content">
        <FutureContentItem>
          <h2>Introducing an extensible editor</h2>
          <p>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blag.
          </p>
        </FutureContentItem>
        <FutureContentItem>
          <h2>Robust content management</h2>
          <p>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you're in full control.
          </p>
        </FutureContentItem>
      </div>
    </section>
  );
}

function SectionState() {
  return (
    <section id="state-art">
      <div className="state-art-hero">
        <img src={illustrationPhones} alt="phone illustration" />
        <img src={bgPatternCircles} alt="pattern circles" />
      </div>
      <h1>State of the Art Infrastructure</h1>
      <p>
        With reliability and speed in mind, worldwide data centers provide the
        backbone for ultra-fast connectivity. This ensures your site will load
        instantly, no matter where your readers are, keeping your site
        competitive.
      </p>
    </section>
  );
}

function SectionFeatures() {
  return (
    <section id="features">
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <div>
          <h2>Free, open, simple</h2>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>
        <div>
          <h2>Powerful tooling</h2>
          <p>
            Batteries included. We build a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
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
  );
}

function App() {
  return (
    <div>
      <SectionLanding />

      <SectionFuture />

      <SectionState />

      <SectionFeatures />

      <Footer />
    </div>
  );
}

export default App;
