var mynva = document.getElementById('nav');
window.onscroll = function () {
    'use strict';

    if (window.scrollY >= 625) {
        mynva.style.backgroundColor = '#fff';
        mynva.style.boxShadow = ' 0 10px 10px #b7afab';
    } else {
        mynva.style.background = 'none';
        mynva.style.boxShadow = 'none';
    }

};
var myrightd = document.getElementById('rightd');
var myfontawsam = document.getElementById('fontawsam');
myrightd.onmouseover = function () {
    'use strict';
    myfontawsam.style.color = ' #fff';
    myfontawsam.style.transition = '.8s';
};
myrightd.onmouseout = function () {
    'use strict';
    myfontawsam.style.color = ' #fc6608';
};
