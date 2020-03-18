function getgeoip(json) {
    var 
        cr_ipsb = document.getElementById('ip-ipsb'),
        cr_ipsb_geo = document.getElementById('ip-ipsb-geo'),
        n = (ve) => Boolean(ve) ? ve + " " : " ";
    
    cr_ipsb.innerHTML = json.ip; 
    cr_ipsb_geo.innerHTML = n(json.country) + n(json.region) + n(json.city) + n(json.organization);
}

function checker(e, t) {
    var 
        n = new Image,
        i = setTimeout(function() {
            n.onerror = n.onload = null;
            var tx = document.getElementById(t);
            tx.innerHTML = '连接超时';
            tx.style.color = '#FF0000';
            n.src = null;
        }, 6e3);
    
    n.onerror = function() {
        clearTimeout(i);
        var tx = document.getElementById(t);
        tx.innerHTML = '无法访问';
        tx.style.color = '#FF0000';
    };
    n.onload = function() {
        clearTimeout(i);
        var tx = document.getElementById(t);
        tx.innerHTML = '连接正常';
        tx.style.color = '#00FF00';
    };
    n.src = "https://" + e + "/favicon.ico?" + +new Date
}

(() => {
    checker("www.baidu.com", "http-baidu");
    checker("s1.music.126.net/style", "http-163");
    checker("github.com", "http-github");
    checker("www.youtube.com", "http-youtube");
})();