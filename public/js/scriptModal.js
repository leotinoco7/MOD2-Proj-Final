let popupViews = document.querySelectorAll('.popup-view');
let popupBtns = document.querySelectorAll('.popup-btn');
let closeBtns = document.querySelectorAll('.close-btn');

let popup = function(popupClick){
    popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i) => {
    popupBtn.addEventListener("click", () => {
        popup(i);
    });
});

closeBtns.forEach((closeBtns) => {
    closeBtns.addEventListener("click", () => {
        popupViews.forEach((popupViews) => {
            popupViews.classList.remove('active');
        });
    });
});