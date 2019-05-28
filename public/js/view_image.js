let elementsImgHtml = document.getElementById("elementsImg");
let imgs = elementsImg.querySelectorAll('img')
let iteratorMax = 0;
for(let i=0; i<1; i++){

	imgs[i].addEventListener("click", (e) => {
		iteratorMax++;

		if(iteratorMax){
		let containerImg = document.createElement("div");
		    containerImg.setAttribute("class", "container__img")		   
		    containerImg.setAttribute("id", "container__img-js");
		    containerImg.style.top = window.scrollY + 'px'
		   
			elementsImgHtml.insertAdjacentElement("afterbegin", containerImg);

		let closeImg = document.createElement("a");
			closeImg.textContent = "X";
			closeImg.setAttribute("class", "close_img");
			closeImg.setAttribute("id", "close_img-id");
			closeImg.setAttribute("href", "");

			closeImg.addEventListener("click", (e)=>{
				e.preventDefault();
				// containerImg.remove()
			}, false)
		 
		containerImg.insertAdjacentElement("afterbegin", closeImg);

		 let imgShow = document.createElement("img");
		 	 imgShow.setAttribute("src", e.target.src);
		 	 imgShow.setAttribute("class", "img_show");
		 	 imgShow.setAttribute("class", "img_show-js");
		 containerImg.appendChild(imgShow);

let containerAll = elementsImg.querySelectorAll('#container__img-js')
 
let closeImages = document.getElementById("close_img-id");
	
 
	closeImages.addEventListener("click", (e)=>{
		
		containerAll[0].remove();

	}, false)

		}
	}, false)
}


















