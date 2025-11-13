import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src={BG_URL}
          alt="background"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
      Gpt Movie Suggestion
    </div>
  )
}

export default GptSearch
