//@ts-check : enable more type checks for editor
//@handler  : Расчет расстояния до маячков
//@author   : Iprofi-330411247

function process(x, y,z) {

let b1x=10,b1y=25,b1z=-27,b2x=90,b2y=5,b2z=-27,b3x=10,b3y=5,b3z=-27,b4x=90,b4y=25,b4z=-27,b5x=37,b5y=25,b5z=-27,b6x=64,b6y=25,b6z=-27,b7x=37,b7y=5,b7z=-27,b8x=64,b8y=5,b8z=-27;
let dist1 = Math.sqrt(Math.abs((x-b1x)*(x-b1x)+(y-b1y)*(y-b1y)+(z-b1z)*(y-b1z)));
let dist2 = Math.sqrt(Math.abs((x-b2x)*(x-b2x)+(y-b2y)*(y-b2y)+(z-b2z)*(y-b2z)));
let dist3 = Math.sqrt(Math.abs((x-b3x)*(x-b3x)+(y-b3y)*(y-b3y)+(z-b3z)*(y-b3z)));
let dist4 = Math.sqrt(Math.abs((x-b4x)*(x-b4x)+(y-b4y)*(y-b4y)+(z-b4z)*(y-b4z)));
let dist5 = Math.sqrt(Math.abs((x-b5x)*(x-b5x)+(y-b5y)*(y-b5y)+(z-b5z)*(y-b5z)));
let dist6 = Math.sqrt(Math.abs((x-b6x)*(x-b6x)+(y-b6y)*(y-b6y)+(z-b6z)*(y-b6z)));
let dist7 = Math.sqrt(Math.abs((x-b7x)*(x-b7x)+(y-b7y)*(y-b7y)+(z-b7z)*(y-b7z)));
let dist8 = Math.sqrt(Math.abs((x-b8x)*(x-b8x)+(y-b8y)*(y-b8y)+(z-b8z)*(y-b8z)));
return { dist1,dist2,dist3,dist4,dist5,dist6,dist7,dist8 };
}

/* ↑ here ends original handler code  */
/* ↓ here goes generated debug  code  */

/* 01. define test values */
const config = {};
const packet = {
  "x": null,
  "y": null,
  "z": null
};

/* 02. run handler code */
const result = process(
  packet["x"],
  packet["y"],
  packet["z"]
);

/* 03. log handler results */
console.log({
  "dist1": result["dist1"],
  "dist2": result["dist2"],
  "dist3": result["dist3"],
  "dist4": result["dist4"],
  "dist5": result["dist5"],
  "dist6": result["dist6"],
  "dist7": result["dist7"],
  "dist8": result["dist8"]
});

