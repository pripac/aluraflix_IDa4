alert("Hello word")


function Show(){
    var music = String(document.getElementById("cMusic").value)
    var ytVideo = document.getElementById("video")
    //alert(music)
    if (music == "Cell Block Tango"){
        ytVideo.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/00oBK-x1pVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    } else {

        alert("e agora")
    }

}


// o código de incorporar n ta funcionando, tentar innerHTML com url
// var videoClips = ["All that Jazz", "Funny Honey"; "When You're Good To Mama"; "Cell Block Tango";"All I Care About"; "We Both Reached For The Gun"; "Roxie";"I Can't Do It Alone";"Mister Cellophane"; "Razzle Dazzle"; "Nowadays"]

//if (music == "Cellblock Tango"){music.innerHTML = <iframe width="560" height="315" src="https://www.youtube.com/embed/Amr15YjPdgg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>} else {alert("Test")}