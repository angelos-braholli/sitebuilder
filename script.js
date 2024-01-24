let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i) =>
`<b style="transform:rotate(${i* 6.3}deg")>${char}</b>`
).join("");


const sr = ScrollReveal({
    origin: 'top' ,
    distance: '60px' ,
    duration:2500,
    delay:400,
    // reset:true , 
})

// sr.reveal(`.img-hero`)

sr.reveal(`.hero-info h1`)
sr.reveal(`.social-media` )
sr.reveal(`.btn-box` )
sr.reveal(`.hero-info p`)




