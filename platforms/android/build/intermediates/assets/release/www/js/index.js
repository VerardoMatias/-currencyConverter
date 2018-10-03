var monto;
var monedaMonto;
var monedaAConv;

function convertion(){
	monto = document.getElementById("monto").value;//monto a convertir
    monedaMonto = document.getElementById("monedaMonto").value;//divisa de la moneda a convertir
	monedaAConv = document.getElementById("monedaAConv").value;//divisa a la cual se convierte el monto
    console.log(monto);
	console.log(monedaMonto);
	console.log(monedaAConv);
	$.ajax({
        url: 'https://www.google.com/finance/converter?a='+monto+'&from='+monedaMonto+'&to='+monedaAConv,
        method: "GET",
        crossDomain: true,
        success: function (data) {
             var d = String(data);
             var Busq1 = "" + monedaAConv + "</span>";
             var QWERTY = d.indexOf("class=bld>");
             var Total = d.indexOf(Busq1);
             var sub = d.substring(QWERTY+10, Total);
             console.log(sub);
             document.getElementById('montoConvertido').value = sub;
        },
        error: function (err) {
        	alert("se rompio todo");
        }
    });
}
function currencySwitch(){
     monedaMonto = document.getElementById("monedaAConv").value;
     monedaAConv = document.getElementById("monedaMonto").value;
    document.getElementById("monedaMonto").value = monedaMonto;
    document.getElementById("monedaAConv").value = monedaAConv;
}