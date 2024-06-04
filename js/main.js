const popupContainer = document.querySelector(".popup-container");
const popup = document.querySelector(".popup");

const timerId = setTimeout(() => {
    openPopup()
}, 2000)

function openPopup() {
    popupContainer.classList.add("active");
    popup.classList.add("show");
}

function closePopup() {
    popupContainer.classList.remove("active");
    popup.classList.remove("show");
}

function closePopupOnClick(e) {
    if (!e.target.closest(".popup")) {
        closePopup("myPopup");
    }
}

document.addEventListener("click", closePopupOnClick);



const tags = document.querySelectorAll('.tags-container .tag');
tags.forEach(tag => {
    tag.addEventListener('click', event => {
        const tagValue = event.target.getAttribute('data-tag');

        const blogs = document.querySelectorAll('.blogs-container .blog');
        blogs.forEach(blog => {
            console.log(blog)
            const blogTags = blog.querySelectorAll('.tag');
            const hasTag = Array.from(blogTags).some(blogTag => blogTag.getAttribute('data-tag') === tagValue);

            if (!hasTag) {
                blog.style.display = 'none';
            } else {
                blog.style.display = 'flex';
            }
        });
    });
});

const form = document.querySelector('.form__sub')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    clearTimeout(timerId)
    const dialog = document.querySelector('.dialog')

    dialog.classList.add('active')

    document.addEventListener("click", ()=>{
        if (!e.target.closest(".dialog__wrapper")) {
            dialog.classList.remove("active");
        }
    });
})