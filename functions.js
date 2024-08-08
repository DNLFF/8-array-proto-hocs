class Weapons{
    constructor(name,strength){
        this.name = name;
        this.strength = strength;
    }
}
class Knife extends Weapons{
    constructor(strength){
        super('Knife',strength);
       
    }
}
class Staff extends Weapons{
    constructor(strength){
        super('Staff',strength)
        
    }
}
class Axe extends Weapons{
    constructor(strength){
        super('Axe',strength)
        
    }
}
class StormStaff extends Weapons{
    constructor(strength){
        super('StormStaff',strength)
       
    }
}
class LongBow extends Weapons{
    constructor(strength){
        super('LongBow',strength)
        
    }
}
class Bow extends Weapons{
    constructor(strength){
        super('Bow',strength)
        
    }
}
/*
const weapons = [new Knife(50), new Staff(44), new Axe(55), new StormStaff(60), new LongBow(77), new Bow(95)];
const getNames = weapons.map((weapon) => weapon.name);
const getCountReliableWeapons = minStrength => weapons.filter(weapon => weapon.strength > minStrength).length;
const hasReliableWeapons = minStrength => weapons.some(weapon => weapon.strength > minStrength);
const getReliableWeaponsNames = minStrength => weapons.filter(weapon => weapon.strength > minStrength).map(weapon => weapon.name);
const getTotalDamage = (weapons.length*100) -  weapons.reduce((currSum, weapon) => currSum + weapon.strength ,0);


console.log(getNames);
console.log(getCountReliableWeapons(60));
console.log(hasReliableWeapons(95));
console.log(getReliableWeaponsNames(50));
console.log(getTotalDamage);
*/

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    
    sleep(100);
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }

  function compareArrays( arr1, arr2 ){
    return arr1.every((value,index) => value === arr2[index]) && arr1.length ===arr2.length;
  }
/* 
  console.log(compareArrays([8, 9], [6]));
  console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));
  console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]));
  console.log(compareArrays([1, 2, 3], [2, 3, 1]));
  console.log(compareArrays([8, 1, 2], [8, 1, 2]));
  */

  function memorize(fn,limit){
   let memory = [];
    
    return function (...args){
    const findObj = memory.find(memory => compareArrays(memory.args, args));
    if (findObj){
        return findObj.result;
    }
    
    if (memory.length >= limit){
        memory.shift();
    }

    const result =  fn(...args);
    
    memory.push({args, result});
    return result;
  }
}

 
 const mSum = memorize(sum,5);
  console.log(mSum(3, 4)) 
  console.log(mSum(3, 5))
  console.log(mSum(3, 6))
  console.log(mSum(3, 6)) 
  console.log(mSum(3, 7)) 
  console.log(mSum(3, 8)) 
  console.log(mSum(3, 9)) 
  


function testCase(testFunction, timer){
    const arr = [[1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4]];
    console.time(timer);

    let i = 0;
    while (i < 100) {
      arr.forEach((element) => console.log(testFunction(...element)));
      i++;
    }

    console.timeEnd(timer);
}
//testCase(mSum,'timer');

//testCase(sum,'timer') - timer: 50.506s (sleep(100))
//testCase(sum,'timer') - timer: timer: 7.247ms = 0.007s 

//testCase(mSum,'timer') - timer: 309.17ms = 0.3s (sleep(100))
//testCase(mSum,'timer') - timer: 10.51ms = 0.01s
//в 163