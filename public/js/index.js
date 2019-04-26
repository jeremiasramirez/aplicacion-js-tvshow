 

// request to tvmaze.com
let container = document.getElementById("container");
let btnSend = document.getElementById("btn-send-js");
let findMedia = document.getElementById("find-media");
let titlePage = document.getElementById("title-page-js");

	btnSend.addEventListener("click", ()=>{
			 


		if(findMedia.value != ""){
		btnSend.classList.add("scale");
		// container.textContent = "actualizando.."
		// container.innerHTML = ""
		let url = 'http://api.tvmaze.com/singlesearch/shows?q='+ findMedia.value; 
		var xhr = new XMLHttpRequest();	
		findMedia.value = ""


	xhr.open("GET", url, true);
 	 
		xhr.send();
 	 
	// container.textContent = ""
 
    
	xhr.addEventListener("load", (e)=>{

		let text = JSON.parse(e.target.responseText)
		 	
		 	console.log(text)
		 
 			let nameMedia = document.getElementById("item-name");
 			
 				nameMedia.innerHTML = ""
 				nameMedia.innerHTML = text.name;

		 	let titleMedia = document.getElementById("title-media-js");
		 		titleMedia.innerHTML = ""
		 		titleMedia.textContent = text.name

			let imageMedia = document.getElementById("image-media");
				imageMedia.src = text.image.medium;

			let language = document.getElementById("item-language");
				
				if(text.language != undefined){
					language.innerHTML = ""
					language.innerHTML = text.language
				}
				else{
					language.innerHTML = ""
					language.innerHTML = "english"
				}
			

		 	let description = document.getElementById("description-media-js");
		 		description.innerHTML = text.summary;




		 let genres = document.getElementById("item-genres");
 				


 			// console.log(text)
 			if(text.genres[1] == undefined){
 				genres.innerHTML = ""
 				titlePage.innerHTML += text.name;
 				
 			}
 			else{
 				titlePage.innerHTML = ""
 				titlePage.innerHTML += text.name + " - " + text.genres[0];
 				genres.innerHTML = ""
 				genres.innerHTML += text.genres[0] + " "
 				genres.innerHTML += text.genres[1] + " "
 			 
 			}
 			let premier = document.getElementById("item-premiered");
 				premier.innerHTML = ""
 				premier.innerHTML = text.premiered

 			
 
			 
	 		
		
	}, false);


		
		}
}, false);






// Array(3) [ "Drama", "Romance", "Supernatural" ]
// ​
// id: 63
// ​
// image: Object { medium: "http://static.tvmaze.com/uploads/images/medium_portrait/88/220908.jpg", original: "http://static.tvmaze.com/uploads/images/original_untouched/88/220908.jpg" }
// ​
// language: "English"
// ​
// name: "The Vampire Diaries"
// ​
// network: Object { id: 5, name: "The CW", country: {…} }
// ​
// officialSite: "http://www.cwtv.com/shows/the-vampire-diaries"
// ​
// premiered: "2009-09-10"
// ​
// rating: Object { average: 8.1 }
// ​
// runtime: 60
// ​
// schedule: Object { time: "20:00", days: (1) […] }
// ​
// status: "Ended"
// ​
// summary: "<p><b>The Vampire Diaries</b> is a supernatural drama/romance based around Elena Gilbert who falls in love with a 163 year old vampire.</p><p>Based on a novel series by L.J. Smith.</p>"
// ​
// type: "Scripted"
// ​
// updated: 1549195605
// ​
// url: "http://www.tvmaze.com/shows/63/the-vampire-diaries"
// ​
// webChannel: null
// ​
// weight: 94
// ​
