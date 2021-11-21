var posts = [];

//getArrPost
function getArrPost(k) {
    var x=document.getElementById('positions').value;
    let dat=fetch('../assets/json/library.json')
    .then(response => response.json())
    .then(data => {
        posts=data.library;
        console.log(posts);
        if (k==5) {
            for (let i = 0; i < posts.length; i++) {
                console.log(i)
                renderPost(i);
            }
        }else{
            if (x==1) {
                document.querySelector(".posts-gohere").innerHTML='';
                for (let i = 0; i < posts.length; i++) {
                    console.log(i)
                    renderPost(i);
                }
            } else {
                if (x==0) {
                    document.querySelector(".posts-gohere").innerHTML='';
                    for (let i = posts.length-1; i > -1; i--) {
                        console.log(i)
                        renderPost(i);
                    }
                }
            }
        }
    })
}
function renderPost(x) {
    var RPost = document.querySelector(".posts-gohere");
    RPost.innerHTML += `<div class="lib-post flex-se-ct"><img class="lib-post-img" src=${posts[x].img} alt=""><div class="lib-post-cont flex-cl-se-ct"><h1 class="lib-post-cont-hd">${posts[x].title}</h1><p class="lib-post-cont-text">${posts[x].des}</p><button class="lib-post-cont-butt flex-ct-ct" onclick="sendEmail('testing title','test content')">Tải về</button></div></div>`;
}
//sendemail
function sendEmail(title,text) {
    console.log(localStorage.getItem('User'));
    let user = JSON.parse(localStorage.getItem('User'));
    console.log(user);
    let check = localStorage.getItem('Status');
    if (check!=1) {
        return alert('đăng nhập đi')
    }
    Email.send({
        Host : "smtp.gmail.com",
        Username : "onlynalt1703@gmail.com",
        Password : "vanniem@1703",
        To : user.mail,
        From : "onlynalt1703@gmail.com",
        Subject : title,
        Body : text
    }).then(
      message => alert(message)
    );
}
