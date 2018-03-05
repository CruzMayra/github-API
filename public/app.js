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
    pics.innerHTML = ''
    //console.log("data",data)
    var photo = document.createElement('img');
    photo.setAttribute('src', data.avatar_url)
    var name = document.createElement("p")
    name.innerHTML = data.login;
    //console.log(name)
    pics.appendChild(name);
    pics.appendChild(photo);
};

//iterateUsers(userArray)

var button = document.getElementById('button-search');
button.addEventListener('click', searchUser)

function searchUser(){
    var user = document.getElementById('input-user');
    //console.log(user)
    getData(user.value)
}
