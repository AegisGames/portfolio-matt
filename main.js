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