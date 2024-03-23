import { Link } from "react-router-dom";

const HeroHome = () => {
  return (
    <div className="hero -mt-16 px-8">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold w-full">
            Welcome to <span className="gap-0 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">ByteBlaze</span>
          </h1>
          <p className="py-6">
            ByteBlaze is the bridge between the complex world of technology and
            the curious minds eager to understand it
          </p>

          <div className="flex justify-center gap-8">
         

            <Link
              href="#_"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Read Blogs
              </span>
            </Link>

            {/* BOOKMARKS BUTTON */}
            <Link href="#_" className="relative px-6 py-3 font-bold text-black group">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
              <span className="relative">Bookmarks</span>
            </Link>
            {/*  */}


          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
