var taglist = "ytd-video-renderer,ytd-compact-video-renderer,ytd-grid-video-renderer"
function hideVideoInit(){
    var x = document.querySelectorAll(taglist);

    for(var i = 0;i<x.length;i++){
        console.log(x[i].innerText);
        var r = x[i].innerText.toLowerCase().replace(/\s+/g, '');
        if(r.includes("galaxy")){
            x[i].parentNode.removeChild(x[i]);
            console.log("delete");
        }
    }
}
var hideVideo = function(mutationList, observer){
    var x = [];
    for(var mutation of mutationList){
        for(var i of mutation.addedNodes){
            x.push(i);
        }
    }
    for(var i = 0;i<x.length;i++){
        if(x[i].tagName){
            if(taglist.includes(x[i].tagName.toLowerCase())){
                console.log(x[i].innerText);
                var r = x[i].innerText.toLowerCase().replace(/\s+/g, '');
                if(r.includes()){
                    x[i].parentNode.removeChild(x[i]);
                    console.log("delete");
                }
            }
        }
    }
}

var observ = new MutationObserver(hideVideo);
hideVideoInit();
observ.observe(document,{childList: true, subtree: true});
