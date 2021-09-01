var volumeInLitres=function(gallons,theConstant){
  return gallons*theConstant;
};
var gallons=parseInt(prompt("Enter the water volume in gallons:"));
var theConstant=3.78541;
alert(volumeInLitres(gallons,theConstant));