var crsr =document.querySelector("#cursor")
var blur =document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top =dets.y+"px"  
    blur.style.left=dets.x-140+"px"
    blur.style.top =dets.y-140+"px"    
})

gsap.to("#nav",{
 backgroundColor :"rgb(179, 115, 115)",
 height:"120px",
 duration:2,
 scrollTrigger: {
    trigger:"#nav",
    scroller:"body",
    //marker:true,
    start:"top-10%",
    end:"top -11%",
scrub:1,
 }
}) 
gsap.to("#main",{
  
    height:"100px",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        
        marker:true,
       start:"top -30%",
       end:"top -80%",
       scrub:2
       
    }
})