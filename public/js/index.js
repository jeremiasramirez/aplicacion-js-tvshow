 

// request to tvmaze.com
let container = document.getElementById("container");
let btnSend = document.getElementById("btn-send-js");
let findMedia = document.getElementById("find-media");
let titlePage = document.getElementById("title-page-js");

	btnSend.addEventListener("click", ()=>{

		if(findMedia.value != ""){
	
		container.textContent = "actualizando.."
		// container.innerHTML = ""
		let url = 'http://api.tvmaze.com/singlesearch/shows?q='+ findMedia.value; 
		var xhr = new XMLHttpRequest();	
		findMedia.value = ""


	xhr.open("GET", url, true);
	setTimeout(()=>{
	xhr.send();
	container.textContent = ""
},300)

	xhr.addEventListener("load", (e)=>{

		let text = JSON.parse(e.target.responseText)
		 
			console.log(text.genres[1])

	 		let containerShows = document.createElement("div");
			let name = document.createElement("h1")
			let imageTV = document.createElement("img")
			let description = document.createElement("p")
 			console.log(text)
 			if(text.genres[1] == undefined){
 				titlePage.textContent = text.name;
 			}
 			else{
 				titlePage.textContent = text.name + " - " + text.genres[1];
 			}
			name.textContent = text.name
		
			containerShows.appendChild(name)

			imageTV.src = text.image.medium;
			containerShows.appendChild(imageTV)

			description.innerHTML = text.summary;
			 
			containerShows.appendChild(description)

			container.appendChild(containerShows)
	 		
		
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
