let btnLeft = document.querySelector('.left'),
    btnRight = document.querySelector('.right');
btnLeft.addEventListener('click',moveLeft);
btnRight.addEventListener('click',moveRight)
let images = [
    'https://wallpaperaccess.com/full/31189.jpg',
    'https://www.teahub.io/photos/full/0-2780_3840x2160-4k-nature-wallpaper-dump-data-id-139651.jpg',
    'https://wallpaperaccess.com/full/31193.jpg',
    'https://live.staticflickr.com/4243/35496152212_912bface0c_b.jpg',
    'https://c4.wallpaperflare.com/wallpaper/707/10/426/chile-patagonia-wallpaper-preview.jpg'
]
var count = 0;

function moveRight(){
    count++;
    if(count==5)
    count = 0;
    img.setAttribute('src',images[count]); 
    imgNumber.innerHTML = count+1;  
    this.classList.add('transform');
    setTimeout(()=>{this.classList.remove('transform')},300);
}
function moveLeft(){
    count--;
    if(count==-1)
    count = 4;
    img.setAttribute('src',images[count]);  
    imgNumber.innerHTML = count+1; 
    this.classList.add('transform');
    setTimeout(()=>{this.classList.remove('transform')},300);
}

let imgNumber = document.querySelector('#img-count');

let elem = document.getElementById('demo')
let range = elem.createTextRange()
range.move('character',50)
range.select()



