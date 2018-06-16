// BUSINESS LOGIC
function Character(name) {
  this.name = name;
  this.level = 1;
  this.xp = 0;
  this.hitPoints = 100;
  this.manaPoints = 3;
  this.attackPower = 1;
  this.spellPower = 1;
  this.items = [];
  this.spells = [];
}

Character.prototype.levelUp = function(level) {
  this.level += 1;
  this.xp = 0;
  this.hitPoints = 100 * level;
  this.manaPoints = 3 * level;
  this.attackPower = 1 * level;
  this.spellPower = 1 * level;
}

Character.prototype.upgradeStats = function(item) {
  this.hitPoints += item.hpAward;
  this.manaPoint += item.mpAward;
  this.armor += item.armorAward;
  this.attackPower += item.apAward;
  this.spellPower += item.spAward;
}

Character.prototype.hitSomething = function(mob) {
  var rolld10 = (Math.floor((Math.random() * 10) + 1));
  var damage = this.attackPower * rolld10;
  var missChance = this.attackPower
  mob.hitPoint -= damage;
}

Character.prototype.castSpell = function(mob, spell) {
  mob.hitPoints = mob.hitPoints - spell.damage + mob.armor;
}

Character.prototype.checkDead = function() {
  if(this.hitPoints === 0) {
    return true;
  } else {
    return false;
  }
}

Character.prototype.checkLoot = function(mob) {
  var chosenItem = (Math.floor((Math.random() * mob.lootAward.length)));
  var loot = mob.lootAward[chosenItem];
  this.items.push(loot);
}

function Mob(level){
  this.hitpoints = 50 * level;
  this.level = level;
  this.attackPower = 1 * level;
  this.armor = 1 * level;
  this.xpAward = 50 * level;
  this.lootAward = [];
}

Mob.prototype.checkDead = function() {
  if(this.hitPoints === 0) {
    return true;
    return false;
  }
}

function Item(){
  this.name = "";
  this.hpAward = 0;
  this.mpAward = 0;
  this.armorAward = 0;
  this.apAward = 0;
  this.spAward = 0;
}

function Spell(level){
  this.name = "";
  this.damage = 0;
  this.heal = 0;
  this.affect = 0;
}

// CANVAS STUFF BELOW

// WHERE I LEFT OFF WITH THIS IS THAT IVE SUCCESSFULLY TURNED AN IMAGE INTO AN IMAGE ON THE CANVAS. THE NEXT STEP IS FIGURING OUT HOW TO MAKE A COMPONENT HAVE AN IMAGE AS ITS APPEARANCE INSTEAD OF BEING A LITTLE SQUARE LIKE IN THE TUTORIAL, AND THEN MAYBE MAKING COMPONENT THE SAME AS OUR CHARACTER CONSTRUCTOR. IF WE CAN JUST ADD THE SPECS THEY HAVE PUT IN THE COMPONENT CONSTRUCTOR TO OUR CHARACTER CONSTRUCTOR, THEN WE CAN PROBABLY DO THIS AND CONTINUE WITH THE TUTORIAL AS NORMAL



// UI LOGIC
$(function(){
  var canvas = document.getElementById("game-canvas");
  var canvasArtist = canvas.getContext("2d");
  var img = document.getElementById("avatar-img");
  canvasArtist.drawImage(img,3,3,25,25);





})
