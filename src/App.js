import React, { useContext } from 'react';

// components
import Menu from './components/Menu';
import { Context } from "./Store";

const App = () => {
  const [ state, dispatch ] = useContext(Context);
  const openMenu = (menu) => menu ? dispatch({ type: 'CLOSE_MENU' }) : dispatch({ type: 'OPEN_MENU' });
  const scrollTo = (e) => {
      e.preventDefault();
      dispatch({ type: 'CLOSE_MENU' });
      const element = document.getElementById(e.target.href.split('#')[1]);
      element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <div className="site__wrapper">
        <Menu open={state.menu}>
          <nav className="site__nav">
              <ul>
                  <li>
                      <a href="#about" onClick={(e) => scrollTo(e) }>About</a>
                  </li>
                  <li>
                      <a href="#boarding" onClick={(e) => scrollTo(e) }>Boarding</a>
                  </li>
                  <li>
                      <a href="#gallery" onClick={(e) => scrollTo(e) }>Gallery</a>
                  </li>
                  <li>
                      <a href="#contact" onClick={(e) => scrollTo(e) }>Contact</a>
                  </li>
              </ul>
          </nav>
        </Menu>
        <div className="site__main">
            <button className="site__hamburger" onClick={() => openMenu(state.menu)}>Menu</button>
            <section className="site__section-wrapper" id="about">
                <div className="site__section">
                    <div className="wrapper">
                        <h1>About</h1>
                        <p>
                            As much stuff as possible — with as little fear as possible. It’s much, much better to wind up with a lot of crap having tried it than to overthink in the beginning and not do it.
                        </p>
                    </div>
                </div>
            </section>
            <section className="site__section-wrapper" id="boarding">
                <div className="site__section">
                    <div className="wrapper">
                        <h1>Boarding</h1>
                        <p>
                            As much stuff as possible — with as little fear as possible. It’s much, much better to wind up with a lot of crap having tried it than to overthink in the beginning and not do it.
                        </p>
                    </div>
                </div>
            </section>
            <section className="site__section-wrapper" id="gallery">
                <div className="site__section">
                    <div className="wrapper">
                        <h1>Gallery</h1>
                        <p>
                            As much stuff as possible — with as little fear as possible. It’s much, much better to wind up with a lot of crap having tried it than to overthink in the beginning and not do it.
                        </p>
                    </div>
                </div>
            </section>
            <section className="site__section-wrapper" id="contact">
                <div className="site__section">
                    <div className="wrapper">
                        <h1>Contact</h1>
                        <p>
                            As much stuff as possible — with as little fear as possible. It’s much, much better to wind up with a lot of crap having tried it than to overthink in the beginning and not do it.
                        </p>
                    </div>
                </div>
            </section>
        </div>
      </div>
  )
};

export default App;
