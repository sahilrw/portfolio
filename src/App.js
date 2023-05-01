import LandingPage from './pages/LandingPage/LandingPage';
import Navbar from './shared/components/NavBar';
import Footer from './shared/components/Footer';
import Render3DShape from './pages/LandingPage/Render3DShape';
import Contactbox from './shared/components/ContactBox/ContactBox';

const possibleShapes = ['torus', 'sphere', 'dodecahedron', 'icosahedron', 'octahedron', 'tetrahedron', 'torusknot'];
const selectRandomShape = () => {
  return 'torusknot'; //disable this line to enable random shapes
  const randomIndex = Math.floor(Math.random() * possibleShapes.length);
  return possibleShapes[randomIndex];
};

function App() {
  const shape = selectRandomShape() || 'sphere';

  return (
    // The outer div is a flex container arranged vertically (flex-col)
    // and is always at least the height of the screen (min-h-screen)
    // The main section takes up all available space (flex-grow)
    // Cool! This is a great way to make sure the footer is always at the bottom
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex justify-center bg-gray-900 ">
        <LandingPage />
      </main>
      <Render3DShape followMouse={true} animateOnScroll={false} className={'z-20'} shape={shape} color={'#92cf2f'} />
      <Contactbox />
      <Footer />
    </div>
  );
}

export default App;
