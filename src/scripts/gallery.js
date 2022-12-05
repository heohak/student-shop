function imageGallery(){
    const highlight = document.querySelector('.col-2 img');
    const previews = document.querySelectorAll('.small-img-col img');

    previews.forEach(preview =>{
        preview.addEventListener('click', function(){
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace("small", "big");
            highlight.src = bigSrc
            previews.forEach(preview => preview.classList.remove("img-active"));
            preview.classList.add("img-active");
        });
    });
}

imageGallery();