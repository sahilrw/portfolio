import LandingPage from './pages/LandingPage/Landing';
import Navbar from './shared/components/NavBar';
import Footer from './shared/components/Footer';

function App() {
  return (
    // The outer div is a flex container arranged vertically (flex-col)
    // and is always at least the height of the screen (min-h-screen)
    // The main section takes up all available space (flex-grow)
    // Cool! This is a great way to make sure the footer is always at the bottom
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex justify-center bg-gray-900">
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
