var volumeInLitres=(gallons,theConstant)=>gallons*theConstant;
var gallons=parseInt(prompt("Enter the water volume in gallons:"));
var theConstant=3.78541;
alert("The volume in litres is "+ volumeInLitres(gallons,theConstant)+" ltrs");