var posts = [];

//getArrPost
function getArrPost(k) {
    var x=document.getElementById('positions').value;
    let dat=fetch('../assets/json/post.json')
    .then(response => response.json())
    .then(data => {
        posts=data.posts;
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
    RPost.innerHTML += `<a class="posts-out flex-sb-ct" href=""><img class="posts-out-thumb" src="${posts[x].source}" alt=""><div class="posts-out-des"><h1>${posts[x].title}</h1><p class="selector">${posts[x].content}</p></div></a>`;
}