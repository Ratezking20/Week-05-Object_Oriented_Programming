
class Player {
    constructor(name, position){
        this.name = name
        this.position = position
    }
    describe(){
    return `${this.name} "play's " ${this.position}`
}}

class Team {
    constructor (name){
        this.name = name;
        this.players = []
    }
    addPlayer (player){
        if (player instanceof Player){
            this.players.push(player)
        }else{
            throw new error (`You can only add and instance of player. Argument is not a player: " ${player}`);
        }
     describe() ;{
        return `${this.name} has ${this.players.length} players.`;
     }
}}

class Menu {
    constructor(){
        this.teams = []
        this.selectedTeam = null
    }
    
    start (){
        let selection = this.showMainMenuOptions();
        while(selection != 0){
            switch(selection){
                case "1":
                    this.createTeam();
                    break;
                case "2":
                this.viewTeam();
                break;
                case "3":
                this.deleteTeam();
                break;
                case "4":
                this.displayTeams();
                break;
                default:
                    selection = 0
            }
            selection = this.showMainMenuOptions()
        }
        alert("Goodbye!");
    } 

    showMainMenuOptions(){
        return prompt(`
            0.) Exit
            1.) Create New Team
            2.) View Team
            3.) Delete Team
            4.) Display All Teams
    `);
    }
    showTeamMenuOptions(teamInfo){
        return prompt(`
        0.) Back
        1.) Create Player
        2.) Delete Player
        -------------------------
        ${teamInfo};

        `);
    }

    displayTeams(){
        let teamString = ''
        for(let i= 0; i<this.teams.length; i++){
            teamString += i + ') ' + this.teams[i].name + '\n';
        }
        alert (teamString);
    }
    createTeam(){
        let name = prompt("enter name for new team");
        this.teams.push(new Team(name));
    }
    viewTeam(){
        let index = prompt("Enter the index of team you wish to view")
        if (index > -1 && index < this.teams.length){
            this.selectedTeam = this.teams[index];
            let description = "Team Name: " + this.selectedTeam.name + '\n';

            for(let i = 0; i < this.selectedTeam.players.length; i++){
                description += i + ') '+ this.selectedTeam.players[i].name + ' - ' +
                this.selectedTeam.players[i].position + '\n';
            }

            let selection = this.showTeamMenuOptions(description)
            switch(selection){
                case '1': 
                this.createPlayer();
                break;

                case '2':
                    this.deletePlayer();
                    
            }
        
        }}

    createPlayer(){
        let name = prompt("Enter name of new player: ")
        let position = prompt("Enter position of new player: ")
        this.selectedTeam.players.push(new Player(name, position))
    }

    deletePlayer(){
        let index = prompt("Enter name of player you wish to delete: ")
        if( index > -1 && index < this.selectedTeam.players.splice(index, 1)){
             
        }
    }

    deleteTeam(){
        let index = prompt("Enter name of team you wish to delete: ")
        if(index > -1 && index < this.teams.length){
            this.teams.splice(index, 1)
        }
    }
}
let menu = new Menu ();
menu.start();

//Created a fully functional menu driven app that allows you to create teams and 
//players while also allowing the ability to view and delete them.