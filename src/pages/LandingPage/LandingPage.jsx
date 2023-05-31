import React, { useState } from 'react'; // <-- useState is a react hook and imported here, you must always import react hooks
import scrollToElement from '../../shared/utility/scrollToElement';
import PortfolioCard from './PortfolioCard';
import ContactForm from './ContactForm';
import Render3DShape from './Render3DShape';

const POSSIBLE_SHAPES = [
  'torus',
  'sphere',
  'dodecahedron',
  'icosahedron',
  'octahedron',
  'tetrahedron',
  'torusknot',
  'sahilsknot'
];

const INITIAL_SHAPE_INDEX = 0;
const INITIAL_SHAPE = POSSIBLE_SHAPES[INITIAL_SHAPE_INDEX];

const LandingPage = () => {
  const heroImage = 'luffy.jpeg';
  const [shape, setShape] = useState(INITIAL_SHAPE);
  let prevShapeIndex = INITIAL_SHAPE_INDEX;

  const handleClick = () => {
    let randomIndex = prevShapeIndex;
    while (randomIndex === prevShapeIndex) {
      randomIndex = Math.floor(Math.random() * POSSIBLE_SHAPES.length);
    }
    prevShapeIndex = randomIndex;
    setShape(POSSIBLE_SHAPES[randomIndex]);
  };
  return (
    <div>
      <Render3DShape className="fixed top-0 left-0 z-0 w-screen h-screen opacity-50" shape={shape} />

      <div className="max-w-4xl w-full relative z-10">
        <div id="home" className="flex items-center min-h-screen pb-96 py-12 px-6 text-white">
          <div className="bg-black flex flex-col-reverse gap-y-12 justify-between md:flex-row p-12 bg-opacity-80 rounded-md">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">Hello, I'm Sahil</h1>
              <p className="mb-8">Welcome to my portfolio website. You can learn more about me and see my work here.</p>
              <button
                onClick={() => scrollToElement('about')}
                className="bg-white text-blue-900 px-6 py-3 rounded hover:bg-lime-400 hover:text-black hover:font-bold font-bold cursor-pointer">
                Learn More
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                onClick={() => handleClick()}
                src={heroImage}
                alt="Photography of Sahil"
                className="w-3/4 h-auto rounded-full object-cover mx-auto cursor-pointer transition-scale duration-300 hover:outline"
              />
            </div>
          </div>
        </div>

        <div id="about" className="min-h-screen py-12 px-6 text-white">
          <div className="bg-black bg-opacity-80 p-12 rounded-md">
            <h2 className="text-3xl font-bold mb-4">About me</h2>
            <p className="mb-8">
              I'm a self-taught Frontend Web Developer with a strong foundation in HTML, CSS, and JavaScript. As I continue to expand my skills, I am excited to bring my expertise in HTML, CSS, and JavaScript to the development of web applications using React and Tailwind. My passion
              lies in creating responsive and mobile-friendly websites that combine functionality with an eye for
              design.
            </p>
            <p className="mb-8">
              I'm always keeping up with the latest trends in frontend development and am eager to learn and implement
              new technologies. With a deep interest in AI, I aim to merge creativity with technology to deliver
              high-quality web solutions.
            </p>
            <p className="mb-8">
              I've built a variety of projects, from fun, interactive sites like a Template Generator and a Review
              Display, to practical webpages like a Restaurant Menu Card. Each project has refined my skills and
              enhanced my problem-solving abilities.
            </p>
            <p>
              I'm excited to leverage my skills and enthusiasm to contribute to the growth of an innovative
              organization.
            </p>
            <button
              onClick={() => scrollToElement('portfolio')}
              className="bg-white text-blue-900 px-6 py-3 rounded mt-8 hover:bg-lime-400 hover:text-black hover:font-bold font-bold cursor-pointer">
              See my work
            </button>
          </div>
        </div>

        <div id="portfolio" className="min-h-screen py-12 px-6 text-white">
          <div className="bg-black flex flex-col justify-between p-12 bg-opacity-80 rounded-md">
            <h2 className="text-3xl font-bold mb-4">My Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PortfolioCard
                title="Airbnb Homepage"
                imageSrc="airbnb.png"
                imgAltTxt="Preview image of the Airbnb Homepage"
                clickUrl="https://air-bnb-xi.vercel.app/">
                The project showcases the ability to build a web application using modern frontend technologies and libraries such as React and Tailwind CSS.
              </PortfolioCard>

              <PortfolioCard
                title="Meme generator"
                imageSrc="projectMeme.jpg"
                imgAltTxt="Preview image of the meme generator project"
                clickUrl="https://template-challenge-topaz.vercel.app/">
                Fully responsive site to generate fun memes, riddles, quotes, and jokes with one click. Made with HTML,
                CSS, and JavaScript.
              </PortfolioCard>

              <PortfolioCard
                title="Weather App"
                imageSrc="weather-app.png"
                imgAltTxt="Preview image of weather app project"
                clickUrl="https://weather-app-theta-lime.vercel.app/">
                Check weather conditions with This React-based app. User-friendly interface displays temperature, humidity, wind speed, and other conditions. Stay informed, anywhere.
              </PortfolioCard>

              <PortfolioCard
                title="Restaurant menu grid"
                imageSrc="projectRestaurant.jpg"
                imgAltTxt="Preview image of a restaurant menu grid project"
                clickUrl="https://chimerical-malasada-5266f6.netlify.app/">
                Restaurant menu card developed using HTML, CSS, and JavaScript, with a simple and user-friendly design.
                Fully responsive for easy navigation.
              </PortfolioCard>
            </div>
          </div>
        </div>
        <div id="contact" className="min-h-screen py-12 px-6 text-white">
          <div className="bg-black bg-opacity-80 p-12 rounded-md max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
