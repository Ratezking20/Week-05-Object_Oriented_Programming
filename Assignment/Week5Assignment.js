// Coding Steps:
// •	Create a menu app as seen in this week’s video. 
//  What you create is up to you as long as it meets the following requirements:
// •	Use at least one array.
// •	Use at least two classes.
// •	Your menu should have the options to create, view, and delete elements.


class Actor {
    constructor(name, role){
        this.name = name
        this.role = role
    }
    describe(){
    return `${this.name} "play's " ${this.role}`
}}

class Movie {
    constructor (name){
        this.name = name;
        this.actors = []
    }
    addActor (actor){
        if (actor instanceof Actor){
            this.actors.push(actor)
        }else{
            throw new error (`You can only add and instance of actor. Argument is not an actor: " ${player}`);
        }
     describe() ;{
        return `${this.name} has ${this.actors.length} actors.`;
     }
}}

class Menu {
    constructor(){
        this.movies = []
        this.selectedMovie = null
    }
    
    start (){
        let selection = this.showMainMenuOptions();
        while(selection != 0){
            switch(selection){
                case "1":
                    this.createMovie();
                    break;
                case "2":
                this.viewMovie();
                break;
                case "3":
                this.deleteMovie();
                break;
                case "4":
                this.displayMovies();
                break;
                default:
                    selection = 0
            }
            selection = this.showMainMenuOptions()
        }
        alert("See ya later Alligator!");
    } 

    showMainMenuOptions(){
        return prompt(`
            1.) Create New Movie
            2.) View Movie
            3.) Delete Movie
            4.) Display All Movies
            5.) Exit
    `);
    }
    showMovieMenuOptions(movieInfo){
        return prompt(`
        1.) Create Actor
        2.) Delete Actor
        3.) Back
        -------------------------
        ${movieInfo};

        `);
    }

    displayMovies(){
        let movieString = ''
        for(let i= 0; i<this.movies.length; i++){
            movieString += i + ') ' + this.movies[i].name + '\n';
        }
        alert (movieString);
    }
    deleteMovie(){
        let index = prompt("Enter name of movie you wish to delete: ")
        if(index > -1 && index < this.movies.length){
            this.movies.splice(index, 1)
        }
    }

    createMovie(){
        let name = prompt("enter name for new movie");
        this.movies.push(new Movie(name));
    }
    viewMovie(){
        let index = prompt("Enter the index of movie you wish to view")
        if (index > -1 && index < this.movies.length){
            this.selectedMovie = this.movies[index];
            let description = "Movie Name: " + this.selectedMovie.name + '\n';

            for(let i = 0; i < this.selectedMovie.actors.length; i++){
                description += i + ') '+ this.selectedMovie.actors[i].name + ' - ' +
                this.selectedMovie.actors[i].role + '\n';
            }

            let selection = this.showMovieMenuOptions(description)
            switch(selection){
                case '1': 
                this.createActor();
                break;

                case '2':
                    this.deleteActor();
                    
            }
        
        }}

    createActor(){
        let name = prompt("Enter name of new actor: ")
        let role = prompt("Enter role of new actor: ")
        this.selectedMovie.actors.push(new Actor(name, role))
    }

    deleteActor(){
        let index = prompt("Enter name of actor you wish to delete: ")
        if( index > -1 && index < this.selectedMovie.actors.splice(index, 1)){
             
        }
    }


}
let menu = new Menu ();
menu.start();

// Created a fully functional menu app that  has an array where "elements" i.e. movie titles,
// can be placed when created. After creating the movie you can add the starring 
// actor to the movie, as well as view and delete added movie titles/actors. 