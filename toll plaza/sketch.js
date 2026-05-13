 
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
  

    

