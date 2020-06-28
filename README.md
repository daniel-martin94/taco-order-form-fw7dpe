# Welcome to the Dream Taco Shop Code Repo :rainbow: :taco:

This is the offical code repo for the 'Dream Taco Shop' a simple and elegant order form for building and your dream tacos.

This application built using [React](https://reactjs.org/)

## Example Usage

To retrieve a list of movies for a particular movie, submit a title in the search bar:

  <kbd>
     <img src="https://res.cloudinary.com/maribelduran/image/upload/c_scale,w_540/v1583138289/InitialMovieSearch_sthpqa.png"> 
  </kbd>
  
  
 # Example Output
 
   You will see a list of movies that matched the submitted title:
   
   <kbd>
     <img src="https://res.cloudinary.com/maribelduran/image/upload/c_scale,w_540/v1583138592/LionKingSearch_yin6g9.png"> 
  </kbd>
  
  
  
 When you select a movie from the list, it will take you to a page that provides more information about the movie:
 
 <kbd>
     <img src="https://res.cloudinary.com/maribelduran/image/upload/c_scale,w_500/v1583138591/LionKingResult_gsvsmq.png"> 
  </kbd>
  
  ### Prerequisites
In order to run this project locally, you should have the following installed:

- [NPM](https://www.npmjs.com/)

You should also:     
  1) Signup for a The Movie Database API key (https://developers.themoviedb.org/3/getting-started/introduction). <b>Make a note of the API key.</b>
  
  ### Installation & Startup
1) Fork this repo
2) Clone the fork
3) Install Dependencies with the command: `npm install`
4) Add a .env file to your project's root directory and set PROXY_SERVER_PORT and TMDB_API_URL to the following:
      ``` JavaScript 
      PROXY_SERVER_PORT=3001
      TMDB_API_URL=https://api.themoviedb.org/3
      ```

    <kbd>
   <img src="https://res.cloudinary.com/maribelduran/image/upload/c_scale,w_500/v1583140367/ENV2_nkdtym.png">
     
    </kbd>

5) You wil also need to set TMDB_API_KEY to your The Movie Database API key in the .env file
      ``` JavaScript 
        TMDB_API_KEY=<your_the_movie_database_api_key>
      ```
      <kbd>
     <img src="https://res.cloudinary.com/maribelduran/image/upload/c_scale,w_500/v1583140364/ENV1_aqnjta.png"> 
      </kbd>

6) Run both the React application and the server together with the command: 
    ```bash
      npm run dev
   ```
   
7) Visit http://localhost:3000

 Note:
    You can start the server on its own with the command ```npm run server ```.You can start the React application on its own with the command ``` npm start ```

Start Building! :rainbow: :taco:

[Working Demo ⚡️](https://stackblitz.com/edit/taco-order-form-fw7dpe)

