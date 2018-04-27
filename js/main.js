! function () {
    let Css = `
    /*
    * 首先，需要准备皮卡丘的皮
    */
    #preview{
        background: #FEE51A;
    }
    /*
    * 接下来，画皮卡丘的鼻子
    */
    .nose {
        border: 12px solid transparent;
        border-top-color: black;
        border-radius: 12px;
        position: absolute;
        top: 25px;
        left: 50%;
        margin-left: -12px;
    }
    /*
    * 接下来，画皮卡丘的眼睛
    */
    .eye {
        width: 50px;
        height: 50px;
        background: #2D2D2D;
        border: 3px solid #000000;
        border-radius: 50%;
        position: absolute;
    }
    /*
    * 眼睛里面的珠子
    */
    .eye::before {
        content: '';
        display: block;
        border: 1px solid #000000;
        border-radius: 50%;
        position: absolute;
        top: -2px;
        left: 5px;
        width: 22px;
        height: 22px;
        background: #FEFEFE;
    }
    /*
    * 左眼在左边（废话）
    */
    .eye.left {
        left: 50%;
        margin-left: -120px;
    }
    /*
    * 右眼在右边（废话）
    */
    .eye.right {
        right: 50%;
        margin-right: -120px;
    }
    /*
    * 然后，画皮卡丘的脸
    */
    .face {
        width: 68px;
        height: 68px;
        border: 3px solid #000000;
        background: #FE0303;
        position: absolute;
        border-radius: 50%;
        top: 85px;
    }
    /*
    * 将脸放到正确的位置
    */
    .face.left {
        left: 0;
    }
    .face.right {
        right: 0;
    }
    /*
    * 上嘴唇
    */
    .upperLip {
        height: 20px;
        width: 80px;
        border: 3px solid black;
        background: #FDE428;
        position: absolute;
        top: 52px;
    }
    .upperLip.left {
        border-bottom-left-radius: 40px 30px;
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
        left: 50%;
        margin-left: -80px;
    }
    .upperLip.right {
        border-bottom-right-radius: 40px 30px;
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
        right: 50%;
        margin-right: -80px;
    }
    /*
    * 下嘴唇
    */
    .lowerLip-wrapper {
        width: 300px;
        height: 142px;
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: -150px;
        overflow: hidden;
    }
    .lowerLip {
        width: 150px;
        height: 2000px;
        background: #9A0009;
        position: absolute;
        left: 50%;
        bottom: 0;
        border: 3px solid #000000;
        border-radius: 400px/2000px;
        margin-left: -75px;
        overflow: hidden;
    }
    /*
    * 小舌头
    */
    .lowerLip::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -20px;
        left: 50%;
        margin-left: -65px;
        height: 130px;
        width: 130px;
        background: #FE485E;
        border-radius: 50%; 
    }
    /*
    * 好了，这只皮卡丘送给你
    */
    `
    let speed = 50

    function writeCss(prefix, code, fn) {
        let div = document.querySelector('#code')
        let styleTag = document.querySelector('#Css')
        let n = 0
        let id = setTimeout(function f() {
            n += 1
            div.innerHTML = prefix + code.substring(0, n)
            styleTag.innerHTML = prefix + code.substring(0, n)
            div.scrollTop = div.scrollHeight
            if (n < code.length) {
                id = setTimeout(f, speed)
            } else {
                fn && fn()
            }
        }, speed)
    }
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let duration = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
        switch (duration) {
            case 'slow':
                speed = 100
                break
            case 'normal':
                speed = 50
                break
            case 'fast':
                speed = 10
                break
        }
    })
    writeCss('', Css)
}.call()