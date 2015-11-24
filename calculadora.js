var aux=0;
var op="";
function butOnClick(target){
iteNumeros = document.getElementById('iteNumeros');
 if (target.id == "but0"){
 iteNumeros.value = iteNumeros.value+0;
 }else if (target.id == "but1"){
 iteNumeros.value = iteNumeros.value+1;
 }else if (target.id == "but2"){
 iteNumeros.value = iteNumeros.value+2;
 }else if (target.id == "but3"){
 iteNumeros.value = iteNumeros.value+3;
 }else if (target.id == "but4"){
 iteNumeros.value = iteNumeros.value+4;
 }else if (target.id == "but5"){
 iteNumeros.value = iteNumeros.value+5;
 }else if (target.id == "but6"){
 iteNumeros.value = iteNumeros.value+6;
 }else if (target.id == "but7"){
 iteNumeros.value = iteNumeros.value+7;
 }else if (target.id == "but8"){
 iteNumeros.value = iteNumeros.value+8;
 }else if (target.id == "but9"){
 iteNumeros.value = iteNumeros.value+9;
 }else if (target.id == "butMas"){
 aux=parseInt(iteNumeros.value);
 iteNumeros.value=""; 
 op="suma";   
 }else if (target.id == "butMenos"){
 aux=parseInt(iteNumeros.value);
 iteNumeros.value="";
 op="resta";
 }else if (target.id == "butPor"){
 aux=parseInt(iteNumeros.value);
 iteNumeros.value="";
 op="multi";
 }else if (target.id == "butEntre"){
 aux=parseInt(iteNumeros.value);
 iteNumeros.value="";
 op="div";
 }else if (target.id == "butIgual"){  
  if(op == "suma"){
  iteNumeros.value = String(aux + parseInt(iteNumeros.value));
  }else if (op == "resta"){
  iteNumeros.value = String(aux - parseInt(iteNumeros.value));
  }else if (op == "multi"){
  iteNumeros.value = String(aux * parseInt(iteNumeros.value));
  }else if (op == "div"){
  iteNumeros.value = String(aux / parseInt(iteNumeros.value));
  }
 } 
}