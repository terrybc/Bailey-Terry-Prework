const dog = {
    isSleepy: false,
    isHungry: true,
    sound: "Woof!",
    name: "Spot",
    makeSound: function() {
        console.log(dog.sound)
    },
    sleep: function() {
        dog.isSleepy = false;
        dog.isHungry= true;
        console.log('The dog just took a nap and is now hungry');
    },
    feed: function(){
        dog.isHungry = false;
        dog.isSleepy = true;
        console.log('The dog just ate and is now sleepy');}
  };
  dog.makeSound();
  dog.feed();
  dog.sleep();
  
  // Add code to implement the following methods:
  // 1. dog.makeSound() should print the sound property to the console
  // 2. dog.sleep() should set isSleepy to false
  // And isHungry to true
  // Throw in a console log to let the user know the dog is took a nap and is now hungry
  // 3. dog.feed() should set isHungry to false
  // And isSleepy to true
  // Throw in a console log to let the user know the dog just ate and is now sleepy