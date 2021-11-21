
//sign in
function signIn() {
    var inUser=document.getElementById('InUser').value;
    var inPass=document.getElementById('InPass').value;
    var User = {
        name: inUser,
        pass: inPass
    }
    console.log(User)
    let dat=fetch('../assets/json/sign.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('Status','0');
        let checkU=data.users;
        for (let i = 0; i < checkU.length; i++) {
            console.log(checkU[i]);
            if (User.name==checkU[i].name&&User.pass==checkU[i].pass) {
                localStorage.setItem('Status','1');
                localStorage.setItem('User',JSON.stringify(checkU[i]));
                console.log(localStorage.getItem('Status'));
                break;
            }
        }
        if (localStorage.getItem('Status')=='1') {
            window.history.back();
            return;
        } else {
            alert('Sai tài khoản hoặc mật khẩu!!!');
        }
    })
}