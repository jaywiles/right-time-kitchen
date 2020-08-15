// imports
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

// other components

// styles
import '../App.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={5000}
    >
      <div data-src="./images/bowl-of-sliced-vegetables-and-meat-2059152.jpg" />
      <div data-src="./images/person-holding-sliced-vegetable-2284166.jpg" />
      <div data-src="./images/plate-of-cooked-meat-with-cooked-vegetable-2116094.jpg" />
      <div data-src="./images/bowl-of-sliced-vegetables-and-meat-2059153.jpg" />
      <div data-src="./images/selective-focus-photography-of-beef-steak-with-sauce-675951.jpg" />
      <div data-src="./images/selective-focus-photography-of-pasta-with-tomato-and-basil-1279330.jpg" />
    {/* line below to be replaced with router later on... */}
    
  </AutoplaySlider>
)

export default Slider;