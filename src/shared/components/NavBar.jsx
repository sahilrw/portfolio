import scrollToElement from '../utility/scrollToElement';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-12">
        <span className="font-semibold text-xl tracking-tight">My Portfolio</span>
      </div>
      <div className="flex items-center justify-end">
        <div className="text-sm">
          <button
            onClick={() => scrollToElement('home')}
            className="inline-block text-white hover:text-lime-400 mr-4 hover:underline cursor-pointer">
            Home
          </button>
          <button
            onClick={() => scrollToElement('about')}
            className="inline-block text-white hover:text-lime-400 mr-4 hover:underline cursor-pointer">
            About
          </button>
          <button
            onClick={() => scrollToElement('contact')}
            className="inline-block text-white hover:text-lime-400 mr-4 hover:underline cursor-pointer">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
