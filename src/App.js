import React, { useContext } from 'react';
import { Context, useWindowEvent } from './Store';

// components
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Section from './components/Section';

const App = () => {
  const [ state, dispatch ] = useContext(Context);

  const openMenu = (menu) => menu ? dispatch({ type: 'CLOSE_MENU' }) : dispatch({ type: 'OPEN_MENU' });

  const scrollTo = (e) => {
      e.preventDefault();
      dispatch({ type: 'CLOSE_MENU' });
      const element = document.getElementById(e.target.href.split('#')[1]);
      element.scrollIntoView({ behavior: 'smooth' });
  };

  const switchThumbPos = () => window.matchMedia('(min-width: 768px)').matches ?
    dispatch({ type: 'THUMB_DESKTOP' }) : dispatch({ type: 'THUMB_MOBILE' });

  useWindowEvent('resize', switchThumbPos);
  useWindowEvent('load', switchThumbPos);

  return (
      <div className="site__wrapper">
        <Menu open={state.menu}>
          <nav className="site__nav">
              <ul>
                  <li><a href="#about" onClick={(e) => scrollTo(e) }>About</a></li>
                  <li><a href="#boarding" onClick={(e) => scrollTo(e) }>Boarding</a></li>
                  <li><a href="#gallery" onClick={(e) => scrollTo(e) }>Gallery</a></li>
                  <li><a href="#contact" onClick={(e) => scrollTo(e) }>Contact</a></li>
              </ul>
          </nav>
        </Menu>
        <div className="site__main">
            <button className="site__hamburger" onClick={() => openMenu(state.menu)}>
                <svg viewBox="0 0 100 80" width="20" height="20">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
            </button>
            <Section id="about" headline="About">
                <p>
                    As much stuff as possible — with as little fear as possible. It’s much, much better to wind up with a lot of crap having tried it than to overthink in the beginning and not do it.
                </p>
            </Section>
            <Section id="boarding" headline="Boarding">
                <p>
                    As much stuff as possible — with as little fear as possible. It’s much, much better to wind up with a lot of crap having tried it than to overthink in the beginning and not do it.
                </p>
            </Section>
            <Section id="gallery" headline="Gallery">
                <Gallery images={state.images} pos={state.thumbnailPos} />
            </Section>
            <Section id="contact" headline="Contact">
                <p>
                    As much stuff as possible — with as little fear as possible. It’s much, much better to wind up with a lot of crap having tried it than to overthink in the beginning and not do it.
                </p>
            </Section>
        </div>
      </div>
  )
};

export default App;
