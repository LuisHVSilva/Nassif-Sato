const bannerImage = document.getElementById("imgBanner");

function desktop() {
    bannerImage.setAttribute("src", "images/Banner-pc.svg")
}

function mobile() {
    bannerImage.setAttribute("src", 'images/Banner-celular.svg')
}

if (window.screen.width > 450) {
    desktop()
} else {
    mobile()
}