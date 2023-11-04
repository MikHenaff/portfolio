//import TraineeProjectHomepage from "../assets/img/projects/projet-formation-homepage.png";
//import TraineeProjectContent from "../assets/img/projects/projet-formation-collection.png";
//import CocktailTimeHomepage from "../assets/img/projects/cocktail-time-homepage.png";
//import CocktailTimeContent from "../assets/img/projects/cocktail-time-content.png";
//import KaamelottContent from "../assets/img/projects/kaamelott-content.png";
//import PortfolioHomepage from "../assets/img/projects/portfolio-homepage.png";
//import WeatherAppHomepage from "../assets/img/projects/weather-app-homepage.png";
//import WeatherAppContent from "../assets/img/projects/weather-app-content.png";

export const projectsDB = [
  {
    name: "Trainee Project",
    //img1src: {TraineeProjectHomepage},
    //img2src: { TraineeProjectContent },
    technos: ["- HTML/CSS", "- JavaScript", "- PHP", "- MySQL"],
    desc: 'A movie application based on "The Movie Database" <a href="https://www.themoviedb.org" rel="noreferrer" target="_blank" class="text-slate-200 underline hover:no-underline">(themoviedb.org)</a>.<br/>The user can create an account and collect information about the movies in their video library, stay updated on the latest, most popular films, or those coming soon to theaters, and search for information by movie title.',
    codeLink: "https://github.com/mikhenaff/MonCineClub",
  },
  {
    name: "Cocktail Time",
    //img1src: {CocktailTimeHomepage},
    //img2src: {CocktailTimeContent},
    technos: ["- HTML/CSS", "- JavaScript"],
    desc: 'An application based on "TheCocktailDB" API <a href="https://www.thecocktaildb.com" rel="noreferrer" target="_blank" class="text-slate-200 underline hover:no-underline">(thecocktaildb.com)</a>.<br/>The user can search for cocktail recipes by name or ingredient and retrieve a random recipe.',
    demoLink: "https://mikhenaff.github.io/cocktail-app",
    codeLink: "https://github.com/mikhenaff/cocktail-app",
  },
  {
    name: "Kaamelott Quotes",
    //img1src: {KaamelottContent},
    technos: ["- React", "- TypeScript", "- Tailwind CSS"],
    desc: 'My first React application. Very simple, based on "Kaamelott" API <a href="https://kaamelott.chaudie.re" rel="noreferrer" target="_blank" class="text-slate-200 underline hover:no-underline">(kaamelott.chaudie.re)</a>.<br/>The app allows the user to display a random character quote from the TV series Kaamelott, specifying the season and episode name from which it originates.',
    demoLink: "https://mikhenaff.github.io/kaamelott-app-react-ts-tld",
    codeLink: "https://github.com/mikhenaff/kaamelott-app-react-ts-tld",
  },
  {
    name: "Portfolio",
    //img1src: {PortfolioHomepage},
    technos: ["- React", "- Tailwind CSS"],
    desc: '<span class="centered-text">This is the portfolio you are on right now !</span>',
    codeLink: "https://github.com/mikhenaff/portfolio",
  },
  {
    name: "Weather App",
    //img1src: {WeatherAppHomepage},
    //img2src: {WeatherAppContent},
    technos: ["- React", "- Tailwind CSS"],
    desc: 'A React wheather application designed as a mobile app and based on "OpenWeatherMap" APIs <a href="https://openweathermap.org" rel="noreferrer" target="_blank" class="text-slate-200 underline hover:no-underline">(openweathermap.org)</a>.<br/>The app allows the user to search for a city and display the local date and time, the temperature, the weather description, the local sunrise and sunset times, the wind and the humidity. The backgroung image changes according to the weather and the time (day or night).',
    demoLink: "https://mikhenaff.github.io/weather-app-react",
    codeLink: "https://github.com/mikhenaff/weather-app-react",
  },
];
