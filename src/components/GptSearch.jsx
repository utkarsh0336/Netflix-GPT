import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
<<<<<<< HEAD
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-fit" src={BG_URL} alt="background" />
      </div>
      <div className=""></div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </>
  );
};
=======
        <div className="fixed -z-10">
        <img
          className='h-screen object-cover md:h-auto md:w-auto md:object-center'
          src={BG_URL}
          alt="background"
        />
      </div>
    <div className=''>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
    </>
  )
}
>>>>>>> 83543596143df207eeff7fdb822103508398ff29

export default GptSearch;
