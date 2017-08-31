window.onload = function(){
    
    tab("city","li","list","div")
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
   
        tab("btn","a","page","ul")
        function tab(btn,btns,page,pages){
        var btn = document.getElementById(btn);
        var btns = btn.getElementsByTagName(btns);
        var page = document.getElementById(page);
        var pages = page.getElementsByTagName(pages);
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
                if(i=0){
                    pages[0].className="act";
                    pages[1].className="hide1";
                    pages[2].className="hide1";
                    
                }
                else if(i=1){
                    pages[0].className="hide1";
                    pages[1].className="act";
                    pages[2].className="hide1";
            
                }
                else if(i=2){
                    pages[0].className="hide1";
                    pages[1].className="hide1";
                    pages[2].className="act";
                    
                }
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
}
}
}