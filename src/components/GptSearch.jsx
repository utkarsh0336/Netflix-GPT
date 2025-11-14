import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-fit" src={BG_URL} alt="background" />
      </div>
      <div className=""></div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </>
  );
};

export default GptSearch;
