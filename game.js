var game = {
	animals: [
	panda = {
		name: "panda",
		hint: "eats bamboo"
	}, 
	horse = {
		name: "horse",
		hint: "Neigh"
	},
	cat = {
		name: "cat",
		hint: "9 lives"
	}],
	randNum: function(){
		return Math.floor(Math.random()* this.animals.length);
	},
 newGame: function() {
   var currentRandNum = game.randNum()
   var currentAnimal = this.animals[currentRandNum];
   var splitName = currentAnimal.name.split("")
   var currentHint = this.animals[currentRandNum].hint;
   console.log(splitName)
   console.log(currentHint)
 }

}