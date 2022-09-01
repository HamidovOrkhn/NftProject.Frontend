var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {

    accHD[i].addEventListener('click', toggleItem, false);


}

function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
        this.classList.remove('fa-minus')
        this.classList.add('fa-plus')
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
        this.classList.remove('fa-plus')
        this.classList.add('fa-minus')
    }
}
$('.five-slider').owlCarousel({
    loop: true,
    // margin: 20,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
$('.five-slider').owlCarousel({
    center: true,
    items: 2,
    loop: false,
    margin: 10,
    responsive: {
        600: {
            items: 2
        }
    }
});