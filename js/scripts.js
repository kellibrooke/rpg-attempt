// BUSINESS LOGIC
function Character(name){
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

Character.prototype.levelUp(level){
  this.level += 1;
  this.xp = 0;
  this.hitPoints = 100 * level;
  this.manaPoints = 3 * level;
  this.attackPower = 1 * level;
  this.spellPower = 1 * level;
}




function Mob(level){
  this.hitpoints = 50 * level;
  this.attackPower = 1 * level;
  this.xpAward = 50 * level;
  this.lootAward = [];
}










// UI LOGIC
$(function(){






})
