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
    var photo = document.createElement('img');
    photo.setAttribute('src', data.avatar_url)
    var name = document.createElement("p")
    name.innerHTML = data.login;
    pics.appendChild(name);
    pics.appendChild(photo);
};

var button = document.getElementById('button-search');
button.addEventListener('click', searchUser)

function searchUser(){
    var user = document.getElementById('input-user');
    getData(user.value)
}


var repoButton = document.getElementById('repo-button');
repoButton.addEventListener('click', searchRepository);

function searchRepository(){
    var repoInput = document.getElementById('repo');
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.github.com/search/repositories?q=' + repoInput.value)
    request.onload = getRepos;
    request.onerror = handleError;
    request.send()
}

function getRepos(){
    const data = JSON.parse(this.responseText);
    console.log(data.items)
    for(var i = 0; i < data.items.length; i++){
        var link = 'https://www.github.com/' + data.items[i]['full_name'];
        var div = document.createElement('div')
        var sectionLink = document.getElementById("link-repo");
        var paragraphLink = document.createElement("a");
        paragraphLink.setAttribute("href", link);
        paragraphLink.innerText = data.items[i].name;
        div.appendChild(paragraphLink)
        sectionLink.appendChild(div);
        
    }

}