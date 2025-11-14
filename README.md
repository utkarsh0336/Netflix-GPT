# Netflix GPT

- Create Vite
- Configured Tailwind CSS into our app
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In User API
- Created Redux Store with userSlice
- Implemented Sign Out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: If the user is not logged in Redirect /browse to Login Page and vice-versa.    
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Register TMDB API & create an app & get access token
- Get data from TMDB (Now playing movies) list API.
- Custom Hook for Now playing movies
- Create a movieSlice
- Update store with movies data
- Planning for MainContainer and SecondaryContainer
- Fetch data for Trailer video
- Update store with trailer video data
- Embedded the youtube video and make it autoplay and mute
- Tailwind classes to make MainContainer look awesome
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the Browse Page amazing with Tailwind CSS
- usePopularMovies Custom hook
- GPT Search Feature
- GPT Search Bar 
- (BONUS) Multilingual Feature in our app
- Get GPT Search Gemini API Key
- Gemini Search API Call
- Fetch Gemini Movie Suggestions from TMDB
- Created gptSlice and added data 
- Reused Movie List component to make movie suggestion container
- Memoisation
- Adding .env file
- Adding .env file to gitignore
- Made our site responsive
- Deployment


# Features
- Login/Sign Up
    - Sign In / Sign Up Form
    - redirect to Browse Page
- Browse (after authentication)
    - Header
    - Main Movie
        - Trailer in background
        - Title and description
        - Movie suggestion
            - Movie List * N

- Netflix GPT
    - Search Bar
    - Movie Suggestion


# Steps for Deployment on Firebase
    - 1. Install firebase CLI - `npm install -g firebase-tools`
    - 2. Firebase login - `firebase login`
    - 3. Initialize Firebase - `firebase init`, then select hosting
    - 4. Deploy command - `firebase deploy`