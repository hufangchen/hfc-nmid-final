window.onload = function() {
    tab("warp", "li", "lists", "div");
    choose1();
    choose2();
    choose3();
    choose4();
    choose5();
    choose6();
    choose7();
    choose8();
    choose9();
    choose10();
    choose11();
    choose12();
    choose13();
    choose14();
    choose15();
    choose16();
    choose17();
    choose18();
    choose19();
    choose20();
    choose21();
    choose22();
    choose23();
    choose24();
    choose25();
    choose26();
    choose27();
    choose28();
    choose29();
}
function tab(city,citys,list,lists){
    var city = document.getElementById(city);
    var citys = city.getElementsByTagName(citys);
    var list = document.getElementById(list);
    var lists = list.getElementsByTagName(lists);
    var len = citys.length;
    var i=0;
    for(i=0; i<len; i++){

        citys[i].index = i;
        citys[i].onclick = function(){
   
            for(i=0; i<len; i++){
                    
                citys[i].className = '';
                lists[i].className = 'hide';
            }
            citys[this.index].className = 'act';
            lists[this.index].className = '';
        }
    }
}


function choose1(){

    var btn = document.getElementById("btn1");
    var div = document.getElementById("div1");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose2(){

    var btn = document.getElementById("btn2");
    var div = document.getElementById("div2");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose3(){

    var btn = document.getElementById("btn3");
    var div = document.getElementById("div3");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose4(){

    var btn = document.getElementById("btn4");
    var div = document.getElementById("div4");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose5(){

    var btn = document.getElementById("btn5");
    var div = document.getElementById("div5");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose6(){

    var btn = document.getElementById("btn6");
    var div = document.getElementById("div6");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose7(){

    var btn = document.getElementById("btn7");
    var div = document.getElementById("div7");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose8(){

    var btn = document.getElementById("btn8");
    var div = document.getElementById("div8");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose9(){

    var btn = document.getElementById("btn9");
    var div = document.getElementById("div9");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose10(){

    var btn = document.getElementById("btn10");
    var div = document.getElementById("div10");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose11(){

    var btn = document.getElementById("btn11");
    var div = document.getElementById("div11");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose12(){

    var btn = document.getElementById("btn12");
    var div = document.getElementById("div12");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose13(){

    var btn = document.getElementById("btn13");
    var div = document.getElementById("div13");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose14(){

    var btn = document.getElementById("btn14");
    var div = document.getElementById("div14");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose15(){

    var btn = document.getElementById("btn15");
    var div = document.getElementById("div15");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose16(){

    var btn = document.getElementById("btn16");
    var div = document.getElementById("div16");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose17(){

    var btn = document.getElementById("btn17");
    var div = document.getElementById("div17");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose18(){

    var btn = document.getElementById("btn18");
    var div = document.getElementById("div18");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose19(){

    var btn = document.getElementById("btn19");
    var div = document.getElementById("div19");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose20(){

    var btn = document.getElementById("btn20");
    var div = document.getElementById("div20");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose21(){

    var btn = document.getElementById("btn21");
    var div = document.getElementById("div21");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose22(){

    var btn = document.getElementById("btn22");
    var div = document.getElementById("div22");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose23(){

    var btn = document.getElementById("btn23");
    var div = document.getElementById("div23");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose24(){

    var btn = document.getElementById("btn24");
    var div = document.getElementById("div24");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose25(){

    var btn = document.getElementById("btn25");
    var div = document.getElementById("div25");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose26(){

    var btn = document.getElementById("btn26");
    var div = document.getElementById("div26");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose27(){

    var btn = document.getElementById("btn27");
    var div = document.getElementById("div27");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose28(){

    var btn = document.getElementById("btn28");
    var div = document.getElementById("div28");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

function choose29(){

    var btn = document.getElementById("btn29");
    var div = document.getElementById("div29");
    var check = div.getElementsByTagName("input");
    btn.onclick = function(){
        
        for(var i=0; i<check.length; i++){
            if(btn.checked == false){
                check[i].checked = false;
            }
            else if(btn.checked == true){
                check[i].checked = true;
            }
        }
    }
}

