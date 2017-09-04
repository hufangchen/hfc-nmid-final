window.onload = function() {
    tab("city", "li", "list", "div");
    tab1("place","li","people","div");
    tab2("btn","a","list","ul");
    tab3("btn1","a","list","ul");
    tab4("btn2","a","list","ul");
    tab5("btn3","a","list","ul");
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
        citys[i].onmouseover = function(){
                
            for(i=0; i<len; i++){
                    
                citys[i].className = '';
                lists[i].className = 'hide';
            }
            citys[this.index].className = 'act';
            lists[this.index].className = '';
        }
    }
}
 
function tab1(tab_t,tab_t_tag,tab_c,tag_c_tag){
        var tab_t = document.getElementById(tab_t);
        var tab_t_li = tab_t.getElementsByTagName(tab_t_tag);
        var tab_c = document.getElementById(tab_c);
        var tab_c_li = tab_c.getElementsByTagName(tag_c_tag);
        var len = tab_t_li.length;
        var i=0;

        for(i=0; i<len; i++){
            tab_t_li[i].index = i;
            tab_t_li[i].onmouseover = function(){

                for(i=0; i<len; i++){
                    tab_t_li[i].className = '';
                    tab_c_li[i].className = 'hide';
                }
                tab_t_li[this.index].className = 'act';
                tab_c_li[this.index].className = '';
            }
        }
}

function tab2(btn,btns,page,pages){
    var btn = document.getElementById(btn);
    var btns = btn.getElementsByTagName(btns);
    var page = document.getElementById(page);
    var pages = page.children[0].getElementsByTagName(pages);
    var num = document.getElementById('num');
    var len = btns.length;
    var i=2;
    for(i=0; i<1;i++){
        btns[0].onclick = function(){
                
            if(i>1&&i<=2){
                i--;
                pages[0].className="hide1";
                pages[1].className="act";
                pages[2].className="hide1";
                }
            else{
                i=0;
                pages[0].className="act";
                pages[1].className="hide1";
                pages[2].className="hide1";
            }
            return false;
        }

        btns[1].onclick = function(){
                
            if(i>=0&&i<1){
                i++;
                pages[0].className="hide1";
                pages[1].className="act";
                pages[2].className="hide1";
            }
            else{
                
                i=2;
                pages[0].className="hide1";
                pages[1].className="hide1";
                pages[2].className="act";
            }
            return false;
        }
    }
}

function tab3(btn,btns,page,pages){
    var btn = document.getElementById(btn);
    var btns = btn.getElementsByTagName(btns);
    var page = document.getElementById(page);
    var pages = page.children[1].getElementsByTagName(pages);
    var num = document.getElementById('num');
    var len = btns.length;
    var i=2;
    for(i=0; i<1;i++){
        btns[0].onclick = function(){
                
            if(i>1&&i<=2){
                i--;
                pages[0].className="hide1";
                pages[1].className="act";
                pages[2].className="hide1";
                }
            else{
                i=0;
                pages[0].className="act";
                pages[1].className="hide1";
                pages[2].className="hide1";
            }
            return false;
        }

        btns[1].onclick = function(){
                
            if(i>=0&&i<1){
                i++;
                pages[0].className="hide1";
                pages[1].className="act";
                pages[2].className="hide1";
            }
            else{
                
                i=2;
                pages[0].className="hide1";
                pages[1].className="hide1";
                pages[2].className="act";
            }
            return false;
        }
    }
}

function tab4(btn,btns,page,pages){
    var btn = document.getElementById(btn);
    var btns = btn.getElementsByTagName(btns);
    var page = document.getElementById(page);
    var pages = page.children[2].getElementsByTagName(pages);
    var num = document.getElementById('num');
    var len = btns.length;
    var i=2;
    for(i=0; i<1;i++){
        btns[0].onclick = function(){
                
            if(i>1&&i<=2){
                i--;
                pages[0].className="hide1";
                pages[1].className="act";
                pages[2].className="hide1";
                }
            else{
                i=0;
                pages[0].className="act";
                pages[1].className="hide1";
                pages[2].className="hide1";
            }
            return false;
        }

        btns[1].onclick = function(){
                
            if(i>=0&&i<1){
                i++;
                pages[0].className="hide1";
                pages[1].className="act";
                pages[2].className="hide1";
            }
            else{
                
                i=2;
                pages[0].className="hide1";
                pages[1].className="hide1";
                pages[2].className="act";
            }
            return false;
        }
    }
}

function tab5(btn,btns,page,pages){
    var btn = document.getElementById(btn);
    var btns = btn.getElementsByTagName(btns);
    var page = document.getElementById(page);
    var pages = page.children[3].getElementsByTagName(pages);
    var num = document.getElementById('num');
    var len = btns.length;
    var i=2;
    for(i=0; i<1;i++){
        btns[0].onclick = function(){
                
            if(i>1&&i<=2){
                i--;
                pages[0].className="hide1";
                pages[1].className="act";
                pages[2].className="hide1";
                }
            else{
                i=0;
                pages[0].className="act";
                pages[1].className="hide1";
                pages[2].className="hide1";
            }
            return false;
        }

        btns[1].onclick = function(){
                
            if(i>=0&&i<1){
                i++;
                pages[0].className="hide1";
                pages[1].className="act";
                pages[2].className="hide1";
            }
            else{
                
                i=2;
                pages[0].className="hide1";
                pages[1].className="hide1";
                pages[2].className="act";
            }
            return false;
        }
    }
}