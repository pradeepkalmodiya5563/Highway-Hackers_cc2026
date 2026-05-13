 
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

    // BIKE LANE

    if (isBikeLane) {

      this.y -=
        this.speed;

      return;
    }

    // EMERGENCY

    if (isEmergency) {

      laneAngles[400] = 80;

      this.y -=
        this.speed;

      if (
        (
          this.y +
          this.h / 2
        ) < 280
      ) {

        laneAngles[400] = 0;
      }

      return;
    }

    let waitTime =
      isFastag
      ? 180
      : 420;

    // VEHICLE STOP

    if (
      !this.passed &&
      !this.isWaiting &&
      this.y <= stopPoint
    ) {

      this.isWaiting = true;

      this.y = stopPoint;
    }

    // WAITING

    if (this.isWaiting) {

      this.timer++;

      // FASTAG

      if (isFastag) {

        if (
          this.timer <= 60
        ) {

          activeMessage.text =
            "SCANNING";
        }

        else if (
          this.timer <= 120
        ) {

          activeMessage.text =
            "PAYMENT PROCESSING";
        }

        else {

          activeMessage.text =
            "VERIFIED FASTAG PAYMENT";
        }
      }

      // MANUAL

      else {

        if (
          this.timer <= 120
        ) {

          activeMessage.text =
            "SCANNING";
        }

        else if (
          this.timer <= 300
        ) {

          activeMessage.text =
            "PAYMENT PROCESSING";
        }

        else {

          activeMessage.text =
            "VERIFIED CASH PAYMENT";
        }
      }

      activeMessage.x =
        this.laneX - 20;

      activeMessage.y =
        320;

      activeMessage.timer = 2;
        // OPEN BARRIER

      if (
        !this.barrierOpened &&
        this.timer >= waitTime
      ) {

        laneAngles[
          this.laneX
        ] = 80;

        this.barrierOpened =
          true;

        this.isWaiting =
          false;

        this.passed = true;
      }
    }

    // MOVE

    else {

      this.y -=
        this.speed;

      // FIXED BARRIER CLOSE

      if (
        this.passed &&
        (
          this.y +
          this.h / 2
        ) < 280
      ) {

        let canClose = true;

        for (
          let other
          of vehicles
        ) {

          if (
            other === this
          )
            continue;

          if (
            other.laneX ===
            this.laneX &&
            other.y < 500 &&
            other.y > 200
          ) {

            canClose = false;
          }
        }

        if (canClose) {

          laneAngles[
            this.laneX
          ] = 0;
        }
      }
    }
  }

  display() {

    push();

    let offsetX = 0;

    let offsetY = 0;

    if (
      this.y > 500 &&
      this.y < 550
    ) {

      offsetX =
        random(-2, 2);

      offsetY =
        random(-2, 2);
    }

    translate(
      this.x + offsetX,
      this.y + offsetY
    );

    rectMode(CENTER);

    stroke(0);

    strokeWeight(2);

    // BIKE

    if (
      this.type === "bike"
    ) {

      fill(20);

      ellipse(
        0,
        -18,
        18,
        18
      );

      ellipse(
        0,
        18,
        18,
        18
      );

      strokeWeight(3);

      line(
        0,
        -18,
        0,
        18
      );

      fill(220, 0, 0);

      rect(
        0,
        0,
        10,
        22,
        4
      );
    }

    // EMERGENCY

    else if (
      this.type ===
      "emergency"
    ) {

      fill(255);

      rect(
        0,
        0,
        this.w,
        this.h,
        10
      );

      fill(255, 0, 0);

      rect(
        0,
        0,
        this.w - 4,
        10
      );

      if (
        frameCount % 20 < 10
      ) {

        fill(
          255,
          0,
          0
        );

      } else {

        fill(
          0,
          0,
          255
        );
      }

      rect(
        0,
        -this.h / 2,
        18,
        6
      );
    }

    // OTHER VEHICLES

    else {

      if (
        this.type === "car"
      ) {

        fill(
          0,
          102,
          204
        );
      }

      else if (
        this.type === "bus"
      ) {

        fill(
          255,
          204,
          0
        );
      }

      else {

        fill(
          200,
          50,
          50
        );
      }

      rect(
        0,
        0,
        this.w,
        this.h,
        10
      );

      // WINDOWS

      fill(
        30,
        30,
        30,
        150
      );

      rect(
        0,
        -this.h / 4,
        this.w - 8,
        12,
        2
      );

      rect(
        0,
        this.h / 3,
        this.w - 8,
        8,
        1
      );

      // LIGHTS

      fill(
        255,
        255,
        150
      );

      ellipse(
        -this.w / 3,
        -this.h / 2 + 2,
        8,
        5
      );

      ellipse(
        this.w / 3,
        -this.h / 2 + 2,
        8,
        5
      );
       // TYRES

      fill(20);

      rect(
        -this.w / 2,
        -this.h / 4,
        6,
        12
      );

      rect(
        this.w / 2,
        -this.h / 4,
        6,
        12
      );

      rect(
        -this.w / 2,
        this.h / 4,
        6,
        12
      );

      rect(
        this.w / 2,
        this.h / 4,
        6,
        12
      );
    }

    // EXHAUST SMOKE

    noStroke();

    fill(
      120,
      120,
      120,
      120
    );

    if (
      this.type === "bike"
    ) {

      ellipse(
        8,
        18 +
        random(-2, 2),
        random(6, 10)
      );

      ellipse(
        10,
        28 +
        random(-2, 2),
        random(4, 8)
      );
    }

    else {

      ellipse(
        this.w / 4,
        this.h / 2 + 8 +
        random(-2, 2),
        random(8, 15)
      );

      ellipse(
        this.w / 4 + 5,
        this.h / 2 + 20 +
        random(-2, 2),
        random(6, 12)
      );

      ellipse(
        this.w / 4 - 5,
        this.h / 2 + 30 +
        random(-2, 2),
        random(5, 10)
      );
    }

    pop();
  }
}
// =======================
// TOLL DESIGN
// =======================

function drawOriginalLanes() {

  let laneStarts =
    [80, 180, 280, 380, 480, 580];

  for (let lx of laneStarts) {

    for (
      let y = 200;
      y <= 480;
      y += 40
    ) {

      fill(
        255,
        255,
        0
      );

      rect(
        lx,
        y,
        40,
        20
      );

      fill(0);

      rect(
        lx,
        y + 20,
        40,
        20
      );
    }
  }

  fill(220);

  for (
    let x of
    [
      80,
      180,
      280,
      380,
      480,
      580
    ]
  ) {

    rect(
      x,
      320,
      40,
      40
    );
  }

  fill(
    255,
    255,
    0
  );

  let centers =
    [
      100,
      200,
      300,
      400,
      500,
      600
    ];

  for (let c of centers) {

    triangle(
      c,
      150,
      c - 20,
      200,
      c + 20,
      200
    );

    triangle(
      c,
      550,
      c - 20,
      500,
      c + 20,
      500
    );
  }
}

function drawBarricade(
  xPos,
  currentAngle
) {

  push();

  translate(
    xPos,
    310
  );

  rotate(
    radians(currentAngle)
  );

  fill(
    255,
    0,
    0
  );

  rect(
    -70,
    0,
    70,
    8
  );

  pop();
}


  

    

