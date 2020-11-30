var list = [82,161,24624,2,1871,15299,63,62,19,26020,1859,5079,13,4,1851,27436,31,15307,2175,122,2705,37787,133,335,3083,1855,269,24044,172,116,44,168,323,21];
let table = document.querySelector('table');

async function getIt(id){
	const response = await fetch(`http://api.tvmaze.com/shows/${id}`);
	const data = await response.json();
	// console.log(data);
	RenderIt(data);
}
// function RenderIt(content){
// 	let newRow = table.insertRow(-1);

// 	let titleCell = newRow.insertCell(0).textContent = content.name;
// 	let langCell = newRow.insertCell(1).textContent = content.language;
// 	let genreCell = newRow.insertCell(2).textContent = content.genres;
// 	let statusCell = newRow.insertCell(3).textContent = content.status;
// 	let ratingCell = newRow.insertCell(4).textContent = content.rating.average;
// 	let networkCell = newRow.insertCell(5).textContent = content.network.name;
// 	let summaryCell = newRow.insertCell(6).innerHTML = content.summary.slice(0,200)+'...';
// }
function RenderIt(content){
	$(".row").loadTemplate($("#template"),{
		title:content.name,
		poster:content.image.medium,
		lang:content.language,
		rating:content.rating.average,
		status:content.status,
		summary:content.summary.slice(0,120)+"...",
		site:content.officialSite
	},{append:true})
}

list.forEach(id=>{
	getIt(id);
});