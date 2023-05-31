var idade;
idade = 31;
document.write(`Minha idade é ${idade} anos!<br><br>`);


var x, y, result;
x = 10;
y = 5;
result = x + y;
document.write("O resultado da soma é " + result+"<br><br>");

var valor, parcela, vparcela;
valor = 149.90;
parcela = 2;
vparcela = valor / parcela;
document.write("O valor do pagamento foi " + valor + "<br>");
document.write(`Forma de pagamento ${parcela}x de ${vparcela}<br><br>`);

var minutos, segundos;
minutos = 120;
segundos = minutos * 60;
document.write(`${minutos} minutos equivale à ${segundos} segundos!<br><br>`);

var nomea, n1, n2, n3, media;
nomea = "Mário H";
n1 = 10;
n2 = 7.3;
n3 = 8.4;
media = (n1 + n2 + n3) / 3;
document.write(`O aluno ${nomea} ficou com a média ${media}<br><br>`);

var v1, v2, mule;
v1 = 10;
v2 = 20;
document.write(`O valor da primeira váriavel é ${v1} e da segunda váriavel é ${v2}<br>`);
mule = v1;
v1 = v2;
v2 = mule;
document.write(`O valor final da primeira váriavel é ${v1} e da segunda váriavel é ${v2}<br><br>`);

var totalv, vbranco, vnulo, vvalido;
totalv = 300;
vbranco = (totalv * 30) / 100;
vnulo = (totalv * 23) / 100;
vvalido = (totalv * 247) / 100;
document.write(`O valor total de votos foi ${totalv} representando 100% dos votos,<br>
 total de votos válido é 247 e representa ${vvalido} do total de votos,<br>
 total de votos brancos é 30 e representa ${vbranco} do total de votos<br>
  e o total de votos nulos é 23 e representa ${vnulo} do total de votos!<br><br>`);

var x1, x2;
x1 = 1;
x2 = 4;
if (x1 === x2) {
    document.write("Números iguais!<br><br>");
} else if (x1 > x2) {
    document.write("Primeiro número é maior!<br><br>");
} else if (x2 > x1) {
    document.write("Segundo número é maior!<br><br>");
}


const m1 = 0.30, m2 = 0.25;
var qtd, price;
qtd = 30;
if (qtd <= 12) {
    price = qtd * m1;
} else {
    price = qtd * m2;
}
document.write("O valor da compra foi R$:" + price+"<br><br>");

var user_name, user_age, birthday, birthdayParts;
var today = new Date();
user_name = "Mário Henrique";
birthday = new Date(1992,05,06);
user_age = today.getFullYear() - birthday.getFullYear();
var actualM = today.getMonth() + 1;
if (actualM < birthday.getMonth()) {

    user_age--;

} else if (today.getMonth() == birthday.getMonth()) {

    if (today.getDay() < birthday.getDay()) {

        user_age--;

    }
}

console.log(`Nome:${user_name}, idade: ${user_age}, nasceu em ${birthday.getFullYear()}.<br><br>`);
//console usado pelo enunciado da questão

var np;
np = 2;
if (np < 0) {
    document.write("Numéro negativo!<br><br>");
}
if (np > 0) {
    if (np %2 == 0) {
        document.write("Numéro par!<br><br>");
    } else {
        document.write("Número impar!<br><br>");
    }
}

var pv, an;
an = 1992;
pv = today.getFullYear() - 1992;
if(pv >= 16){
    document.write("Usuário pode votar!<br>");
} else {
    document.write("Pela legislação Brasileira o usuário não tem direito ao voto!")
}