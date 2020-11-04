function partyAnimal(nam){
 this.x = 0;
 this.name = nam;
 console.log("built" + nam);
 this.party = function(){
  this.x = this.x + 1;
  console.log(nam +"="+ this.x);
 }
}

s = new partyAnimal('pattu');
s.party();

j = new partyAnimal('jully');
j.party()
s.party()
