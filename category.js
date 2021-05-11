var AccImgObj = {
    "images/img1.jpeg" : ["covers", 100],
    "images/head1.jpg" : ["headphones",200],
    "images/char2.jpg" : ["chargers", 300],
    "images/head2.jpg" : ["headphones", 50],
    "images/img2.jpeg" : ["covers", 60],
    "images/img3.jpg" : ["covers", 130],
    "images/head3.jpg" : ["headphones", 60],
    "images/char3.jpg" : ["chargers", 320],
    "images/head4.jpeg" : ["headphones",546],
    "images/img4.jpg" : ["covers",466],
    "images/img5.jpg" : ["covers",67],
    "images/head5.jpg" : ["headphones",77],
    "images/head6.jpg" : ["headphones",54],
    "images/img6.jpg" : ["covers",75],
    "images/char4.jpg" : ["chargers",45],
    "images/head7.jpeg" : ["headphones",67],
    "images/img7.jpg" : ["covers",34],
    "images/img8.jpg" : ["covers",67],
    "images/img9.jpg" : ["covers",34],
    "images/img10.jpeg" : ["covers",53],
    "images/char5.jpg" : ["chargers",76],
    "images/head13.jpg" : ["headphones",46],
    "images/img11.jpg" : ["covers",53],
    "images/img12.jpg" : ["covers",546],
    "images/head12.jpg" : ["headphones",535],
    "images/img13.jpg" : ["covers",53],
    "images/char6.jpg" : ["chargers",46],
    "images/head11.jpg" : ["headphones",45],
    "images/img14.jpg" : ["covers",53],
    "images/img15.jpg" : ["covers",65],
    "images/head10.jpg" : ["headphones",436],
    "images/img16.jpg" : ["covers",54],
    "images/img17.jpg" : ["covers",76],
    "images/head9.jpg" : ["headphones",56],
    "images/img18.jpg" : ["covers",87],
    "images/char1.jpg" : ["chargers",65],
    "images/head8.jpg" : ["headphones",56]
    };
    
    const accImgArray = Object.keys(AccImgObj);
    const accAttriArray = Object.values(AccImgObj);
    
    const accContainer = document.getElementById("accPic-container");
    const eleContainer = document.getElementById("elePic-container");
    const entContainer = document.getElementById("entPic-container");
    
    function createContainer(i,imgArray, attriArray, container){
          const parentDiv = document.createElement("div");
          const figure = document.createElement("img");
          const childDiv = document.createElement("div");
    
          container.appendChild(parentDiv);
          parentDiv.classList.add('itemBox', 'col-lg-4', 'col-md-4', 'col-sm-4', 'col-xs-4', 'filter', attriArray[i][0]);
    
          figure.src = imgArray[i];
          figure.alt = attriArray[i][0];
          figure.classList.add('img-responsive');
          childDiv.innerText = "$" + attriArray[i][1];
    
          parentDiv.appendChild(figure);
          parentDiv.appendChild(childDiv);
    }
    
    for(var i=0; i< accImgArray.length; i++){
      createContainer(i, accImgArray, accAttriArray, accContainer);
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
    
          if (b == 1) {
            document.getElementById("acce").style.display = "flex";
          } else if (b == 2) {
            document.getElementById("elec").style.display = "flex";
          } else if (b == 3) {
            document.getElementById("enter").style.display = "flex";
          } else {
            document.getElementById("acce").style.display = "flex";
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
    
    