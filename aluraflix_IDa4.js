

function Show(){
    var music = String(document.getElementById("cMusic").value)
    var ytVideo = document.getElementById("video")
    if (music == "Cell Block Tango"){
        ytVideo.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/00oBK-x1pVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    } else if (music == "All That Jazz"){
        ytVideo.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/vVyhM8gHXS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    } else if (music == "Funny Honey"){
        ytVideo.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/_C0_gY75zUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    } else if (music == "When You're Good To Mama"){
        ytVideo.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Y-Fz-_lkWzM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    } else if (music == "All I Care About"){
        ytVideo.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/TfxoCicKvCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    } else if (music == "We Both Reached For The Gun"){
        ytVideo.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/C9dFKRZ8EbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    } else if (music == "Roxie"){
        ytVideo.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=HB4zlQVRaD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    } else if (music == "I Can't Do It Alone"){
        ytVideo.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/00oBK-x1pVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    } else if (music == "Mister Cellophane"){
        ytVideo.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/WKHzTtr_lNk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    } else if (music == "Razzle Dazzle"){
        ytVideo.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/ByeXMGqapnU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    } else if (music == "Nowadays" || "Hot Honey Rag"){
        ytVideo.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/AX5QWHDe4_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    } else {
        alert("Please type a valid music name.")
    }
    

}


// o código de incorporar n ta funcionando, tentar innerHTML com url
// var videoClips = ["All that Jazz", "Funny Honey"; "When You're Good To Mama"; "Cell Block Tango";"All I Care About"; 
//"We Both Reached For The Gun"; "Roxie";"I Can't Do It Alone";"Mister Cellophane"; "Razzle Dazzle"; "Nowadays"]

//if (music == "Cellblock Tango"){music.innerHTML = <iframe width="560" height="315" src="https://www.youtube.com/embed/Amr15YjPdgg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>} else {alert("Test")}