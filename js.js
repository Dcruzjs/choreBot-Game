var doorImage1 = document.getElementById('door1')
var doorImage2 = document.getElementById('door2')
var doorImage3 = document.getElementById('door3')
var botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg' 
var beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'
var spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'
var numClosedDoors = 3
let openDoor1, openDoor2, openDoor3;
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'
let startButton = document.getElementById('start')

const playDoor = () => {
    
    numClosedDoors --;
    if (numClosedDoors === 0) {
        gameOver('win')
    } else {
        
    }
}

const isClicked = door => {
    if (door.src === closedDoorPath) {
        return false;
      } else {
        return true;
      }
}

doorImage1.onclick = () => {
    if(!isClicked(doorImage1)) {
        doorImage1.src = openDoor1
        playDoor()
    }
}

doorImage2.onclick = () => {
    if(!isClicked(doorImage2)) {
        doorImage2.src = openDoor2
        playDoor()
    }
}

doorImage3.onclick = () => {
    if(!isClicked(doorImage3)) {
        doorImage3.src = openDoor3
        playDoor()
    }
}

const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?'
    }
}

//Asignando las puertas de manera random
const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors)

    if (choreDoor === 0) {
        openDoor1 = botDoorPath
        openDoor2 = beachDoorPath
        openDoor3 = spaceDoorPath
    } else if(choreDoor === 1){
        openDoor2 = botDoorPath
        openDoor1 = beachDoorPath
        openDoor3 = spaceDoorPath
    }else {
        openDoor3 = botDoorPath
        openDoor1 = beachDoorPath
        openDoor2 = spaceDoorPath
    }
}

randomChoreDoorGenerator()