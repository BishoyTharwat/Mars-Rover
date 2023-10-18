# Mars Rover Project

### Quick breif for the App

---

- Rover is given a command string which contains multiple commands
- Rover analyse the commands to (move forward - move backward - turn right - turn left)
- Once the full command string has been followed, the rover reports it’s current coordinates
  and direction
- When the rover would enter a coordinate with an obstacle it stops just before entering and reports that there is an obstacle
- Given the rover’s current position , heading and Target coordinates App can calculate a command string for the rover that will safely move it to the target

### _This is a description for how to use my app_

---

### 1- First You have to make an instance of Rover Function and send the Arguments :

- The Coordinates

- Direction

- Array of obstacle's Coordinates

Ex:

```
const MarsRover = new Rover(0, 0, "East" , [[3,2], [5,7]]);
```

### 2- Second pass a String Command for the rover to move using `analyseCommand` Method:

EX:

```
MarsRover.analyseCommand("ffbrrflblrffflbbbb");
```

### 3- To send a Target and get the string of Commands, call `generateDirection` Method and send array of Target's Coordinates :
`Note:` This Function is checking the shortest Route to reach your destination , but not checking the obstacles `:( `


EX:

```
MarsRover.generateDirection([3, -3]);

```
