const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    const text = button.querySelector(".bug-text");
    const originalText= text.innerText;
    const delay = 30;

    button.addEventListener("mouseover", () => {
        let i = 0;
        const interval = setInterval(() => {
            const modifiedText = originalText
                .split("")
                .map(() => {
                return String.fromCharCode(Math.random() * (126-32)+32);
            
                })
                .join("");
            text.innerText = modifiedText;
            i++;
            if (i>7){
                clearInterval(interval);
                text.innerText = originalText;
            }
        }, delay);
    });
});

document.querySelectorAll(".list .image img").forEach(image => {
    image.onclick = () => {
        const popup = document.querySelector(".popup-image");
        const popupImg = popup.querySelector("img");
        
        popup.style.display = "block";
        popupImg.src = image.getAttribute("src");

        // Close popup when clicking outside the image
        popup.onclick = (e) => {
            if (e.target !== popupImg) {
                popup.style.display = "none";
            }
        };
    };
});
