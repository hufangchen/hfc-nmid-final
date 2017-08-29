

var i = 0;

var arr = Array();
arr[0] = "images/banner1.png";
arr[1] = "images/banner2.png";
arr[2] = "images/banner3.png";
arr[3] = "images/banner4.png";
arr[4] = "images/banner5.png";
arr[5] = "images/banner6.png";
arr[6] = "images/banner7.png";
arr[7] = "images/banner8.png";


setInterval(changeimg,3000);

function changeimg(){
	var obj = document.getElementById('imgs');

	if (i==arr.length-1){
		i=0;
	}
	else{
		i+=1;
	}

	obj.src=arr[i];
}

