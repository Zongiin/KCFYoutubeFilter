chrome.storage.sync.clear();
function addToList(){
	console.log(document.getElementById("input_text").value)
	var x = document.getElementById("input_text").value;
	chrome.storage.sync.get(['data'],
		function(result){
			if(result.data){
				var i = result.data;
			}else{
				var i = [];
			}
			
			i.push(x);
			chrome.storage.sync.set({data: i},function(){console.log(i)});
		}
	);
	chrome.storage.sync.get(['data'],function(result){console.log(result.data)})
}

function updateList(){
	var x = document.getElementById("list");
	while(x.firstChild){
		x.removeChild(x.firstChild);
	}
	chrome.storage.sync.get(['data'],
		function(result){
			var n = result.data;
			for(var i =0;i<n.length;i++){
				console.log(i);
				var pele = document.createElement('p');
				var peletext = document.createTextNode(n[i]);
				pele.appendChild(peletext);
				document.getElementById("list").appendChild(pele);
			}
		}
	);
}
document.getElementById("save").addEventListener('click',addToList);
document.getElementById("update").addEventListener('click',updateList);