import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import genAI from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // This will search movie in TMDB API
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API Call to Ollama and get Movie Results

    const geminiQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only Give me names of 5 movies, comma-seperated like the example result given ahead. Example Result : Sholay, Don, Gadar, Golmaal, Koi Mil Gaya";

    const geminiResult = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: geminiQuery }] }],
    });

    // console.log(geminiResult.text);
    const gptMovies = geminiResult.text.split(",");
    // console.log(gptMovies);

    // For each movie I will search in TMDB API
    const promiseArray = gptMovies.map((movie) =>searchMovieTMDB(movie));
    // [Promise1, Promise2, Promise3, Promise4, Promise5]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));

    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //   searchText.current.value +
    //   ". Only Give me names of 5 movies, comma-seperated like the example result given ahead. Example Result : Sholay, Don, Gadar, Golmaal, Koi Mil Gaya";
    // const gptResults = await openai.chat.completions.create({
    //   model: "gpt-4o",
    //   messages: [{ role: "user", content: gptQuery }],
    // });
    // console.log(gptResults.choices[0].message.content);
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 bg-white rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 col-span-3 m-4 bg-red-600 text-white rounded-lg cursor-pointer"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
