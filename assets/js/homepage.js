const tagChoose1 = document.querySelector('.cl-colorone');
const tagChoose2 = document.querySelector('.cl-colortwo');
const tagChoose3 = document.querySelector('.cl-colorthree');
const hpcont = document.querySelector('.hp-body-des-area');

var root = document.querySelector(':root');

function changeTo(x) {
    root.style.setProperty('--primary-color', x);
    switch (x) {
        case '#fee7e6':
            hpcont.innerHTML = '<h1 class="hp-body-des-hd">Về Bản Thân Tôi</h1><div class="hp-body-des-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. In nisl nisi scelerisque eu ultrices vitae auctor eu. In hac habitasse platea dictumst vestibulum rhoncus. Purus sit amet volutpat consequat. Non enim praesent elementum facilisis. Integer enim neque volutpat ac tincidunt. Blandit turpis cursus in hac habitasse platea. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Diam vel quam elementum pulvinar.</div>';
        break;
        case '#57DBD8':
            hpcont.innerHTML = `<h1 class="hp-body-des-hd">Bằng Cấp</h1>
            <div class="certi-area flex-se-ct">
                <div class="certi-area-left flex-cl-se-fs">
                    <div class="certi-content flex-ct-ct">
                        <img src="../assets/img/logo/certificate.png" alt="">
                        <p>Tiến Sĩ</p>
                    </div>
                    <div class="certi-content flex-ct-ct">
                        <img src="../assets/img/logo/certificate.png" alt="">
                        <p>Tiến Sĩ</p>
                    </div>
                </div>
                <div class="certi-area-right flex-cl-se-fs">
                    <div class="certi-content flex-ct-ct">
                        <img src="../assets/img/logo/certificate.png" alt="">
                        <p>Tiến Sĩ</p>
                    </div>
                    <div class="certi-content flex-ct-ct">
                        <img src="../assets/img/logo/certificate.png" alt="">
                        <p>Tiến Sĩ</p>
                    </div>
                </div>
            </div>`;
        break;
        case '#7878f8':
            hpcont.innerHTML = `<h1 class="hp-body-des-hd">Khả Năng</h1>
            <div class="exper-area">
                <div class="exper-content">
                    <p>Tiếng Nhật</p>
                    <div class="bar"><div class="bar-pr one"></div></div>
                    <p>Chất lượng bài giảng</p>
                    <div class="bar"><div class="bar-pr two"></div></div>
                    <p>Powerpoint</p>
                    <div class="bar"><div class="bar-pr three"></div></div>
                    <p>Thiết kế</p>
                    <div class="bar"><div class="bar-pr four"></div></div>
                </div>
            </div>`;
        break;
        default:
            break;
    }
}