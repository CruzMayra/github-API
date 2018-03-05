
const userArray = ['AdrixSC', 'superliza', 'CruzMayra', 'biokah']
function iterateUsers(userArray){
    for(var i = 0; i < userArray.length; i++){
        getData(userArray[i])
    }
}

iterateUsers(userArray)

function getData (url){
var request = new XMLHttpRequest();

request.open('get', 'https://api.github.com/users/' + url)


request.onload = getUser;
request.onerror = handleError;
request.send()
}


function handleError(){
    console.log('se ha presentado un error');
}

function getUser(){
    
    const data = JSON.parse(this.responseText)
    console.log(data.avatar_url)
    var photo = document.createElement('img');
    photo.setAttribute('src', data.avatar_url)
    var pics = document.getElementById('pics');
    pics.appendChild(photo)
}

//getData()