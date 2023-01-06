const images = document.querySelectorAll('.img-gallery')
const imagesLight = document.querySelector('.add-image')
const containerLight = document.querySelector('.image-light')
const burguer1 = document.querySelector('.burguer')


images.forEach(image=>{
    image.addEventListener('click', ()=>{
        addImage(image.getAttribute('src'))
    })
})

containerLight.addEventListener('click',(e)=>{
    if(e.target!== imagesLight) {
        containerLight.classList.toggle('show')
        imagesLight.classList.toggle('showImage')
        burguer1.style.opacity ='1'
    }
})

const addImage = (image)=>{
    imagesLight.src = image
    containerLight.classList.toggle('show')
    imagesLight.classList.toggle('showImage')
    burguer1.style.opacity ='0'
}

