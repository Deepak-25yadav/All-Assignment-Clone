
Artist.prototype.getProfession=function(){

    return this.profession
}
Artist.prototype.print=function(){
    return `I am ${this.name}`
}

function Artist(name, skill, profession){
this.name=name;
this.skill=skill;
this.profession=profession;
    
}


var artistsObject = Object.create(new Artist("Rahul Dravid",'Cricket','Cricketer'))

new Artist("Rahul Dravid",'Cricket','Cricketer')




// Do not change this
export {Artist, artistsObject};
