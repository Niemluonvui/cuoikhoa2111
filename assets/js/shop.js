var products=[];
var page=1;

function getArrShop(p) {
    console.log(page);
    let dat=fetch('../assets/json/product.json')
    .then(response => response.json())
    .then(data => {
        products=data.products;
        console.log(products);
        renderShop(p-1,p+4,products);
    })
}
function renderShop(y,j,x) {
    var sharea=document.querySelector('.pr-area');
    sharea.innerHTML='';
    if (j>x.length-1) {
        let k=j;
        j=x.length-y;
        var l=k-x.length;
        for (let i = y; i < x.length; i++) {
            sharea.innerHTML += `<div class="products-ct flex-cl-se-ct" onclick="sendEmail('Liên hệ Zalo','0123456789')"><div class="prd-out-img"></div><div class="prd-out-des flex-cl-se-ct"><h1 class="prd-out-des-hd">${x[i].name}</h1><p class="prd-out-des-text selector">${x[i].des}</p></div></div>`;
        }
        for (let i = 0; i < l; i++) {
            sharea.innerHTML += `<div class="products-ct flex-cl-se-ct" onclick="sendEmail('Liên hệ Zalo','0123456789')"><div class="prd-out-img"></div><div class="prd-out-des flex-cl-se-ct"><h1 class="prd-out-des-hd">${x[i].name}</h1><p class="prd-out-des-text selector">${x[i].des}</p></div></div>`;
        }
    }else{
        for (let i = y; i < j; i++) {
            sharea.innerHTML += `<div class="products-ct flex-cl-se-ct" onclick="sendEmail(Liên hệ Zalo,0123456789)"><div class="prd-out-img"></div><div class="prd-out-des flex-cl-se-ct"><h1 class="prd-out-des-hd">${x[i].name}</h1><p class="prd-out-des-text selector">${x[i].des}</p></div></div>`;
        }
    }
}
function next(x) {
    if (page+x<1) {
        console.log(page);
        page=products.length;
        getArrShop(page);
    } else {
        if (page+x>products.length) {
            console.log(page);
            page=1;
            getArrShop(page);
        }else{
            console.log(page);
            page+=x;
            getArrShop(page);
        }
    }
}
//send
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