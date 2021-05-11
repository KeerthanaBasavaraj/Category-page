var AccImgObj = {
  "images/img1.jpeg": ["covers", 100],
  "images/head1.jpg": ["headphones", 200],
  "images/char2.jpg": ["chargers", 300],
  "images/head2.jpg": ["headphones", 50],
  "images/img2.jpeg": ["covers", 60],
  "images/img3.jpg": ["covers", 130],
  "images/head3.jpg": ["headphones", 60],
  "images/char3.jpg": ["chargers", 320],
  "images/head4.jpeg": ["headphones", 546],
  "images/img4.jpg": ["covers", 466],
  "images/img5.jpg": ["covers", 67],
  "images/head5.jpg": ["headphones", 77],
  "images/head6.jpg": ["headphones", 54],
  "images/img6.jpg": ["covers", 75],
  "images/char4.jpg": ["chargers", 45],
  "images/head7.jpeg": ["headphones", 67],
  "images/img7.jpg": ["covers", 34],
  "images/img8.jpg": ["covers", 67],
  "images/img9.jpg": ["covers", 34],
  "images/img10.jpeg": ["covers", 53],
  "images/char5.jpg": ["chargers", 76],
  "images/head13.jpg": ["headphones", 46],
  "images/img11.jpg": ["covers", 53],
  "images/img12.jpg": ["covers", 546],
  "images/head12.jpg": ["headphones", 535],
  "images/img13.jpg": ["covers", 53],
  "images/char6.jpg": ["chargers", 46],
  "images/head11.jpg": ["headphones", 45],
  "images/img14.jpg": ["covers", 53],
  "images/img15.jpg": ["covers", 65],
  "images/head10.jpg": ["headphones", 436],
  "images/img16.jpg": ["covers", 54],
  "images/img17.jpg": ["covers", 76],
  "images/head9.jpg": ["headphones", 56],
  "images/img18.jpg": ["covers", 87],
  "images/char1.jpg": ["chargers", 65],
  "images/head8.jpg": ["headphones", 56],
};

const accImgArray = Object.keys(AccImgObj);
const accAttriArray = Object.values(AccImgObj);

var EleImgObj = {
  "images/tv1.jpg": ["television", 3000],
  "images/desk1.jpg": ["desktop", 4000],
  "images/pho1.jpg": ["mobile", 1000],
  "images/tv2.jpg": ["television", 4000],
  "images/tv3.jpg": ["television", 3990],
  "images/lap1.jpg": ["laptop", 3300],
  "images/pho2.jpg": ["mobile", 2200],
  "images/ref3.jpg": ["refrigerator", 6000],
  "images/ref1.jpg": ["refrigerator", 6000],
  "images/lap2.jpg": ["laptop", 3300],
  "images/desk2.jpg": ["desktop", 4000],
  "images/desk3.jpg": ["desktop", 4000],
  "images/ref2.jpg": ["refrigerator", 6000],
  "images/tv4.jpg": ["television", 4000],
  "images/desk3.jpg": ["desktop", 4000],
  "images/pho3.jpg": ["mobile", 2200],
  "images/tv5.jpeg": ["television", 3990],
  "images/lap3.jpg": ["laptop", 3300],
  "images/desk4.jpg": ["desktop", 4000],
  "images/ref4.jpg": ["refrigerator", 6000],
};

const eleImgArray = Object.keys(EleImgObj);
const eleAttriArray = Object.values(EleImgObj);

var EntImgObj = {
  "images/book7.jpg": ["book", 100],
  "images/inst4.jpg": ["instrument", 500],
  "images/toy1.jpeg": ["toy", 100],
  "images/inst1.jpg": ["instrument", 600],
  "images/book2.jpg": ["book", 110],
  "images/toy2.jpg": ["toy", 150],
  "images/book3.jpg": ["book", 100],
  "images/inst2.jpg": ["instrument", 600],
  "images/toy3.jpg": ["toy", 250],
  "images/book4.jpg": ["book", 200],
  "images/book5.jpeg": ["book", 160],
  "images/toy4.jpg": ["toy", 250],

  "images/book6.jpg": ["book", 290],
  "images/inst3.jpg": ["instrument", 900],
  "images/book1.jpg": ["book", 300],
  "images/inst5.jpg": ["instrument", 680],
};

const entImgArray = Object.keys(EntImgObj);
const entAttriArray = Object.values(EntImgObj);

const accContainer = document.getElementById("accPic-container");
const eleContainer = document.getElementById("elePic-container");
const entContainer = document.getElementById("entPic-container");

function createContainer(i, imgArray, attriArray, container) {
  const parentDiv = document.createElement("div");
  const figure = document.createElement("img");
  const childDiv = document.createElement("div");

  container.appendChild(parentDiv);
  parentDiv.classList.add(
    "itemBox",
    "col-lg-4",
    "col-md-4",
    "col-sm-4",
    "col-xs-4",
    "filter",
    attriArray[i][0]
  );

  figure.src = imgArray[i];
  figure.alt = attriArray[i][0];
  figure.classList.add("img-responsive");
  childDiv.innerText = "$" + attriArray[i][1];
  childDiv.classList.add("img-price");

  parentDiv.appendChild(figure);
  parentDiv.appendChild(childDiv);
}

for (var i = 0; i < accImgArray.length; i++) {
  createContainer(i, accImgArray, accAttriArray, accContainer);
}

for (var i = 0; i < eleImgArray.length; i++) {
  createContainer(i, eleImgArray, eleAttriArray, eleContainer);
}

for (var i = 0; i < entImgArray.length; i++) {
  createContainer(i, entImgArray, entAttriArray, entContainer);
}

function valueSender(a) {
  localStorage.setItem("myValue", a);
  window.location.href = "./accessories.html";
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("active");
  if (x.className === "topnav") {
    x.className += " responsive";
    y.className = "";
  } else {
    x.className = "topnav";
    y.className = "active";
  }
}

var b = localStorage.getItem("myValue");
console.log(b);

function responsiveAlignment(elemId) {
  if (window.innerWidth < 610){
    document.getElementById(elemId).style.display = "inline";
  }
  else {
    document.getElementById(elemId).style.display = "flex";
    document.getElementById(elemId).style.flexDirection = "row-reverse";
  }
};

if (b == 2) {
    responsiveAlignment("elec");
    window.addEventListener('resize', responsiveAlignment("elec"));
} else if (b == 3) {
  responsiveAlignment("enter");
  window.addEventListener('resize', responsiveAlignment("enter"));
} else {
  responsiveAlignment("acce");
  window.addEventListener('resize', responsiveAlignment("acce"));
}

$(document).ready(function () {
  $(".list").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      $(".itemBox").show("1000");
    } else {
      $(".itemBox")
        .not("." + value)
        .hide("3000");
      $(".itemBox")
        .filter("." + value)
        .show("3000");
    }
  });

  $(".list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
