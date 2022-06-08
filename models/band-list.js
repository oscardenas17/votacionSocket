const Band = require("./band");


class BandList{

    constructor(){
        this.bands = [
            new Band('Metallica'),
            new Band('Korn'),
            new Band('Pantera'),
            new Band('Kiss'),
        ];
    }



    //Metodo añadir banda

    addBand(name){
     const newBand = new Band(name);
     this.bands.push(newBand)
     return this.bands   
    }

    removeBand(id){
        this.bands = this.bands.filter( band.id !== id);
    }

    getBands(){
        return this.bands
    }

    increaseVotes (id){
        this.bands= this.bands.map( band =>{
            if (band.id === id) {
                this.bands.votes +=1
            }
            return band
        })
    }

    changeName (id, newName){
        this.bands= this.bands.map( band =>{
            if (band.id === id) {
                this.bands.name = newName
            }
            return band
        })
    }



}


module.exports=BandList