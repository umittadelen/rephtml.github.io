const contextMenu = document.getElementById("context-menu");
const items = document.getElementsByClassName("item");
const scope = document.querySelector("body");

const normalizePozition = (mouseX, mouseY) => {
// ? compute what is the mouse position relative to the container element (scope)
let {
    left: scopeOffsetX,
    top: scopeOffsetY,
} = scope.getBoundingClientRect();

scopeOffsetX = scopeOffsetX < 0 ? 0 : scopeOffsetX;
scopeOffsetY = scopeOffsetY < 0 ? 0 : scopeOffsetY;
    
const scopeX = mouseX - scopeOffsetX;
const scopeY = mouseY - scopeOffsetY;

// ? check if the element will go out of bounds
const outOfBoundsOnX = scopeX + contextMenu.clientWidth > scope.clientWidth;

const outOfBoundsOnY = scopeY + contextMenu.clientHeight > scope.clientHeight;

let normalizedX = mouseX;
let normalizedY = mouseY;

// ? normalize on X
if (outOfBoundsOnX) {
    normalizedX =
    scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;
}

// ? normalize on Y
if (outOfBoundsOnY) {
    normalizedY =
    scopeOffsetY + scope.clientHeight - contextMenu.clientHeight;
}

return { normalizedX, normalizedY };
};

scope.addEventListener("contextmenu", (event) => {
    event.preventDefault();

    const { clientX: mouseX, clientY: mouseY } = event;

    const { normalizedX, normalizedY } = normalizePozition(mouseX, mouseY);

    contextMenu.classList.remove("visible");

    contextMenu.style.top = `${normalizedY}px`;
    contextMenu.style.left = `${normalizedX}px`;

    setTimeout(() => {
        contextMenu.classList.add("visible");
    });
});

scope.addEventListener("click", (e) => {
    // ? close the menu if the user clicks outside of it
    if (e.target.offsetParent != contextMenu) {
        contextMenu.classList.remove("visible");
    }
});

function closeWindow() {
    window.opener.postMessage('location', '*');
    window.open('location', '_self', '').close();
}