var m_image = document.getElementById("mainImg")
var i_left = 450
var i_top = 5
var i_width = 300
var i_height = 200


document.getElementById("reset").addEventListener("click", function(){
    m_image.style.top = i_top+"px";
    i_top = 5;
    m_image.style.left = i_left+"px";
    i_left = 450;
    m_image.style.width = i_width+"px";
    i_width = 300;
    m_image.style.height = i_height+"px";
    i_height = 200;
});

document.getElementById("moveLeft").addEventListener("click", function(){
    
    i_left = i_left - 5;
    m_image.style.left = i_left+"px";
});

document.getElementById("moveRight").addEventListener("click", function(){
    i_left = i_left + 5;
    m_image.style.left = i_left+"px";
});

document.getElementById("moveUp").addEventListener("click", function(){
    i_top = i_top - 5;
    m_image.style.top = i_top+"px";
});

document.getElementById("moveDown").addEventListener("click", function(){
    i_top = i_top + 5;
    m_image.style.top = i_top+"px";
});

document.getElementById("enlarge").addEventListener("click", function(){
    i_width = i_width + 3;
    m_image.style.width = i_width+"px";
    i_height = i_height + 3;
    m_image.style.height = i_height+"px";
});

document.getElementById("shrink").addEventListener("click", function(){
    i_width = i_width - 3;
    m_image.style.width = i_width+"px";
    i_height = i_height - 3;
    m_image.style.height = i_height+"px";
});

document.getElementById("reset").addEventListener("click", function(){
    m_image.style.top = "5px";
    m_image.style.left = "450px";
    m_image.style.width = "300px";
    m_image.style.height = "200px";
});

document.getElementById("show").addEventListener("click", function(){
    document.getElementById("control").style.bottom = "0px";
});

document.getElementById("hide").addEventListener("click", function(){
    document.getElementById("control").style.bottom = "-90px";
});

document.getElementById("mainImg").addEventListener("click", function(){
    m_image.style.backgroundImage = "url(img/bg1.jpg)";
    document.getElementById("rightImg").style.backgroundImage = "url(img/bg3.jpg)";
    document.getElementById("bottomImg").style.backgroundImage = "url(img/bg4.jpg)";
    document.getElementById("leftImg").style.backgroundImage = "url(img/bg2.jpeg)";
    document.getElementById("img1").style.backgroundImage = "url(img/bg1.jpg)";
    document.getElementById("img2").style.backgroundImage = "url(img/img1.jpeg)";
    document.getElementById("img3").style.backgroundImage = "url(img/img2.jpg)";
})

document.getElementById("leftImg").addEventListener("click", function(){
    m_image.style.backgroundImage = "url(img/bg2.jpeg)";
    document.getElementById("leftImg").style.backgroundImage = "url(img/bg1.jpg)";
    document.getElementById("rightImg").style.backgroundImage = "url(img/bg3.jpg)";
    document.getElementById("bottomImg").style.backgroundImage = "url(img/bg4.jpg)";
    document.getElementById("img1").style.backgroundImage = "url(img/bg2.jpeg)";
    document.getElementById("img2").style.backgroundImage = "url(img/img5.jpeg)";
    document.getElementById("img3").style.backgroundImage = "url(img/img6.jpg)";
})

document.getElementById("rightImg").addEventListener("click", function(){
    m_image.style.backgroundImage = "url(img/bg3.jpg)";
    document.getElementById("leftImg").style.backgroundImage = "url(img/bg2.jpeg)";
    document.getElementById("rightImg").style.backgroundImage = "url(img/bg1.jpg)";
    document.getElementById("bottomImg").style.backgroundImage = "url(img/bg4.jpg)";
    document.getElementById("img1").style.backgroundImage = "url(img/bg3.jpg)";
    document.getElementById("img2").style.backgroundImage = "url(img/img8.jpg)";
    document.getElementById("img3").style.backgroundImage = "url(img/img9.jpg)";
})

document.getElementById("bottomImg").addEventListener("click", function(){
    m_image.style.backgroundImage = "url(img/bg4.jpg)";
    document.getElementById("leftImg").style.backgroundImage = "url(img/bg2.jpeg)";
    document.getElementById("rightImg").style.backgroundImage = "url(img/bg3.jpg)";
    document.getElementById("bottomImg").style.backgroundImage = "url(img/bg1.jpg)";
    document.getElementById("img1").style.backgroundImage = "url(img/bg4.jpg)";
    document.getElementById("img2").style.backgroundImage = "url(img/img11.jpeg)";
    document.getElementById("img3").style.backgroundImage = "url(img/img12.jpg)";
})

document.getElementById("img2").addEventListener("click", function(){
    
})



