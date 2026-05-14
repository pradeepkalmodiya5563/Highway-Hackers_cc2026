# toll plaza

## Getting Started

Open `index.html` in your web browser and start editing `sketch.js`.

## Running Locally

For projects with media files, use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using VS Code Live Server extension
# Right-click index.html -> "Open with Live Server"
```

## Resources

- [p5.js 2.0](https://beta.p5js.org/)
- [p5.js Reference](https://p5js.org/reference/)
Toll Plaza Simulation SystemEk interactive p5.js based simulation jo real-time toll plaza operations ko demonstrate karti hai. Isme alag-alag tarah ke vehicles (Car, Bus, Truck, Bike), payment modes (FASTag, Manual), aur Emergency Vehicle lane management system ko dikhaya gaya hai.
Features1. 🛣️ Lane ManagementBike Lane: Bikes ke liye dedicated lane jaha koi barrier nahi hota (Direct entry).Manual Lanes: Cash payment lanes jaha vehicles ko scanning aur processing ke liye zyada wait karna padta hai.FASTag Lanes: Digital payment lanes jaha processing fast hoti hai.Emergency Lane: Ambulance ya emergency vehicles ke liye automated lane jo unhe dekhte hi barrier open kar deti hai.
2.Vehicle DynamicsCustom Speeds: Har vehicle ki apni speed hai (Bikes fast hain, Trucks slow).Collision Avoidance: Vehicles ek dusre ke piche queue banate hain aur safe distance maintain karte hain.Visual Effects: Har vehicle se dynamic exhaust smoke nikalta hai aur payment ke waqt brake lights on hoti hain.
3. Payment SimulationVehicles toll booth par rukte hain.Real-time status message display hota hai: SCANNING -> PAYMENT PROCESSING -> VERIFIED.Payment verify hone ke baad hi robotic barrier open hota hai.
4.Emergency SystemHar 10 second mein ek Emergency Vehicle (Ambulance) spawn hoti hai.Emergency lane ka barrier automatically detect karke open ho jata hai taaki koi delay na ho. 
Tech StackLanguage: JavaScript (ES6+)Library: p5.js Kaise Chalayein (Setup)Code Copy Karein: Is repository se sketch.js ka code copy karein.p5.js Editor: p5.js Web Editor par jayein.Paste & Run: Purana code delete karke naya code paste karein aur Play button par click karein.Interaction: * Dropdown se vehicle type select karein.Lane select karein (Bike ke liye lane auto-lock ho jayegi).START VEHICLE button dabayein. Code StructureFunction/ClassDescriptionclass VehicleSabhi vehicles ki properties, movement logic aur drawing handle karta hai.update()Vehicle ki position, lane behavior aur barrier logic ko control karta hai.display()Vehicle ke graphics, smoke aur lights ko render karta hai.drawOriginalLanes()Toll plaza ka static infrastructure (booths, triangles) draw karta hai.drawBarricade()Barrier ki rotation aur physics handle karta hai.
Screenshots OverviewSimulation mein aapko ye milenge:Yellow/Black Striped Booths: Realistic toll plazas.Moving Barriers: 0° se 80° tak rotate hone wale gates.Status Popups: Payment processing ke liye green notification boxes.
LicenseYeh project educational purpose ke liye banaya gaya hai. Aap ise freely modify aur use kar sakte hain.