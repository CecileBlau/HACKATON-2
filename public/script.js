//fetch the api http://localhost:6001/memes

function getMemes(){
	fetch(`http://localhost:6007/memes`)
	.then(res=> res.json())
	// .then(data=>console.log(data))
	.then(jsData=>{displayUser(jsData)})
}

function displayUser(jsData){

	for(let elem of jsData){
		let name = elem.name
		let url = elem.url
		console.log(url)
		let arrName = [name] 
		

		let container = document.getElementById("container")
		let nameDiv = document.getElementById("nameDiv")
		
		let div

		for (let i of arrName){
			console.log(i)
			div = document.createElement("div")
			let p =document.createElement("p")
			let a = document.createElement('a')
			a.setAttribute("href", url)
			let button = document.createElement('button')
			button.textContent= "Download"
			let textNode= `${i}`
			div.classList.add("divStyle")
			p.classList.add("pStyle")
			button.classList.add("buttonStyle")
			container.appendChild(nameDiv)
			nameDiv.append(div)
			div.appendChild(p)
			div.appendChild(a)
			a.appendChild(button)
			
			p.append(textNode)
			
			

		}
		
		fetch(url)
		
		.then(data=>{displayMeme(data)})
		

		function displayMeme(data){
			let image = data.url
			let imageNode = document.createElement('img')
			imageNode.setAttribute("src", image)
			imageNode.classList.add("imageStyle")
			div.appendChild(imageNode)
			nameDiv.appendChild(div)

		}


	}



}



getMemes()

//async function downloadImage(imageSrc) {
//   const image = await fetch(imageSrc)
//   const imageBlog = await image.blob()
//   const imageURL = URL.createObjectURL(imageBlog)

//   const link = document.createElement('a')
//   link.href = imageURL
//   link.download = 'image file name here'
//   document.body.appendChild(link)
//   link.click()
//   document.body.removeChild(link)
// }