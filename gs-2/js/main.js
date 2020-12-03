// gsap.to('h2', {
//     duration:2, 
//     backgroundColor: 'pink',
//     delay: 2 })

// // gsap.from('ul li:last-child', {
// //     duration: 0.7,
// //     x: -40,
// //     ease: 'power2.out',
// //     stagger: 0.3, //stagger delay
// //     // repeat: -1 //for loop repeat
// //     repeat: 2 ,// for number of times it should repeat,
// //     repeatDelay: 1.2
// // })

// //Yoyo property:
// gsap.to('ul li:last-child', {
//     duration: 0.7,
//     y: 40,
//     ease:'power2.out',
//     repeat:-1,
//     repeatDelay: 0.5,
//     yoyo: true, //back and forth repetation
//     yoyoEase: 'none'
// })

// //Set from one position to another
// gsap.fromTo('header', {x:-40}, 
// {x:40, repeat:2, duration: 1, ease: 'power2.inOut', yoyo:true}
// )

// //Set prop help to set prop without animation
// gsap.set('ul',{
//     y: 100
// })

gsap.from('body', {
    backgroundColor: '#fff',
    duration:2,
    ease: 'none'
})

gsap.fromTo([ 'h1', '.intro'], {
    y:-20,
    opacity: 0
},
{
    opacity:1,
    y: 0,
    duration:0.6,
    ease: 'power1.out',
    delay: 1.5,
    stagger: 0.2
}
)

gsap.from(['img','h2'], {
    opacity:0,
    duration:0.7,
    delay:2,
    ease:'none'
})

gsap.fromTo('ul li', {
    opacity: 0,
    y:-20
},
{
    opacity:1,
    y:0,
    duration:0.6,
    ease:'power1.out',
    stagger:0.2,
    delay:2.3
})