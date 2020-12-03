gsap.registerPlugin(ScrollTrigger)

function init(){
    // tween to fade the logo on scroll
    // gsap.to('#intro img', 
    //  { opacity: 0, 
    // scrollTrigger: {
    //    trigger: '#intro' ,
    //    start: 'top top',
    //    end:'bottom centre',
    //    scrub: true
    // }})
    gsap.to(['#intro h1', '#intro p'],{
        autoAlpha: 0, //used for opacity or fade out thing
        ease: 'none',
        scrollTrigger:{
            trigger: '#intro .content',
            start: 'top top+=50',
            // end: 'bottom center',
            pin: true,
            scrub: true, //scrub means go along with scroll
            markers: true
        }
    })

    // Set is used to set class on and on and dosent make any animations
    gsap.set("#project02",{
        scrollTrigger: {
            trigger: "#project02",
            start: 'top bottom-=200', // if we do it 'top bottom' its gonan animate as soon as i comes to the view port
            end: 'bottom center-=200', // or you can say -=10% of the view port so even if you change th eview port (dec or inc ) it still gonna work perfectly
            toggleClass  : 'active',
            markers:true    }
         })

        const parallaxTl = gsap.timeline({
            ease: "none",
            scrollTrigger:{
                trigger: '.bcg-parallax',
                start: 'top bottom+=300',
                scrub: true
            }
        })

        parallaxTl
        .from('.content-wrapper', {duration: 0.4, autoAlpha: 0}, 1 )  // 1 is timing for fadeing
        .from('.bcg', {duration:1, y:'-30%'})
       
        const projects = document.querySelectorAll('.project');
        projects.forEach((project) => {
            gsap.from(project, {
                opacity : 0,
                yPercent : 5,
                scrollTrigger:{
                    trigger: project.querySelector('img'),
                    start: 'top bottom-=300',
                    end: 'top center',
                    markers: true,
                    toggleActions: 'play none none reverse', //This control the play of animation 
                    // first value determine what should happen when the scroll hits the scroller start
                    // 2nd value is for what should happen when the end hits the scroller end
                    //3rd value is for what should happen when the end hits the scroller end but in the opoosite direction
                    // 4th value is controlling what should happen to our animation when when start hits scroller start in oposite direction
                // callback functions 
                   // onUpdate: (self)=> console.log(self.progress)
                    // desturcting
                    onUpdate: ({progress, direction, isActive, getVelocity}) => console.log(progress, direction, isActive, getVelocity())
                    
                }
            })
        })
    } 

window.addEventListener('load', function(){
    init();
});
 