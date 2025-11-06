var tablapaciente=document.getElementById("tablapaciente").rows.length;
var pufap = 0;
var pufad = 0;
var cpod = 0;
var cpod11 = 0;
var ceod = 0;
var ceod22 = 0;
var ioh = 0;
var ioh11 = 0;
document.getElementById("cantidad").value=tablapaciente-2;

$(".cpod1").each(function(){
	cpod+=parseFloat($(this).html()) || 0;
    cpod11= (cpod/(tablapaciente-2)).toFixed(2);
});
$('#cpod').val(cpod11);

$(".ceod2").each(function(){
	ceod+=parseFloat($(this).html()) || 0;
    ceod22= (ceod/(tablapaciente-2)).toFixed(2);
});
$('#ceod').val(ceod22);

$(".pufa1").each(function(){
	pufap+=parseInt($(this).html()) || 0;
});
$('#pufap').val(pufap);

$(".pufa2").each(function(){
	pufad+=parseInt($(this).html()) || 0;
});
$('#pufad').val(pufad);

$(".ioh1").each(function(){
	ioh+=parseFloat($(this).html()) || 0;
    ioh11= (ioh/(tablapaciente-1)).toFixed(2);
});
$('#ioh').val(ioh11);