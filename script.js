function getFormvalue() {
    //Write your code here
	let fname=document.getElementById("fname")
	let lname=document.getElementById("lname")
	let btn=document.getElementById("submit")
	btn.addEventListener("click",alert)
	function alert(e)
		{
			let first=fname.innerText
			let last=lname.innerText
			alert(first,last)
}
}
