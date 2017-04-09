var kalk1 = document.forms['01'];
var kalk2 = document.forms['02'];
var kalk3 = document.forms['03'];
var kalk4 = document.forms['04'];
var kalk5 = document.forms['05'];






function myFunction() {

//console.log(kalk.waga.value);

var plec = kalk1.plec.value;
var aktywnosc = kalk2.aktywnosc.value;
var efekt = kalk3.efekt.value;	
var waga = kalk4.waga.value;
var wiek = kalk5.wiek.value;
	
var kcal = waga * 24 * plec * aktywnosc * efekt * wiek;
//console.log(kcal);
var bialko = waga * 2 * plec * 0.9;	
var tluszcze = waga * efekt * plec * 0.9;
var wegle = (kcal - (bialko * 4 + tluszcze * 9))/4;

k = document.getElementById("kalorie");
k.innerHTML = kcal.toFixed(0);

b = document.getElementById("bialko");
b.innerHTML = 	bialko.toFixed(0) + "g";
	
t = document.getElementById("tluszcze");
t.innerHTML = 	tluszcze.toFixed(0) + "g";
	
w = document.getElementById("wegle");
w.innerHTML = 	wegle.toFixed(0) + "g";
	
k2 = document.getElementById("cuenta");
k2.innerHTML = kcal.toFixed(0);
	


if (bialko < 100) {
document.getElementById("o1").innerHTML = "pierś z indyka - 200 g" ;
document.getElementById("k6").innerHTML = "" ;
}
else if (bialko < 120 && bialko >= 100) {
document.getElementById("o1").innerHTML = "pierś z indyka - 300 g" ;
document.getElementById("k6").innerHTML = "" ;
}
else if (bialko < 140 && bialko >= 120) {
document.getElementById("o1").innerHTML = "pierś z indyka - 400 g" ;
document.getElementById("k6").innerHTML = "" ;
}
else if (bialko < 150 && bialko >= 140) {
document.getElementById("o1").innerHTML = "pierś z indyka - 400 g" ;
document.getElementById("k6").innerHTML = "twaróg chódy - 80 g" ;
}
else if (bialko < 160 && bialko >= 150) {
document.getElementById("o1").innerHTML = "pierś z indyka - 400 g" ;
document.getElementById("k6").innerHTML = "twaróg chódy - 160 g" ;
}
else if (bialko < 170 && bialko >= 160) {
document.getElementById("o1").innerHTML = "pierś z indyka - 400 g" ;
document.getElementById("k6").innerHTML = "twaróg chódy - 240 g" ;
}
else if (bialko < 180 && bialko >= 170) {
document.getElementById("o1").innerHTML = "pierś z indyka - 400 g" ;
document.getElementById("k6").innerHTML = "twaróg chódy - 240 g" ;
}
else if (bialko < 190 && bialko >= 180) {
document.getElementById("o1").innerHTML = "pierś z indyka - 400 g" ;
document.getElementById("k6").innerHTML = "twaróg chódy - 240 g" ;
}
else if (bialko < 200 && bialko >= 190) {
document.getElementById("o1").innerHTML = "pierś z indyka - 400 g" ;
document.getElementById("k6").innerHTML = "twaróg chódy - 240 g" ;
}
else if (bialko >= 200) {
document.getElementById("o1").innerHTML = "pierś z indyka - 400 g" ;
document.getElementById("k6").innerHTML = "twaróg chódy - 240 g" ;
}



if (tluszcze < 50) {
document.getElementById("k3").innerHTML = "orzech włoski - 8 g" ;
document.getElementById("k4").innerHTML = "gorzka czekolada - 10 g" ;
document.getElementById("k5").innerHTML = "" ;
}
else if (tluszcze < 60 && tluszcze >= 50) {
document.getElementById("k3").innerHTML = "orzech włoski - 20 g" ;
document.getElementById("k4").innerHTML = "gorzka czekolada - 20 g" ;
document.getElementById("k5").innerHTML = "" ;
}
else if (tluszcze < 70 && tluszcze >= 60) {
document.getElementById("k3").innerHTML = "orzech włoski - 8 g" ;
document.getElementById("k4").innerHTML = "gorzka czekolada - 10 g" ;
document.getElementById("k5").innerHTML = "awokado - 140 g" ;
}
else if (tluszcze < 80 && tluszcze >= 70) {
document.getElementById("k3").innerHTML = "orzech włoski - 8 g" ;
document.getElementById("k4").innerHTML = "gorzka czekolada - 20 g" ;
document.getElementById("k5").innerHTML = "awokado - 140 g" ;

}
else if (tluszcze < 90 && tluszcze >= 80) {
document.getElementById("k3").innerHTML = "orzech włoski - 20 g" ;
document.getElementById("k4").innerHTML = "gorzka czekolada - 20 g" ;
document.getElementById("k5").innerHTML = "awokado - 140 g" ;
}
else if (tluszcze >= 100) {
document.getElementById("k3").innerHTML = "orzech włoski - 30 g" ;
document.getElementById("k4").innerHTML = "gorzka czekolada - 30 g" ;
document.getElementById("k5").innerHTML = "awokado - 140 g" ;
}


if (wegle < 90) {
document.getElementById("s5").innerHTML = "" ;
}
else if (wegle < 120 && wegle >= 90) {
document.getElementById("s5").innerHTML = "chleb razowy - 40 g" ;
document.getElementById("o3").innerHTML = "ziemniaki gotowane - 300 g" ;
document.getElementById("k1").innerHTML = "kasza jaglana - 65 g" ;
}
else if (wegle < 140 && wegle >= 120) {
document.getElementById("s5").innerHTML = "chleb razowy - 70 g" ;
document.getElementById("o3").innerHTML = "ziemniaki gotowane - 300 g" ;
document.getElementById("k1").innerHTML = "kasza jaglana - 65 g" ;
}
else if (wegle < 160 && wegle >= 140) {
document.getElementById("s5").innerHTML = "chleb razowy - 100 g" ;
document.getElementById("o3").innerHTML = "ziemniaki gotowane - 300 g" ;
document.getElementById("k1").innerHTML = "kasza jaglana - 65 g" ;
}
else if (wegle < 180 && wegle >= 160) {
document.getElementById("s5").innerHTML = "chleb razowy - 100 g" ;
document.getElementById("o3").innerHTML = "ziemniaki gotowane - 400 g" ;
document.getElementById("k1").innerHTML = "kasza jaglana - 65 g" ;
}
else if (wegle < 200 && wegle >= 180) {
document.getElementById("s5").innerHTML = "chleb razowy - 100 g" ;
document.getElementById("o3").innerHTML = "ziemniaki gotowane - 500 g" ;
document.getElementById("k1").innerHTML = "kasza jaglana - 65 g" ;
}
else if (wegle < 220 && wegle >= 200) {
document.getElementById("s5").innerHTML = "chleb razowy - 100 g" ;
document.getElementById("o3").innerHTML = "ziemniaki gotowane - 500 g" ;
document.getElementById("k1").innerHTML = "kasza jaglana - 100 g" ;
}
else if (wegle < 250 && wegle >= 220) {
document.getElementById("s5").innerHTML = "chleb razowy - 150 g" ;
document.getElementById("o3").innerHTML = "ziemniaki gotowane - 500 g" ;
document.getElementById("k1").innerHTML = "kasza jaglana - 100 g" ;
}
else if (wegle < 280 && wegle >= 250) {
document.getElementById("s5").innerHTML = "chleb razowy - 200 g" ;
document.getElementById("o3").innerHTML = "ziemniaki gotowane - 500 g" ;
document.getElementById("k1").innerHTML = "kasza jaglana - 100 g" ;
}
else if (wegle < 320 && wegle >= 280) {
document.getElementById("s5").innerHTML = "chleb razowy - 200 g" ;
document.getElementById("o3").innerHTML = "ziemniaki gotowane - 500 g" ;
document.getElementById("k1").innerHTML = "kasza jaglana - 150 g" ;
}
else if (wegle < 400 && wegle >= 320) {
document.getElementById("s5").innerHTML = "chleb razowy - 200 g" ;
document.getElementById("o3").innerHTML = "ziemniaki gotowane - 500 g" ;
document.getElementById("k1").innerHTML = "kasza jaglana - 200 g" ;
}
else if (wegle < 500 && wegle >= 400) {
document.getElementById("s5").innerHTML = "chleb razowy - 300 g" ;
document.getElementById("o3").innerHTML = "ziemniaki gotowane - 500 g" ;
document.getElementById("k1").innerHTML = "kasza jaglana - 200 g" ;
}
else if (wegle >= 500) {
document.getElementById("s5").innerHTML = "chleb razowy - 300 g" ;
document.getElementById("o3").innerHTML = "ziemniaki gotowane - 500 g" ;
document.getElementById("k1").innerHTML = "kasza jaglana - 300 g" ;
}









}

//białko =  waga * 2

//tłuszcze = waga 

//wegle = (kcal - (bialko * 4 + tluszcze * 9))/4
