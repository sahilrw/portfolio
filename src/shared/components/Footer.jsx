const Footer = () => {
  return (
    <footer className="bg-black text-white w-full pt-32 pb-16 px-6 z-20">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-between items-center">
          <div className="mb-2 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Sahil.dev</p>
          </div>
          <div>
            <a href="mailto:sahilrw05@gmail.com" className="text-white hover:text-lime-300  hover:underline mr-4">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/sahilrw/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-lime-300 hover:underline mr-4">
              LinkedIn
            </a>
            <a
              href="https://twitter.com/_sahil_r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-lime-300 hover:underline mr-4">
              Twitter
            </a>
            <a
              href="https://github.com/SahilRw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-lime-300 hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
