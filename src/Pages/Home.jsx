
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <section 
      className="flex items-center h-screen bg-cover xs:w-full bg-left lg:bg-center text-white font-customFont relative bg-home"
    >
      <div className="max-w-4xl p-6 mx-2">
        <h1 className="md:text-6xl text-red-900 font-bold xs:text-center lg:text-left xl:text-left xs:text-4xl lg:text-6xl xl:text-6xl 3xl:text-7xl  ">
          Save Lives,
        </h1>
        <h1 className=" md:text-6xl text-red-900 font-bold mb-4 xs:text-center xs:font-bold lg:text-left xl:text-left xs:text-4xl lg:text-6xl xl:text-6xl 3xl:text-7xl">
          Donate <span className="text-red-700">Blood</span>
        </h1>
        <p className=" text-red-900 mb-6 flex items-center ms:max-w-lg xs:max-w-lg lg:max-w-lg xl:max-w-xl 3xl:max-w-2xl xs:text-center lg:text-left lg:w-auto xl:text-left xs:text-2xl lg:text-2xl xl:text-2xl 3xl:text-5xl">
          Your donation can make a difference in someone's life. Join us in our mission to save lives through blood donation.
        </p>
        
        <div className="xs:mb-4">
          <Link 
            to="/donate" 
            className="bg-red-600 text-white text-xl hover:bg-red-500 px-12  py-3 rounded transition font-customFont font-bold  
            xs:flex xs:mx-12 xs:justify-center sm:flex sm:justify-center  lg:felx lg:text-center lg:mr-52 lg:mx-0 xl:flex xl:mr-52 xl:mx-0 "
          >
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;