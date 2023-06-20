function changbtn() {
    //   Cos button replace with number 8
    let element = document.createElement('button');
    element.className = 'btn';
    element.id = '1'
    
    let text = document.createTextNode('cos');
    element.appendChild(text);

    element.addEventListener('click', function () {    // using addEventListener in 'cos' button
        display.value = Math.sin(display.value);
    });

    let btncos = document.getElementById('bnl1');
    btncos.replaceChild(element, document.getElementById('btncos'));



    // Arrow button replace with number 4
    let Arrow = document.createElement('button');
    Arrow.className = 'btn';
    Arrow.id = '1'
    
    let Arrowtext = document.createTextNode('»');
    Arrow.appendChild(Arrowtext);

    Arrow.addEventListener('click', function () {    // using addEventListener in 'cos' button
    let btnsin = document.createElement('button');   // createElement with a javascripts Dom
    btnsin.className = 'btn';                        // put ClassName
    let text = document.createTextNode('@');       // createTextNode with a javascripts Dom  
    btnsin.appendChild(text);

document.getElementById('2').replaceWith(btnsin);    // button sin change into del button
btnsin.addEventListener('click', function(){         // using addEventListene with a javascripts Dom
            // using array function ('slice method')
});

let btntan = document.createElement('button');
btntan.className = 'btn';
let btntantext = document.createTextNode('9');
btntan.appendChild(btntantext);

document.getElementById('3').replaceWith(btntan);    // button sin change into del button
btntan.addEventListener('click', function(){    
    let num = 9;     // using addEventListene with a javascripts Dom
  document.getElementById('display').value  +=num;         // using array function ('slice method')
});
























    });

    let Arro = document.getElementById('bnl2');
    Arro.replaceChild(Arrow, document.getElementById('arro')); //check




    // Sin button replace with button first
    let btnsin = document.createElement('button');
    btnsin.className = 'btn';
    btnsin.id = '2';
    let sintext = document.createTextNode('sin');
    btnsin.appendChild(sintext);

    btnsin.addEventListener('click', function () {    // using addEventListener in 'sin' button
        display.value = Math.sin(display.value);
    });

    let btnsi = document.getElementById('bnl1');
    btnsi.replaceChild(btnsin, document.getElementById('btnsin'));


    // PI button replace with button 5
    let btn8 = document.createElement('button');
    btn8.className = 'btn';
    let btn8text = document.createTextNode('π');
    btn8.appendChild(btn8text);

    btn8.addEventListener('click', function () {    // using addEventListener in 'pi' button
        document.getElementById('display').value = '3.1416';
    });

    let btnpi = document.getElementById('bnl2');
    btnpi.replaceChild(btn8, document.getElementById('Pibtn'));
    // Tan button replace with button Tan
    let btntan = document.createElement('button');
    btntan.className = 'btn';
    btntan.id='3';
    let btntantext = document.createTextNode('tan');
    btntan.appendChild(btntantext);

    btntan.addEventListener('click', function () {    // using addEventListener in 'tan' button
        display.value = Math.tan(display.value);
    });

    let btnTan = document.getElementById('bnl1');
    btnTan.replaceChild(btntan, document.getElementById('btntan'));

    // log button replace with button 
    let btn5 = document.createElement('button');
    btn5.className = 'btn';
    let btnLOGtext = document.createTextNode('log');
    btn5.appendChild(btnLOGtext);

    btn5.addEventListener('click', function () {    // using addEventListener in 'log' button
        display.value = Math.log(display.value);
    });

    let btnlog = document.getElementById('bnl2');
    btnlog.replaceChild(btn5, document.getElementById('log'));

    // » button replace with button sinh
    let btn6 = document.createElement('button');
    btn6.className = 'btn';
    let btnexetext = document.createTextNode('sinh');
    btn6.appendChild(btnexetext);

    btn6.addEventListener('click', function () {    // using addEventListener in 'sinh' button
        display.value = Math.sinh(display.value);
    });

    let btnexe = document.getElementById('bnl2');
    btnexe.replaceChild(btn6, document.getElementById('leftarrow'));

    // e button replace with button 2
    let btne = document.createElement('button');
    btne.className = 'btn';
    let btnEtext = document.createTextNode('e');
    btne.appendChild(btnEtext);

    btne.addEventListener('click', function () {    // using addEventListener in 'e' button
        document.getElementById('display').value = '2.718281828459045';
    });

    let btnE = document.getElementById('bnl3');
    btnE.replaceChild(btne, document.getElementById('btne'));

    // cbrt button replace with button 3
    let btncbrt = document.createElement('button');
    btncbrt.className = 'btn';
    let btncbrttext = document.createTextNode('∛');
    btncbrt.appendChild(btncbrttext);

    btncbrt.addEventListener('click', function () {    // using addEventListener in cbrt button
        display.value = Math.cbrt(display.value);
    });

    let btnCbrt = document.getElementById('bnl3');
    btnCbrt.replaceChild(btncbrt, document.getElementById('cbrt'));
    // sqrt button replace with button ce
    let btnsqrt = document.createElement('button');
    btnsqrt.className = 'btn';
    btnsqrt.id = 'btnsqr'
    let btnsqrttext = document.createTextNode('√ ');
    btnsqrt.appendChild(btnsqrttext);

    btnsqrt.addEventListener('click', function () {    // using addEventListener in sqrt button
        display.value = Math.sqrt(display.value,2);
    });

    let btnSqrt = document.getElementById('bnl3');
    btnSqrt.replaceChild(btnsqrt, document.getElementById('sqrt'));

    // tanh button replace with button .
    let btnTanh = document.createElement('button');
    btnTanh.className = 'btn';
    let btnTanhtext = document.createTextNode('tanh');
    btnTanh.appendChild(btnTanhtext);

    btnTanh.addEventListener('click', function () {
        display.value = Math.tanh(display.value);
    });
    let btntanh = document.getElementById('bnl4');
    btntanh.replaceChild(btnTanh, document.getElementById('tanh'));

    // exp button replace with button 0
    let btnexp = document.createElement('button');
    btnexp.className = 'btn';
    let btnexptext = document.createTextNode('exp');
    btnexp.appendChild(btnexptext);

    btnexp.addEventListener('click', function () {
        display.value = Math.exp(display.value);
    });

    let btnExp = document.getElementById('bnl4');
    btnExp.replaceChild(btnexp, document.getElementById('exp'));
    // cosh button replace with button *
    let btncosh = document.createElement('button');
    btncosh.className = 'btn';
    let btncoshtext = document.createTextNode('cosh');
    btncosh.appendChild(btncoshtext);

    btncosh.addEventListener('click', function () {
        display.value = Math.cosh(display.value);
        
    })


    let btnCosh = document.getElementById('bnl4');
    btnCosh.replaceChild(btncosh, document.getElementById('cosh'));
 // acos button replace with button del
    let btndel = document.createElement('button');
    btndel.className = 'btn';
    let btndelhtext = document.createTextNode('log10');
    btndel.appendChild(btndelhtext);

    btndel.addEventListener('click', function () {
        display.value = Math.log10(display.value);
        
    })



    let btn7 = document.createElement('button');
    btn7.className = 'btn';
    let btn7text = document.createTextNode('log2');
    btndel.appendChild(btndelhtext);

    btndel.addEventListener('click', function () {
        display.value = Math.log10(display.value);
        
    })


    let btnDel = document.getElementById('bnl4');
    btnDel.replaceChild(btndel, document.getElementById('del'));
}

// operator function
function oper(op) {
    document.getElementById('display').value += op;
}

// delete function

function del() {
    display.value = display.value.slice(0, -1);
}

// clear function

function cler() {
    document.getElementById('display').value = ' ';
}

// Number function

function number(num) {
    document.getElementById('display').value += num;
}


let equal = () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        document.getElementById('display').value = 'error'
    }
}


// button exchange



