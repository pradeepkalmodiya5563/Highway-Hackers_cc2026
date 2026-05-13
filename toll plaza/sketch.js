 
    // =======================
// TOLL PLAZA SYSTEM
// =======================

let laneAngles = {
  100: 0,
  200: 0,
  300: 0,
  400: 0,
  500: 0,
  600: 0
};

let activeMessage = {
  text: "",
  x: 0,
  y: 0,
  timer: 0
};

let vehicles = [];

let vehicleSelect;
let laneSelect;
let startButton;

function setup() {

  // FULL SCREEN RESIZE CANVAS
  createCanvas(
    windowWidth,
    windowHeight
  );

  // VEHICLE SELECT
  vehicleSelect = createSelect();
  vehicleSelect.position(20, 20);

  vehicleSelect.option("car");
  vehicleSelect.option("bus");
  vehicleSelect.option("truck");
  vehicleSelect.option("bike");

  // LANE SELECT
  laneSelect = createSelect();
  laneSelect.position(150, 20);

  laneSelect.option("200");
  laneSelect.option("300");
  laneSelect.option("400");
  laneSelect.option("500");
  laneSelect.option("600");

  // BIKE AUTO LANE
  vehicleSelect.changed(changeLaneForBike);

  // START BUTTON
  startButton =
    createButton(
      "START VEHICLE"
    );
  startButton.position(
    280,
    20
  );

  startButton.mousePressed(
    addVehicle
  );

  // EMERGENCY VEHICLE
  setInterval(
    addEmergencyVehicle,
    10000
  );
}

// =======================
// AUTO RESIZE
// =======================

function windowResized() {

  resizeCanvas(
    windowWidth,
    windowHeight
  );
}

function addEmergencyVehicle() {

  vehicles.push(
    new Vehicle(
      400,
      height,
      "emergency",
      4.5
    )
  );
}
function changeLaneForBike() {

  if (
    vehicleSelect.value() ===
    "bike"
  ) {

    laneSelect.disable();

  } else {

    laneSelect.enable();
  }
}

function addVehicle() {

  let type =
    vehicleSelect.value();

  let lane;

  // BIKE LANE
  if (type === "bike") {

    lane = 100;

  } else {

    lane =
      int(
        laneSelect.value()
      );
  }

  let speed = 2;

  if (type === "car")
    speed = 2.5;

  if (type === "bus")
    speed = 1.5;

  if (type === "truck")
    speed = 1.2;

  if (type === "bike")
    speed = 3.2;

  vehicles.push(
    new Vehicle(
      lane,
      height,
      type,
      speed
    )
  );
}
function draw() {

  background(150);

  drawOriginalLanes();

  drawBarricade(
    200,
    laneAngles[200]
  );

  drawBarricade(
    300,
    laneAngles[300]
  );

  drawBarricade(
    400,
    laneAngles[400]
  );

  drawBarricade(
    500,
    laneAngles[500]
  );

  drawBarricade(
    600,
    laneAngles[600]
  );

  drawRoadLines();

  drawSpeedBreakers();

  drawLaneLabels();

  // VEHICLES
  for (let v of vehicles) {

    v.update();

    v.display();
  }

  // POPUP
  if (
    activeMessage.timer > 0
  ) {

    push();

    rectMode(CENTER);

    textAlign(
      CENTER,
      CENTER
    );

    fill(0, 150, 0);

    stroke(255);

    rect(
      activeMessage.x,
      activeMessage.y - 40,
      240,
      35,
      5
    );

    fill(255);

    textSize(12);

    textStyle(BOLD);

    text(
      activeMessage.text,
      activeMessage.x,
      activeMessage.y - 40
    );

    activeMessage.timer--;

    pop();
  }
}
// =======================
// VEHICLE CLASS
// =======================

class Vehicle {

  constructor(
    x,
    y,
    type,
    speed
  ) {

    this.laneX = x;

    this.x = x - 50;

    this.y = y;

    this.type = type;

    this.speed = speed;

    this.w = 40;

    this.timer = 0;

    this.isWaiting = false;

    this.passed = false;

    this.barrierOpened = false;

    // SIZE

    if (type === "bike") {

      this.w = 22;

      this.h = 55;
    }

    else if (
      type === "car"
    ) {

      this.h = 70;
    }

    else if (
      type === "bus"
    ) {

      this.h = 110;
    }

    else if (
      type === "emergency"
    ) {

      this.w = 42;

      this.h = 75;
    }

    else {

      this.h = 140;
    }
  }

  update() {

    let stopPoint =
      (
        this.type ===
        "truck"
      )
      ? 430
      : 400;

    let isBikeLane =
      (
        this.laneX === 100
      );

    let isEmergency =
      (
        this.type ===
        "emergency"
      );

    let isFastag =
      (
        this.laneX >= 500
      );

    // VEHICLE WAIT FIX

    for (
      let other of vehicles
    ) {

      if (other === this)
        continue;

      if (
        other.laneX ===
        this.laneX
      ) {

        if (
          other.y < this.y
        ) {

          let distance =
            this.y -
            other.y;

          let safeGap =
            other.h + 80;

          if (
            distance <
            safeGap
          ) {

            return;
          }
        }
      }
    }
  

    

