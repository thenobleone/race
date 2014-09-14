<script>
//Setup
  function Racer(name, speed, focus) {
    this.name = name;
    //Values: 0-9
    this.speed = speed;
    this.focus = focus;
    this.report = function () {
      return this.name + "has speed: " + this.speed;
    };
    this.position = 0;
    this.isFocus = function () {
      return Math.Floor(Math.random() * 10 + 1) < this.focus;
    }
    this.advance = function () {
      if (this.isFocus()) {
        this.position += this.speed;
      }
    }
    this.progressReport = function (){
      return this.name + " is at: " + this.position;
    }
  }

//Input
console.log("Hello and welcome to the wonderful world of Wacky Racers!!");
console.log("Lets meet the contestants shall we?");
var racer = prompt("First off, how many racers do we have (2-4)? ");
totalRacers = parseInt(racer);

if (totalRacers > 4) {
  racer = prompt("That's too many racers; lets keep it to less than 4 shall we? ");
}
else if (totalRacers < 2) {
  racer = prompt("A race requires at least 2, lets add someone? ");
}

for (i = 1; i <= totalRacers; i++) {
  var name = prompt("Who is our contestant? ");
  var speed = prompt("How fast are they (1-10)? ");
  if (speed > "10" || speed < "1") {
      var speed = prompt("That's not quite right, how about a number between 1-10?")
    }
  var intSpeed = parseInt(userSpeed);
  var focus = prompt("How focus are they on the the race (1-10? ");
      if (focus > "10" || focus < "1") {
      var focus = prompt("That's not quite right, how about a number between 1-10?")
    }
  var intFocus = parseInt(intFocus);
  var wackyRacer[i] = new Racer(userName, intSpeed, intFocus);
  console.log(wackyRacer[i]());
}

//Race
if (totalRacers == 2) {
  while (wackyRacer[1].postion < meters && wackyRacer[2].postion) {
    wackyRacer[1].advance();
    wackyRacer[2].advance();
    console.log(wackyRacer[1].progressReport() +  " | " + wackyRacer[2].progressReport());
  }
}
else if (totalRacers == 3) {
   while (wackyRacer[1].postion < meters && wackyRacer[2].postion && wackyRacer[3].postion) {
    wackyRacer[1].advance();
    wackyRacer[2].advance();
    wackyRacer[3].advance();
    console.log(wackyRacer[1].progressReport() +  " | " + wackyRacer[2].progressReport() +  " | " +  wackyRacer[3].progressReport());
  }
}
else {
  while (wackyRacer[1].postion < meters && wackyRacer[2].postion && wackyRacer[3].postion && wackyRacer[4].postion) {
    wackyRacer[1].advance();
    wackyRacer[2].advance();
    wackyRacer[3].advance();
    wackyRacer[4].advance();
    console.log(wackyRacer[1].progressReport() +  " | " + wackyRacer[2].progressReport() +  " | " +  wackyRacer[3].progressReport() + " | " + wackyRacer[4].progressReport());
  }
}

</script>