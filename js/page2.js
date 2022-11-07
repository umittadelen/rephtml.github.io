const wrapper = document.querySelector('.infinite')
const neck = document.querySelector('.neck')

document.querySelector('.info').addEventListener('click', () => {
    window.print()
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0){
            injectneck(entry)
        }
    });
}, {});

function injectneck(entry){
    observer.unobserve(entry.target)
    const clonedneck = neck.cloneNode(true)
    wrapper.appendChild(clonedneck)
    observer.observe(clonedneck)
}

observer.observe(neck)