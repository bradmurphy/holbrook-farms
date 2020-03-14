import React, { useContext } from 'react';

// components
import {
    Context,
    Hamburger,
    Gallery,
    Logo,
    Menu,
    Nav,
    Page,
    useWindowEvent
} from './';

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
      <div className="app__wrapper">
        <Menu open={state.menu}>
            <Nav click={(e) => scrollTo(e)} />
        </Menu>
        <main className="app__main">
            <Hamburger click={() => openMenu(state.menu)} />
            <Page id="about" headline="About">
                <Logo mobile />
                <p>
                    As much stuff as possible — with as little fear as possible. It’s much, much better to wind up with a lot of crap having tried it than to overthink in the beginning and not do it.
                </p>
            </Page>
            <Page id="boarding" headline="Boarding">
                <p>
                    As much stuff as possible — with as little fear as possible. It’s much, much better to wind up with a lot of crap having tried it than to overthink in the beginning and not do it.
                </p>
            </Page>
            <Page id="gallery" headline="Gallery">
                <Gallery images={state.images} pos={state.thumbnailPos} />
            </Page>
            <Page id="contact" headline="Contact">
                <p>
                    As much stuff as possible — with as little fear as possible. It’s much, much better to wind up with a lot of crap having tried it than to overthink in the beginning and not do it.
                </p>
            </Page>
        </main>
      </div>
  )
};

export default App;
