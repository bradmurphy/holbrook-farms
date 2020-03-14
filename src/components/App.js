import React, { useContext } from 'react';

// components
import {
    Contact,
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
                    Holbrook Farms is a full-service family-oriented multi-discipline training and boarding barn conveniently
                    located to North Fulton, Cherokee and Forsyth counties. The 82-acre property features a 24-stall center
                    aisle barn. Our Outdoor Riding arena is (160x300) with 3” of silica sand maintained daily. Our 60’ round
                    pen is available for groundwork or training. Holbrook features 3 large turnout pastures and trails. All
                    disciplines are welcome.
                </p>
                <p>
                    Inside our gates at Holbrook Farms it is our intent to encourage and support a family community for our
                    horses and their partners. If you are looking for a laid-back environment to call home- please come visit
                    us.
                </p>
            </Page>
            <Page id="boarding" headline="Boarding">
                <p>
                    At Holbrook we realize that each horse demands daily individualized attention. We recognize that all
                    horses are not created equal and we work with you to design a personalized care program to enhance
                    your equine partnership. (Holbrook offers a limited number of full boarding opportunities- please call for
                    availability)
                </p>
                <div className="list">
                    <h3>Amenities</h3>
                    <ul>
                        <li>82 beautiful acres</li>
                        <li>Full Size Arena (160x300) maintained daily 3” silica sand</li>
                        <li>Round Pen available (60 feet)</li>
                        <li>Feeding pastures available</li>
                        <li>Trails available</li>
                        <li>Western Pleasure Trainer available</li>
                        <li>Trailer parking available</li>
                    </ul>
                </div>
                <div className="list">
                    <h3>Full Board Includes unlimited access to all amenities:</h3>
                    <ul>
                        <li>Hot and Cold Wash Racks</li>
                        <li>Tack Rooms/Bathroom/Breakroom</li>
                        <li>12x12 Stalls (limited 12x24)</li>
                        <li>Daily stall cleaning</li>
                        <li>Automatic waterers</li>
                        <li>Commercial Fans (available)</li>
                        <li>Daily Turn out</li>
                        <li>All water cleaned daily</li>
                        <li>Variety of quality feeds 2x daily</li>
                        <li>Timothy/Fescue Hay 2x daily</li>
                        <li>Supplement distribution</li>
                        <li>Evening well checks</li>
                    </ul>
                </div>
                <div className="list">
                    <h3>Amenities</h3>
                    <ul>
                        <li>Hot and Cold Wash Racks</li>
                        <li>Tack Rooms/Bathroom/Breakroom</li>
                        <li>All water cleaned daily</li>
                        <li>Personal Feed Room</li>
                        <li>Trails available</li>
                        <li>Medication assistance as needed</li>
                        <li>Feeding pastures available</li>
                        <li>Round bales of Timothy/Fescue Hay</li>
                        <li>Pastures fertilized and sprayed for weeds annually</li>
                        <li>Evening well checks</li>
                    </ul>
                </div>
            </Page>
            <Page id="gallery" headline="Gallery">
                <Gallery images={state.images} pos={state.thumbnailPos} />
            </Page>
            <Page id="contact" headline="Contact">
                <p>
                    Stop by and Visit our Farm.  We are a working farm, so please call us for a convenient appointment-we like to be able to give you a tour.
                </p>
                <Contact />
            </Page>
        </main>
      </div>
  )
};

export default App;
