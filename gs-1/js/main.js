//Timeline creation
const runStart = ()=>{
    console.log('onStart')
}
const runUpdate = ()=>{
    console.log('onUpdate') 
    //on update value is also used for pogress bars
}
const runComplete = ()=>{
    console.log('onComplete')
}

//The use of timeline is that we dont have to mange delays in order to make transitions occur efficiently. timeline will take care of order of animations
const timeline = gsap.timeline({
    duration: 1,
    paused: true,
    onStart: runStart,
    onUpdate: runUpdate,
    onComplete: runComplete
})
//We can add tweens to time line using 2 method 
//1. By  timeline.add() method 
// const tween= gsap.from('body', {
//     backgroundColor: '#fff',
//     duration:2,
//     ease: 'none'
// })

// timeline.add(tween)

// 2. or direvtly do timeline.from('body', {.......}) and you can chain all timelines
timeline
.from('body', {
    backgroundColor: '#fff',
    duration:2,
    ease: 'none'
}).fromTo([ 'h1', '.intro'], {
    y:-20,
    opacity: 0
},
{
    opacity:1,
    y: 0,
    duration:0.6,
    stagger: 0.2
},// '-=1' // Make thsi tween one second faster than usual or we can do it like
'myLable' // Where ever there is my lable it will appear on ame time
).from(['img','h2'], {
    opacity:0,
    duration:0.7,
    ease:'none'
}).fromTo('ul li', {
    opacity: 0,
    y:-20 
},
{
    opacity:1,
    y:0,
    duration:0.6,
    ease:'power1.out',
    stagger:0.2,
}, 'myLable')

const playbtn = document.getElementById('btnPlay')
const btnPause = document.getElementById('btnPause')
const btnResume = document.getElementById('btnResume')
const btnReverse = document.getElementById('btnReverse')
const btnSpeedUp = document.getElementById('btnSpeedUp')
const btnSlowDown = document.getElementById('btnSlowDown')
const btnSeek = document.getElementById('btnSeek')
const btnProgress= document.getElementById('btnProgress')
const btnRestart = document.getElementById('btnRestart')

playbtn.addEventListener('click',()=> {
    timeline.play()
} )
btnPause.addEventListener('click',()=> {
    timeline.pause()
} )
btnResume.addEventListener('click',()=> {
    timeline.resume()
} )
btnReverse.addEventListener('click',()=> {
    timeline.reverse()
} )
btnSpeedUp.addEventListener('click',()=> {
    timeline.timeScale(2) //Speed up twice
} )
btnSlowDown.addEventListener('click',()=> {
    timeline.timeScale(0.5)
} )
btnSeek.addEventListener('click',()=> {
    timeline.seek(1)
} )
btnProgress.addEventListener('click',()=> {
    timeline.progress(0.5) //jumps in middle always
} )
btnRestart.addEventListener('click',()=> {
    timeline.restart()
} )