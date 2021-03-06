const {shell} = require('electron');
var remote = require('electron').remote;

$(".close").click(function() {
    var window = remote.getCurrentWindow();
    window.close();
});

$('.fifty').click(fiftyClick);
$('.one').click(oneClick);
$('.two').click(twoClick);
$('.three').click(threeClick);
$('.four').click(fourClick);
$('.five').click(fiveClick);
$('.six').click(sixClick);
$('.seven').click(sevenClick);
$('.eight').click(eightClick);
$('.nine').click(nineClick);

$('.red').click(red);
$('.pink').click(pink);
$('.purple').click(purple);
$('.deepPurple').click(deepPurple);
$('.indigo').click(indigo);
$('.blue').click(blue);
$('.lightBlue').click(lightBlue);
$('.cyan').click(cyan);
$('.teal').click(teal);
$('.green').click(green);
$('.lightGreen').click(lightGreen);
$('.lime').click(lime);
$('.yellow').click(yellow);
$('.amber').click(amber);
$('.orange').click(orange);
$('.deepOrange').click(deepOrange);
$('.brown').click(brown);
$('.grey').click(grey);
$('.blueGrey').click(blueGrey);


function red() {
    $('.title').html("Red");
    $(".circle").css({"box-shadow": "0px 0px 0px 0px #fff"});
    $(".red").css({"box-shadow": "0px 0px 0px 3px #fff, 0px 0px 0px 6px #F44336"});
    $('.fiftyCode').html("#FFEBEE");
    $('.oneCode').html("#FFCDD2");
    $('.twoCode').html("#EF9A9A");
    $('.threeCode').html("#E57373");
    $('.fourCode').html("#EF5350");
    $('.fiveCode').html("#F44336");
    $('.sixCode').html("#E53935");
    $('.sevenCode').html("#D32F2F");
    $('.eightCode').html("#C62828");
    $('.nineCode').html("#B71C1C");
    $(".fifty").css({"background-color": "#FFEBEE"});
    $(".one").css({"background-color": "#FFCDD2"});
    $(".two").css({"background-color": "#EF9A9A"});
    $(".three").css({"background-color": "#E57373"});
    $(".four").css({"background-color": "#EF5350"});
    $(".five").css({"background-color": "#F44336"});
    $(".six").css({"background-color": "#E53935"});
    $(".seven").css({"background-color": "#D32F2F"});
    $(".eight").css({"background-color": "#C62828"});
    $(".nine").css({"background-color": "#B71C1C"});
} function pink() {
    $('.title').html("Pink");
    $(".circle").css({"box-shadow": "0px 0px 0px 0px #fff"});
    $(".pink").css({"box-shadow": "0px 0px 0px 3px #fff, 0px 0px 0px 6px #E91E63"});
    $('.fiftyCode').html("#FCE4EC");
    $('.oneCode').html("#F8BBD0");
    $('.twoCode').html("#F48FB1");
    $('.threeCode').html("#F06292");
    $('.fourCode').html("#EC407A");
    $('.fiveCode').html("#E91E63");
    $('.sixCode').html("#D81B60");
    $('.sevenCode').html("#C2185B");
    $('.eightCode').html("#AD1457");
    $('.nineCode').html("#880E4F");
    $(".fifty").css({"background-color": "#FCE4EC"});
    $(".one").css({"background-color": "#F8BBD0"});
    $(".two").css({"background-color": "#F48FB1"});
    $(".three").css({"background-color": "#F06292"});
    $(".four").css({"background-color": "#EC407A"});
    $(".five").css({"background-color": "#E91E63"});
    $(".six").css({"background-color": "#D81B60"});
    $(".seven").css({"background-color": "#C2185B"});
    $(".eight").css({"background-color": "#AD1457"});
    $(".nine").css({"background-color": "#880E4F"});
} function purple() {
    $('.title').html("Purple");
    $(".circle").css({"box-shadow": "0px 0px 0px 0px #fff"});
    $(".purple").css({"box-shadow": "0px 0px 0px 3px #fff, 0px 0px 0px 6px #9C27B0"});
    $('.fiftyCode').html("#F3E5F5");
    $('.oneCode').html("#E1BEE7");
    $('.twoCode').html("#CE93D8");
    $('.threeCode').html("#BA68C8");
    $('.fourCode').html("#AB47BC");
    $('.fiveCode').html("#9C27B0");
    $('.sixCode').html("#8E24AA");
    $('.sevenCode').html("#7B1FA2");
    $('.eightCode').html("#6A1B9A");
    $('.nineCode').html("#4A148C");
    $(".fifty").css({"background-color": "#F3E5F5"});
    $(".one").css({"background-color": "#E1BEE7"});
    $(".two").css({"background-color": "#CE93D8"});
    $(".three").css({"background-color": "#BA68C8"});
    $(".four").css({"background-color": "#AB47BC"});
    $(".five").css({"background-color": "#9C27B0"});
    $(".six").css({"background-color": "#8E24AA"});
    $(".seven").css({"background-color": "#7B1FA2"});
    $(".eight").css({"background-color": "#6A1B9A"});
    $(".nine").css({"background-color": "#4A148C"});
} function deepPurple() {
    $('.title').html("Deep Purple");
    $(".circle").css({"box-shadow": "0px 0px 0px 0px #fff"});
    $(".deepPurple").css({"box-shadow": "0px 0px 0px 3px #fff, 0px 0px 0px 6px #673AB7"});
    $('.fiftyCode').html("#EDE7F6");
    $('.oneCode').html("#D1C4E9");
    $('.twoCode').html("#B39DDB");
    $('.threeCode').html("#9575CD");
    $('.fourCode').html("#7E57C2");
    $('.fiveCode').html("#673AB7");
    $('.sixCode').html("#5E35B1");
    $('.sevenCode').html("#512DA8");
    $('.eightCode').html("#4527A0");
    $('.nineCode').html("#311B92");
    $(".fifty").css({"background-color": "#EDE7F6"});
    $(".one").css({"background-color": "#D1C4E9"});
    $(".two").css({"background-color": "#B39DDB"});
    $(".three").css({"background-color": "#9575CD"});
    $(".four").css({"background-color": "#7E57C2"});
    $(".five").css({"background-color": "#673AB7"});
    $(".six").css({"background-color": "#5E35B1"});
    $(".seven").css({"background-color": "#512DA8"});
    $(".eight").css({"background-color": "#4527A0"});
    $(".nine").css({"background-color": "#311B92"});
} function indigo() {
    $('.title').html("Indigo");
    $(".circle").css({"box-shadow": "0px 0px 0px 0px #fff"});
    $(".indigo").css({"box-shadow": "0px 0px 0px 3px #fff, 0px 0px 0px 6px #3F51B5"});
    $('.fiftyCode').html("#E8EAF6");
    $('.oneCode').html("#C5CAE9");
    $('.twoCode').html("#9FA8DA");
    $('.threeCode').html("#7986CB");
    $('.fourCode').html("#5C6BC0");
    $('.fiveCode').html("#3F51B5");
    $('.sixCode').html("#3949AB");
    $('.sevenCode').html("#303F9F");
    $('.eightCode').html("#283593");
    $('.nineCode').html("#1A237E");
    $(".fifty").css({"background-color": "#E8EAF6"});
    $(".one").css({"background-color": "#C5CAE9"});
    $(".two").css({"background-color": "#9FA8DA"});
    $(".three").css({"background-color": "#7986CB"});
    $(".four").css({"background-color": "#5C6BC0"});
    $(".five").css({"background-color": "#3F51B5"});
    $(".six").css({"background-color": "#3949AB"});
    $(".seven").css({"background-color": "#303F9F"});
    $(".eight").css({"background-color": "#283593"});
    $(".nine").css({"background-color": "#1A237E"});
} function blue() {
    $('.title').html("Blue");
    $(".circle").css({"box-shadow": "0px 0px 0px 0px #fff"});
    $(".blue").css({"box-shadow": "0px 0px 0px 3px #fff, 0px 0px 0px 6px #2196F3"});
    $('.fiftyCode').html("#E3F2FD");
    $('.oneCode').html("#BBDEFB");
    $('.twoCode').html("#90CAF9");
    $('.threeCode').html("#64B5F6");
    $('.fourCode').html("#42A5F5");
    $('.fiveCode').html("#2196F3");
    $('.sixCode').html("#1E88E5");
    $('.sevenCode').html("#1976D2");
    $('.eightCode').html("#1565C0");
    $('.nineCode').html("#0D47A1");
    $(".fifty").css({"background-color": "#E3F2FD"});
    $(".one").css({"background-color": "#BBDEFB"});
    $(".two").css({"background-color": "#90CAF9"});
    $(".three").css({"background-color": "#64B5F6"});
    $(".four").css({"background-color": "#42A5F5"});
    $(".five").css({"background-color": "#2196F3"});
    $(".six").css({"background-color": "#1E88E5"});
    $(".seven").css({"background-color": "#1976D2"});
    $(".eight").css({"background-color": "#1565C0"});
    $(".nine").css({"background-color": "#0D47A1"});
} function lightBlue() {
    $('.title').html("Light Blue");
    $(".circle").css({"box-shadow": "0px 0px 0px 0px #fff"});
    $(".lightBlue").css({"box-shadow": "0px 0px 0px 3px #fff, 0px 0px 0px 6px #03A9F4"});
    $('.fiftyCode').html("#E1F5FE");
    $('.oneCode').html("#B3E5FC");
    $('.twoCode').html("#81D4FA");
    $('.threeCode').html("#4FC3F7");
    $('.fourCode').html("#29B6F6");
    $('.fiveCode').html("#03A9F4");
    $('.sixCode').html("#039BE5");
    $('.sevenCode').html("#0288D1");
    $('.eightCode').html("#0277BD");
    $('.nineCode').html("#01579B");
    $(".fifty").css({"background-color": "#E1F5FE"});
    $(".one").css({"background-color": "#B3E5FC"});
    $(".two").css({"background-color": "#81D4FA"});
    $(".three").css({"background-color": "#4FC3F7"});
    $(".four").css({"background-color": "#29B6F6"});
    $(".five").css({"background-color": "#03A9F4"});
    $(".six").css({"background-color": "#039BE5"});
    $(".seven").css({"background-color": "#0288D1"});
    $(".eight").css({"background-color": "#0277BD"});
    $(".nine").css({"background-color": "#01579B"});
} function cyan() {
    $('.title').html("Cyan");
    $(".circle").css({"box-shadow": "0px 0px 0px 0px #fff"});
    $(".cyan").css({"box-shadow": "0px 0px 0px 3px #fff, 0px 0px 0px 6px #00BCD4"});
    $('.fiftyCode').html("#E0F7FA");
    $('.oneCode').html("#B2EBF2");
    $('.twoCode').html("#80DEEA");
    $('.threeCode').html("#4DD0E1");
    $('.fourCode').html("#26C6DA");
    $('.fiveCode').html("#00BCD4");
    $('.sixCode').html("#00ACC1");
    $('.sevenCode').html("#0097A7");
    $('.eightCode').html("#00838F");
    $('.nineCode').html("#006064");
    $(".fifty").css({"background-color": "#E0F7FA"});
    $(".one").css({"background-color": "#B2EBF2"});
    $(".two").css({"background-color": "#80DEEA"});
    $(".three").css({"background-color": "#4DD0E1"});
    $(".four").css({"background-color": "#26C6DA"});
    $(".five").css({"background-color": "#00BCD4"});
    $(".six").css({"background-color": "#00ACC1"});
    $(".seven").css({"background-color": "#0097A7"});
    $(".eight").css({"background-color": "#00838F"});
    $(".nine").css({"background-color": "#006064"});
} function teal() {
    $('.title').html("Teal");
    $(".circle").css({"box-shadow": "0px 0px 0px 0px #fff"});
    $(".teal").css({"box-shadow": "0px 0px 0px 3px #fff, 0px 0px 0px 6px #009688"});
    $('.fiftyCode').html("#E0F2F1");
    $('.oneCode').html("#B2DFDB");
    $('.twoCode').html("#80CBC4");
    $('.threeCode').html("#4DB6AC");
    $('.fourCode').html("#26A69A");
    $('.fiveCode').html("#009688");
    $('.sixCode').html("#00897B");
    $('.sevenCode').html("#00796B");
    $('.eightCode').html("#00695C");
    $('.nineCode').html("#004D40");
    $(".fifty").css({"background-color": "#E0F2F1"});
    $(".one").css({"background-color": "#B2DFDB"});
    $(".two").css({"background-color": "#80CBC4"});
    $(".three").css({"background-color": "#4DB6AC"});
    $(".four").css({"background-color": "#26A69A"});
    $(".five").css({"background-color": "#009688"});
    $(".six").css({"background-color": "#00897B"});
    $(".seven").css({"background-color": "#00796B"});
    $(".eight").css({"background-color": "#00695C"});
    $(".nine").css({"background-color": "#004D40"});
} function green() {
    $('.title').html("Green");
    $(".circle").css({"box-shadow": "0px 0px 0px 0px #fff"});
    $(".green").css({"box-shadow": "0px 0px 0px 3px #fff, 0px 0px 0px 6px #4CAF50"});
    $('.fiftyCode').html("#E8F5E9");
    $('.oneCode').html("#C8E6C9");
    $('.twoCode').html("#A5D6A7");
    $('.threeCode').html("#81C784");
    $('.fourCode').html("#66BB6A");
    $('.fiveCode').html("#4CAF50");
    $('.sixCode').html("#43A047");
    $('.sevenCode').html("#388E3C");
    $('.eightCode').html("#2E7D32");
    $('.nineCode').html("#1B5E20");
    $(".fifty").css({"background-color": "#E8F5E9"});
    $(".one").css({"background-color": "#C8E6C9"});
    $(".two").css({"background-color": "#A5D6A7"});
    $(".three").css({"background-color": "#81C784"});
    $(".four").css({"background-color": "#66BB6A"});
    $(".five").css({"background-color": "#4CAF50"});
    $(".six").css({"background-color": "#43A047"});
    $(".seven").css({"background-color": "#388E3C"});
    $(".eight").css({"background-color": "#2E7D32"});
    $(".nine").css({"background-color": "#1B5E20"});
} function lightGreen() {
    $('.title').html("Light Green");
    $(".circle").css({"box-shadow": "0px 0px 0px 0px #fff"});
    $(".lightGreen").css({"box-shadow": "0px 0px 0px 3px #fff, 0px 0px 0px 6px #8BC34A"});
    $('.fiftyCode').html("#F1F8E9");
    $('.oneCode').html("#DCEDC8");
    $('.twoCode').html("#C5E1A5");
    $('.threeCode').html("#AED581");
    $('.fourCode').html("#9CCC65");
    $('.fiveCode').html("#8BC34A");
    $('.sixCode').html("#7CB342");
    $('.sevenCode').html("#689F38");
    $('.eightCode').html("#558B2F");
    $('.nineCode').html("#33691E");
    $(".fifty").css({"background-color": "#F1F8E9"});
    $(".one").css({"background-color": "#DCEDC8"});
    $(".two").css({"background-color": "#C5E1A5"});
    $(".three").css({"background-color": "#AED581"});
    $(".four").css({"background-color": "#9CCC65"});
    $(".five").css({"background-color": "#8BC34A"});
    $(".six").css({"background-color": "#7CB342"});
    $(".seven").css({"background-color": "#689F38"});
    $(".eight").css({"background-color": "#558B2F"});
    $(".nine").css({"background-color": "#33691E"});
} function lime() {
    $('.title').html("Lime");
    $(".circle").css({"box-shadow": "0px 0px 0px 0px #fff"});
    $(".lime").css({"box-shadow": "0px 0px 0px 3px #fff, 0px 0px 0px 6px #CDDC39"});
    $('.fiftyCode').html("#F9FBE7");
    $('.oneCode').html("#F0F4C3");
    $('.twoCode').html("#E6EE9C");
    $('.threeCode').html("#DCE775");
    $('.fourCode').html("#D4E157");
    $('.fiveCode').html("#CDDC39");
    $('.sixCode').html("#C0CA33");
    $('.sevenCode').html("#AFB42B");
    $('.eightCode').html("#9E9D24");
    $('.nineCode').html("#827717");
    $(".fifty").css({"background-color": "#F9FBE7"});
    $(".one").css({"background-color": "#F0F4C3"});
    $(".two").css({"background-color": "#E6EE9C"});
    $(".three").css({"background-color": "#DCE775"});
    $(".four").css({"background-color": "#D4E157"});
    $(".five").css({"background-color": "#CDDC39"});
    $(".six").css({"background-color": "#C0CA33"});
    $(".seven").css({"background-color": "#AFB42B"});
    $(".eight").css({"background-color": "#9E9D24"});
    $(".nine").css({"background-color": "#827717"});
} function yellow() {
    $('.title').html("Yellow");
    $(".circle").css({"box-shadow": "0px 0px 0px 0px #fff"});
    $(".yellow").css({"box-shadow": "0px 0px 0px 3px #fff, 0px 0px 0px 6px #FFEB3B"});
    $('.fiftyCode').html("#FFFDE7");
    $('.oneCode').html("#FFF9C4");
    $('.twoCode').html("#FFF59D");
    $('.threeCode').html("#FFF176");
    $('.fourCode').html("#FFEE58");
    $('.fiveCode').html("#FFEB3B");
    $('.sixCode').html("#FDD835");
    $('.sevenCode').html("#FBC02D");
    $('.eightCode').html("#F9A825");
    $('.nineCode').html("#F57F17");
    $(".fifty").css({"background-color": "#FFFDE7"});
    $(".one").css({"background-color": "#FFF9C4"});
    $(".two").css({"background-color": "#FFF59D"});
    $(".three").css({"background-color": "#FFF176"});
    $(".four").css({"background-color": "#FFEE58"});
    $(".five").css({"background-color": "#FFEB3B"});
    $(".six").css({"background-color": "#FDD835"});
    $(".seven").css({"background-color": "#FBC02D"});
    $(".eight").css({"background-color": "#F9A825"});
    $(".nine").css({"background-color": "#F57F17"});
} function amber() {
    $('.title').html("Amber");
    $(".circle").css({"box-shadow": "0px 0px 0px 0px #fff"});
    $(".amber").css({"box-shadow": "0px 0px 0px 3px #fff, 0px 0px 0px 6px #FFC107"});
    $('.fiftyCode').html("#FFF8E1");
    $('.oneCode').html("#FFECB3");
    $('.twoCode').html("#FFE082");
    $('.threeCode').html("#FFD54F");
    $('.fourCode').html("#FFCA28");
    $('.fiveCode').html("#FFC107");
    $('.sixCode').html("#FFB300");
    $('.sevenCode').html("#FFA000");
    $('.eightCode').html("#FF8F00");
    $('.nineCode').html("#FF6F00");
    $(".fifty").css({"background-color": "#FFF8E1"});
    $(".one").css({"background-color": "#FFECB3"});
    $(".two").css({"background-color": "#FFE082"});
    $(".three").css({"background-color": "#FFD54F"});
    $(".four").css({"background-color": "#FFCA28"});
    $(".five").css({"background-color": "#FFC107"});
    $(".six").css({"background-color": "#FFB300"});
    $(".seven").css({"background-color": "#FFA000"});
    $(".eight").css({"background-color": "#FF8F00"});
    $(".nine").css({"background-color": "#FF6F00"});
} function orange() {
    $('.title').html("Orange");
    $(".circle").css({"box-shadow": "0px 0px 0px 0px #fff"});
    $(".orange").css({"box-shadow": "0px 0px 0px 3px #fff, 0px 0px 0px 6px #FF9800"});
    $('.fiftyCode').html("#FFF8E1");
    $('.oneCode').html("#FFE0B2");
    $('.twoCode').html("#FFCC80");
    $('.threeCode').html("#FFB74D");
    $('.fourCode').html("#FFA726");
    $('.fiveCode').html("#FF9800");
    $('.sixCode').html("#FB8C00");
    $('.sevenCode').html("#F57C00");
    $('.eightCode').html("#EF6C00");
    $('.nineCode').html("#E65100");
    $(".fifty").css({"background-color": "#FFF3E0"});
    $(".one").css({"background-color": "#FFE0B2"});
    $(".two").css({"background-color": "#FFCC80"});
    $(".three").css({"background-color": "#FFB74D"});
    $(".four").css({"background-color": "#FFA726"});
    $(".five").css({"background-color": "#FF9800"});
    $(".six").css({"background-color": "#FB8C00"});
    $(".seven").css({"background-color": "#F57C00"});
    $(".eight").css({"background-color": "#EF6C00"});
    $(".nine").css({"background-color": "#E65100"});
} function deepOrange() {
    $('.title').html("Deep Orange");
    $(".circle").css({"box-shadow": "0px 0px 0px 0px #fff"});
    $(".deepOrange").css({"box-shadow": "0px 0px 0px 3px #fff, 0px 0px 0px 6px #FF5722"});
    $('.fiftyCode').html("#FBE9E7");
    $('.oneCode').html("#FFCCBC");
    $('.twoCode').html("#FFAB91");
    $('.threeCode').html("#FF8A65");
    $('.fourCode').html("#FF7043");
    $('.fiveCode').html("#FF5722");
    $('.sixCode').html("#F4511E");
    $('.sevenCode').html("#E64A19");
    $('.eightCode').html("#D84315");
    $('.nineCode').html("#BF360C");
    $(".fifty").css({"background-color": "#FBE9E7"});
    $(".one").css({"background-color": "#FFCCBC"});
    $(".two").css({"background-color": "#FFAB91"});
    $(".three").css({"background-color": "#FF8A65"});
    $(".four").css({"background-color": "#FF7043"});
    $(".five").css({"background-color": "#FF5722"});
    $(".six").css({"background-color": "#F4511E"});
    $(".seven").css({"background-color": "#E64A19"});
    $(".eight").css({"background-color": "#D84315"});
    $(".nine").css({"background-color": "#BF360C"});
} function brown() {
    $('.title').html("Brown");
    $(".circle").css({"box-shadow": "0px 0px 0px 0px #fff"});
    $(".brown").css({"box-shadow": "0px 0px 0px 3px #fff, 0px 0px 0px 6px #795548"});
    $('.fiftyCode').html("#EFEBE9");
    $('.oneCode').html("#D7CCC8");
    $('.twoCode').html("#BCAAA4");
    $('.threeCode').html("#A1887F");
    $('.fourCode').html("#8D6E63");
    $('.fiveCode').html("#795548");
    $('.sixCode').html("#6D4C41");
    $('.sevenCode').html("#5D4037");
    $('.eightCode').html("#4E342E");
    $('.nineCode').html("#3E2723");
    $(".fifty").css({"background-color": "#EFEBE9"});
    $(".one").css({"background-color": "#D7CCC8"});
    $(".two").css({"background-color": "#BCAAA4"});
    $(".three").css({"background-color": "#A1887F"});
    $(".four").css({"background-color": "#8D6E63"});
    $(".five").css({"background-color": "#795548"});
    $(".six").css({"background-color": "#6D4C41"});
    $(".seven").css({"background-color": "#5D4037"});
    $(".eight").css({"background-color": "#4E342E"});
    $(".nine").css({"background-color": "#3E2723"});
} function grey() {
    $('.title').html("Grey");
    $(".circle").css({"box-shadow": "0px 0px 0px 0px #fff"});
    $(".grey").css({"box-shadow": "0px 0px 0px 3px #fff, 0px 0px 0px 6px #9E9E9E"});
    $('.fiftyCode').html("#FAFAFA");
    $('.oneCode').html("#F5F5F5");
    $('.twoCode').html("#EEEEEE");
    $('.threeCode').html("#E0E0E0");
    $('.fourCode').html("#BDBDBD");
    $('.fiveCode').html("#9E9E9E");
    $('.sixCode').html("#757575");
    $('.sevenCode').html("#616161");
    $('.eightCode').html("#424242");
    $('.nineCode').html("#212121");
    $(".fifty").css({"background-color": "#FAFAFA"});
    $(".one").css({"background-color": "#F5F5F5"});
    $(".two").css({"background-color": "#EEEEEE"});
    $(".three").css({"background-color": "#E0E0E0"});
    $(".four").css({"background-color": "#BDBDBD"});
    $(".five").css({"background-color": "#9E9E9E"});
    $(".six").css({"background-color": "#757575"});
    $(".seven").css({"background-color": "#616161"});
    $(".eight").css({"background-color": "#424242"});
    $(".nine").css({"background-color": "#212121"});
} function blueGrey() {
    $('.title').html("Blue Grey");
    $(".circle").css({"box-shadow": "0px 0px 0px 0px #fff"});
    $(".blueGrey").css({"box-shadow": "0px 0px 0px 3px #fff, 0px 0px 0px 6px #607D8B"});
    $('.fiftyCode').html("#ECEFF1");
    $('.oneCode').html("#CFD8DC");
    $('.twoCode').html("#B0BEC5");
    $('.threeCode').html("#90A4AE");
    $('.fourCode').html("#78909C");
    $('.fiveCode').html("#607D8B");
    $('.sixCode').html("#546E7A");
    $('.sevenCode').html("#455A64");
    $('.eightCode').html("#455A64");
    $('.nineCode').html("#263238");
    $(".fifty").css({"background-color": "#ECEFF1"});
    $(".one").css({"background-color": "#CFD8DC"});
    $(".two").css({"background-color": "#B0BEC5"});
    $(".three").css({"background-color": "#90A4AE"});
    $(".four").css({"background-color": "#78909C"});
    $(".five").css({"background-color": "#607D8B"});
    $(".six").css({"background-color": "#546E7A"});
    $(".seven").css({"background-color": "#455A64"});
    $(".eight").css({"background-color": "#455A64"});
    $(".nine").css({"background-color": "#263238"});
}

const {clipboard} = require('electron');
function fiftyClick() {
    clipboard.writeText($(".fiftyCode").html());
    new Notification("Material Colours", { body: $(".fiftyCode").html() + " copied to the clipboard" });
} function oneClick() {
    clipboard.writeText($(".oneCode").html());
    new Notification("Material Colours", { body: $(".oneCode").html() + " copied to the clipboard" });
} function twoClick() {
    clipboard.writeText($(".twoCode").html());
    new Notification("Material Colours", { body: $(".twoCode").html() + " copied to the clipboard" });
} function threeClick() {
    clipboard.writeText($(".threeCode").html());
    new Notification("Material Colours", { body: $(".threeCode").html() + " copied to the clipboard" });
} function fourClick() {
    clipboard.writeText($(".fourCode").html());
    new Notification("Material Colours", { body: $(".fourCode").html() + " copied to the clipboard" });
} function fiveClick() {
    clipboard.writeText($(".fiveCode").html());
    new Notification("Material Colours", { body: $(".fiveCode").html() + " copied to the clipboard" });
} function sixClick() {
    clipboard.writeText($(".sixCode").html());
    new Notification("Material Colours", { body: $(".sixCode").html() + " copied to the clipboard" });
} function sevenClick() {
    clipboard.writeText($(".sevenCode").html());
    new Notification("Material Colours", { body: $(".sevenCode").html() + " copied to the clipboard" });
} function eightClick() {
    clipboard.writeText($(".eightCode").html());
    new Notification("Material Colours", { body: $(".eightCode").html() + " copied to the clipboard" });
} function nineClick() {
    clipboard.writeText($(".nineCode").html());
    new Notification("Material Colours", { body: $(".nineCode").html() + " copied to the clipboard" });
}