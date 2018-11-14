// Made by H. Dunning & MattSMR

function changeText() {
    document.getElementById("label").innerText = prompt("What should the text be changed to?");
}

function setLabel(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function bgColour() {
    var colours = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
    ];
    selectedColour = colours[Math.floor(Math.random() * colours.length)]
    document.body.style.backgroundColor = selectedColour;

}

function display() {
    var e = new Date,
        r = e.getHours(),
        a = e.getMinutes(),
        t = e.getSeconds(),
        n = r >= 12 ? "PM" : "AM";
    r %= 12, r = r ? r : 12, a = checkTime(a), t = checkTime(t);

    var y = new Array(7);
    y[0] = "Sunday", y[1] = "Monday", y[2] = "Tuesday", y[3] = "Wednesday", y[4] = "Thursday", y[5] = "Friday", y[6] = "Saturday";

    var u = y[e.getDay()];
    year = e.getFullYear(), d = e.getDate();

    var c = new Array(12);
    c[0] = "Janurary", c[1] = "Feburary", c[2] = "March", c[3] = "April", c[4] = "May", c[5] = "June", c[6] = "July", c[7] = "August", c[8] = "September", c[9] = "October", c[10] = "November", c[11] = "December";

    var i = c[e.getMonth()];

    document.getElementById("date").innerHTML = u + ", " + d + " " + i + " " + year, document.getElementById("time").innerHTML = r + ":" + a + ":" + t + " " + n;

    setTimeout(display, 100)
}

function checkTime(e) {
    return 10 > e && (e = "0" + e), e
}

function fullscreen() {
    var e = document.createElement("img"),
        A = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAI1JREFUeNrsV0EOwCAI6w/8/6lP8gk8ZTuPLUoirltCEy8mpY0iIAAcg0WsgxONreIRE4+bhnzYr05AkgO2wQQHV3wxwAmBieJe6xY8w0Q0BlcDZHOngXqA1zPziE68BTjNmWDGM4qKexNEoVAoJPVzWSGSlmJpM3q1HcsHEvlI9omhtL5m9TWT5cApwAD/IigEZttSgAAAAABJRU5ErkJggg==",
        t = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABVQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgEApAAAAAZ0Uk5TAA+fz9/vpTOW9gAAAJNJREFUKM/NkkEKwyAUBSeeQOoFDAX3duERcoQcQJN3/yN08RVLUui2fyE4Ph/IyPLiY56eoDj3TpmiOkFSI2lEPE6qtgSA3A+TtBaA9pAq4KRTANr77SQZUO93E1j9sg9wegDCTGQAygTN80fz+3FsAxx8T1w7nHQY2CySpJgAqpMq3QVANA3mwo/6eld5k339Dm89PDdxiEGVaQAAAABJRU5ErkJggg==";
    e.src = A, e.id = "fsicon", e.style.opacity = 1, e.style.filter = "invert(100%)", e.style.cursor = "pointer", e.style.zIndex = 2e3, e.style.top = "10px", e.style.right = "10px", e.style.position = "fixed", e.style.height = "25px", e.style.width = "25px", document.body.appendChild(e);

    var e = document.getElementById("fsicon");
    e && e.addEventListener("click", function() {
        if (e.getAttribute("src") != t) {
            var A = document.documentElement;
            A.requestFullscreen ? A.requestFullscreen() : A.mozRequestFullScreen ? A.mozRequestFullScreen() : A.webkitRequestFullScreen && A.webkitRequestFullScreen()
        } else document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
    }, !1), e && (document.addEventListener("fullscreenchange", function() {
        document.fullscreenElement ? e.setAttribute("src", t) : e.setAttribute("src", A)
    }, !1), document.addEventListener("mozfullscreenchange", function() {
        document.mozFullScreen ? e.setAttribute("src", t) : e.setAttribute("src", A)
    }, !1), document.addEventListener("webkitfullscreenchange", function() {
        document.webkitIsFullScreen ? e.setAttribute("src", t) : e.setAttribute("src", A)
    }, !1))
}

/* IGNORE THIS PLEASE
'use strict';
document.addEventListener('keypress', (event) => {
	const keyName = 220;
	window.open('test.html', '_self', false);
});
*/
		  
