//import TraineeProjectHomepage from "../assets/img/projects/projet-formation-homepage.png";
//import TraineeProjectContent from "../assets/img/projects/projet-formation-collection.png";
//import CocktailTimeHomepage from "../assets/img/projects/cocktail-time-homepage.png";
//import CocktailTimeContent from "../assets/img/projects/cocktail-time-content.png";
//import KaamelottContent from "../assets/img/projects/kaamelott-content.png";
//import PortfolioHomepage from "../assets/img/projects/portfolio-homepage.png";

export const projectsDB = [
  {
    name: "Trainee Project",
    //img1src: "./src/assets/img/projects/projet-formation-homepage.png",
    //img2src: "../src/assets/img/projects/projet-formation-collection.png",
    img1src: "./assets/img/projects/projet-formation-homepage.png",
    img2src: "../assets/img/projects/projet-formation-collection.png",
    technos: ["- HTML/CSS", "- JavaScript", "- PHP", "- MySQL"],
    desc: 'A movie application based on "The Movie Database" <a href="https://www.themoviedb.org" rel="noreferrer" target="_blank" class="text-slate-200 underline hover:no-underline">(themoviedb.org)</a>.<br/>The user can create an account and collect information about the movies in their video library, stay updated on the latest, most popular films, or those coming soon to theaters, and search for information by movie title.',
    codeLink: "https://github.com/mikhenaff/MonCineClub",
  },
  {
    name: "Cocktail Time",
    img1src: "../src/assets/img/projects/cocktail-time-homepage.png",
    img2src: "../src/assets/img/projects/cocktail-time-content.png",
    technos: ["- HTML/CSS", "- JavaScript"],
    desc: 'An application based on "TheCocktailDB" API <a href="https://www.thecocktaildb.com" rel="noreferrer" target="_blank" class="text-slate-200 underline hover:no-underline">(thecocktaildb.com)</a>.<br/>The user can search for cocktail recipes by name or ingredient and retrieve a random recipe.',
    demoLink: "https://mikhenaff.github.io/cocktail-app",
    codeLink: "https://github.com/mikhenaff/cocktail-app",
  },
  {
    name: "Kaamelott Quotations",
    img1src: "../src/assets/img/projects/kaamelott-content.png",
    technos: ["- React", "- TypeScript", "- Tailwind CSS"],
    desc: 'My first React application. Very simple, based on "Kaamelott" API <a href="https://kaamelott.chaudie.re" rel="noreferrer" target="_blank" class="text-slate-200 underline hover:no-underline">(kaamelott.chaudie.re)</a>.<br/>The app allows the user to display a random character quote from the TV series Kaamelott, specifying the season and episode name from which it originates.',
    demoLink: "https://mikhenaff.github.io/kaamelott-app-react-ts-tld",
    codeLink: "https://github.com/mikhenaff/kaamelott-app-react-ts-tld",
  },
  {
    name: "Portfolio",
    img1src: "../src/assets/img/projects/portfolio-homepage.png",
    technos: ["- React", "- Tailwind CSS"],
    desc: '<span class="centered-text">This is the portfolio you are on right now !</span>',
    codeLink: "https://github.com/mikhenaff/portfolio",
  },
];
