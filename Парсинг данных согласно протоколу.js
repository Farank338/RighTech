//@ts-check : enable more type checks for editor
//@handler  : Парсинг данных согласно протоколу
//@author   : Iprofi-330411247

function process(data) {  
  if(!data){
    return{};
  }
  const buf=ric.base64.decode(data);
  let wir=buf.getFloat32(0,true);
  let dol=buf.getFloat32(4,true);
  let vis=buf.getFloat32(8,true);
  let unix_timestamp=buf.getUint32(12,true);
  let milliseconds = unix_timestamp * 1000 
  let dateObject = new Date(milliseconds)
  let humanDateFormat = dateObject.toLocaleString()  
  let numb=buf.getUint8(16);
  let arr = new Array();
  for(let i=0;i<numb*3;i=i+3){
    arr[i]=buf.getUint8(18+i).toString(16);
    arr[i+1]=buf.getUint8(17+i).toString(16);
    arr[i+2]=buf.getInt8(19+i);
  } 
  
  let dist1=0,dist2=0,dist3=0,dist4=0,dist5=0,dist6=0,dist7=0,dist8=0;
  for(let i=0;i<numb*3;i=i+3){
   if(arr[i]=="98"){
     dist1=arr[i+2];
   }
   if(arr[i]=="a"){
     dist2=arr[i+2];
   }
   if(arr[i]=="29"){
     dist3=arr[i+2];
   }
   if(arr[i]=="d3"){
     dist4=arr[i+2];
   }
   if(arr[i]=="f7"){
     dist5=arr[i+2];
   }
   if(arr[i]=="01"){
     dist6=arr[i+2];
   }
   if(arr[i]=="08"){
     dist7=arr[i+2];
   }
   if(arr[i]=="0e"){
     dist8=arr[i+2];
   }
  } 
   
  return { wir,dol,vis,humanDateFormat,numb,  dist1,dist2,dist3,dist4,dist5,dist6,dist7,dist8};
}

/* ↑ here ends original handler code  */
/* ↓ here goes generated debug  code  */

/* 01. define test values */
const config = {};
const packet = {
  "data": null
};

/* 02. run handler code */
const result = process(
  packet["data"]
);

/* 03. log handler results */
console.log({
  "wir": result["wir"],
  "dol": result["dol"],
  "vis": result["vis"],
  "humanDateFormat": result["humanDateFormat"],
  "numb": result["numb"],
  "dist1": result["dist1"],
  "dist2": result["dist2"],
  "dist3": result["dist3"],
  "dist4": result["dist4"],
  "dist5": result["dist5"],
  "dist6": result["dist6"],
  "dist7": result["dist7"],
  "dist8": result["dist8"]
});

