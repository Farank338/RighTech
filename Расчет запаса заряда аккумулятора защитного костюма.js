//@ts-check : enable more type checks for editor
//@handler  : Расчет запаса заряда аккумулятора защитного костюма
//@author   : Iprofi-330411247

function process(charge,accum=25,power=5) {
   if(!charge){    
    return{};
  }  
  let a=accum/100*charge/power*60;
  return { a };
}

/* ↑ here ends original handler code  */
/* ↓ here goes generated debug  code  */

/* 01. define test values */
const config = {};
const packet = {
  "charge": null,
  "accum": 96,
  "power": 12
};

/* 02. run handler code */
const result = process(
  packet["charge"],
  packet["accum"],
  packet["power"]
);

/* 03. log handler results */
console.log({
  "a": result["a"]
});

