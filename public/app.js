

function getData (url){
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.github.com/users/' + url)
    request.onload = getUser;
    request.onerror = handleError;
    request.send()
}

function handleError(){
    console.log('se ha presentado un error');
}

function getUser(){
    const data = JSON.parse(this.responseText)

    var pics = document.getElementById('pics');
    pics.innerHTML = "";
    var photo = document.createElement('img');
    photo.setAttribute('src', data.avatar_url);
    var ancourt = document.createElement('a');
    ancourt.setAttribute('href', data.html_url);
    ancourt.setAttribute('target', '_blank');
    pics.appendChild(ancourt);
    ancourt.appendChild(photo);
    
}

//iterateUsers(userArray)

var button = document.getElementById('button-search');
button.addEventListener('click', searchUser)

function searchUser(){
    var user = document.getElementById('input-user');
    // user.value = "";
    getData(user.value);
    user.value = "";
}

    var pics = document.getElementById('pics');
    pics.innerHTML = ''
    //console.log(data)
    var photo = document.createElement('img');
    photo.setAttribute('src', data.avatar_url)
    pics.appendChild(photo)
}



var button = document.getElementById('button-search');
button.addEventListener('click', searchUser)

function searchUser(){
    var user = document.getElementById('input-user');
    console.log(user)
    getData(user.value)
}
