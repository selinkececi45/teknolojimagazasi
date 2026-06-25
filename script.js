function sepeteEkle(urun, fiyat){
	
	let sepet = JSON.parse(localStorage.getItem("sepet")) || [];
	sepet.push({///push: sepete yeni ürün ekler localStorage:tarayıcıda veriyi saklar///
		isim:urun,
		fiyat:fiyat
	});
	localStorage.setItem("sepet", JSON.stringify(sepet));
	alert("Ürün Sepete Eklendi");	
}
function sepetGoster(){
	let sepet = JSON.parse(localStorage.getItem("sepet")) || [];
	let alan = document.getElementById("sepet");
	if (alan) {
		alan.innerHTML = "";
		sepet.forEach(urun => {
		alan.innerHTML += `
			<div style="border:1px solid #ccc; margin:10px; padding:10px; ">
			<h3>${urun.isim}</h3>
			<p>${urun.fiyat} TL </p>
			</div>
			`;
		});
	}
}
if(window.location.pathname.includes("sepet.html"))	{
	window.onload = sepetGoster;
}	