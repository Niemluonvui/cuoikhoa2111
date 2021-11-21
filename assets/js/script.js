//signIn&Up button
function goTo(i) {
    if (i == 1) {
        localStorage.setItem('IorU',1);
        window.location.href = './signin.html';
    } else {
        localStorage.setItem('IorU',0);
        window.location.href = './signin.html';
    }
}

//signIn&Up Page
function changeTo(x) {
    if (x == 1) {
        document.querySelector(".log__curtain").style.width = '50%';
        document.querySelector(".log__curtain").style.marginLeft = '50%';
        document.querySelector(".log__curtain").style.backgroundPositionX = '-300px';
    } else {
        document.querySelector(".log__curtain").style.width = '50%';
        document.querySelector(".log__curtain").style.marginLeft = '-50%';
        document.querySelector(".log__curtain").style.backgroundPositionX = '-100px';
    }
}

//SiSuAppearance
function loginAppear() {
    if (localStorage.getItem('Status')=='1') {
        document.querySelector(".nav__signin").style.display = 'none';
        document.querySelector(".nav__signup").style.display = 'none';
        document.querySelector(".nav__signed").style.display = 'block';
    } else {
        document.querySelector(".nav__signin").style.display = 'flex';
        document.querySelector(".nav__signup").style.display = 'flex';
        document.querySelector(".nav__signed").style.display = 'none';
    }
}

//SignOut
function signOut() {
    localStorage.setItem('Status','0');
    window.location.reload(true);
}
