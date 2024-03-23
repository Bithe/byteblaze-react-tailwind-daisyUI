import HeroHome from "../components/HeroHome";
import wave from "../assets/images/wave.svg"

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-133px)] flex flex-col relative justify-center ">

      <HeroHome></HeroHome>

      <img className=" absolute bottom-0 w-full" src={wave} alt="" />

    </div>
  );
};

export default Home;
