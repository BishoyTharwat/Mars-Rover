// First step i'll add a Class for any Rover and will make Mars Rover instant of it
class Rover {
  // inside Constructor we will add the properties of Rover
  constructor(x, y, direction, obstacles) {
    //Coordinates and Directions
    this.xCoordinate = Number(x);
    this.yCoordinate = Number(y);
    this.direction = direction.toUpperCase();

    //Obstacles
    this.obstacles = obstacles;
  }

  // Here we will add the Methods of Rover

  //[1] Analyse Command String
  analyseCommand(commandString) {
    let command = commandString.toUpperCase().split("");
    for (let i = 0; i < command.length && this.checkObstacles() == false; i++) {
      var previousX = this.xCoordinate;
      var previousY = this.yCoordinate;

      switch (command[i]) {
        case "F":
          this.goForward();
          break;
        case "B":
          this.goBackward();
          break;
        case "R":
          this.turnRight();
          break;
        case "L":
          this.turnLeft();
          break;

        default:
          throw new Error("Inalid Command Added");
          break;
      }
    }
    switch (this.checkObstacles()) {
      case true:
        console.log(
          `Warning there is an obstacle! Rover's Location now : (${previousX},${previousY}) ${this.direction}  STopped! .. Change Direction Please  }`
        );
        break;
      case false:
        console.log(
          `Rover's coordinates now (${this.xCoordinate} , ${this.yCoordinate} , ${this.direction} Direction)`
        );
        break;
      default:
        break;
    }
  }

  //[2] Move Forward Method
  goForward() {
    switch (this.direction) {
      case "NORTH":
        this.yCoordinate++;
        break;
      case "SOUTH":
        this.yCoordinate--;
        break;
      case "EAST":
        this.xCoordinate++;
        break;
      case "WEST":
        this.xCoordinate--;
        break;

      default:
        break;
    }
  }

  //[3] Move Backward Method
  goBackward() {
    switch (this.direction) {
      case "NORTH":
        this.yCoordinate--;
        break;
      case "SOUTH":
        this.yCoordinate++;
        break;
      case "EAST":
        this.xCoordinate--;
        break;
      case "WEST":
        this.xCoordinate++;
        break;

      default:
        break;
    }
  }

  //[4] Turn Right Method
  turnRight() {
    switch (this.direction) {
      case "NORTH":
        this.direction = "EAST";
        break;
      case "SOUTH":
        this.direction = "WEST";
        break;
      case "EAST":
        this.direction = "SOUTH";
        break;
      case "WEST":
        this.direction = "NORTH";
        break;

      default:
        break;
    }
  }

  //[5] Turn Left Method
  turnLeft() {
    switch (this.direction) {
      case "NORTH":
        this.direction = "WEST";
        break;
      case "SOUTH":
        this.direction = "EAST";
        break;
      case "EAST":
        this.direction = "NORTH";
        break;
      case "WEST":
        this.direction = "SOUTH";
        break;

      default:
        break;
    }
  }
  //[6] Check Obstacles method
  checkObstacles() {
    for (let i = 0; i < this.obstacles.length; i++) {
      let [obsXCoordinate, obsYCoordinate] = this.obstacles[i];
      switch (true) {
        case obsXCoordinate === this.xCoordinate &&
          obsYCoordinate === this.yCoordinate:
          return true;
        default:
          return false;
      }
    }
  }
  /*************Generation of Direction String to Reach Target*************** */
  //[1] Method to generate the String in both Directions
  generateDirection(targetStr) {
    let [targetX, targetY] = targetStr;
    let Direction = [];
    Direction.push(this.generateStrX(targetX));
    Direction.push(this.generateStrY(targetY));
    console.log(Direction.join());
  }

  //[2] Method to generate the String in X-Directions
  generateStrX(targetX, targetY) {
    let xDirectionStr = [];

    while (this.xCoordinate !== targetX ) {
      if (this.xCoordinate < targetX) {
        switch (this.direction) {
          case "NORTH":
            xDirectionStr.push("R");
            this.turnRight();
            break;
          case "SOUTH":
            xDirectionStr.push("L");
            this.turnLeft();

            break;
          case "WEST":
            xDirectionStr.push("R");
            this.turnRight();
            break;
          case "EAST":
            xDirectionStr.push("F");
            this.goForward();
            break;

          default:
            break;
        }
      } else if (this.xCoordinate > targetX) {
        switch (this.direction) {
          case "NORTH":
            xDirectionStr.push("L");
            this.turnLeft();
            break;
          case "SOUTH":
            xDirectionStr.push("R");
            this.turnRight();

            break;
          case "WEST":
            xDirectionStr.push("F");
            this.goForward();
            break;
          case "EAST":
            xDirectionStr.push("R");
            this.turnRight();
            break;

          default:
            break;
        }
      }
      
    }
    return xDirectionStr;
  }

  //[3] Method to generate the String in Y-Directions
  generateStrY(targetY) {
    let yDirectionStr = [];

    while ( this.yCoordinate !== targetY ) {
      if (this.yCoordinate < targetY) {
        switch (this.direction) {
          case "NORTH":
            yDirectionStr.push("F");
            this.goForward();
            break;
          case "SOUTH":
            yDirectionStr.push("L");
            this.turnLeft();

            break;
          case "WEST":
            yDirectionStr.push("R");
            this.turnRight();
            break;
          case "EAST":
            yDirectionStr.push("L");
            this.turnLeft();
            break;

          default:
            break;
        }
      } else if (this.yCoordinate > targetY) {
        switch (this.direction) {
          case "NORTH":
            yDirectionStr.push("L");
            this.turnLeft();
            break;
          case "SOUTH":
            yDirectionStr.push("F");
            this.goForward();

            break;
          case "WEST":
            yDirectionStr.push("L");
            this.turnLeft();
            break;
          case "EAST":
            yDirectionStr.push("R");
            this.turnRight();
            break;

          default:
            break;
        }
      }
    
    }
    return yDirectionStr;
  }


}

//Unit Test by creating instance of Rover
//[1] Pass Arguments (x,y, direction , [obstactles])
const MarsRover = new Rover(0, 0, "East" , [[3,6]]);

//[2] Pass Directions String
MarsRover.analyseCommand("ffflff");

//[3] Add target to generate the best route to reach it
MarsRover.generateDirection([-3, -3]);
