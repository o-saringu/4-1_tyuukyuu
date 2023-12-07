function buttonClick(){
	one.value = one.value.replace(/\s+/g, "");
	two.value = two.value.replace(/\s+/g, "");
	
	if (one.value == "intx,y,d;"){
		text1.innerHTML = "正解";
	}else{
		text1.innerHTML = "不正解　解答：int x,y,d;";
	}

	if (two.value == "x+=d;"){
		text2.innerHTML = "正解";
	}else{
		text2.innerHTML = "不正解　解答：x += d;";
	}
	
}

//解答欄１
var textBox1 = document.getElementById("one");
const text1 = document.getElementById("text1");

//解答欄２
var textBox2 = document.getElementById("two");
const text2 = document.getElementById("text2");




let checkButton = document.getElementById("btn");
checkButton.addEventListener("click", buttonClick);