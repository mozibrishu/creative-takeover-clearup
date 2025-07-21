function removedAll() {
  gsap.to('.wbl_container', {
    opacity: 0, display: 'none', duration: .5, ease: 'none', onComplete: () => {
      document.querySelector('.wbl_container').remove();
    }
  })
}
document.querySelector('.wbl_closeBtn_takeover').addEventListener('click', (e) => {
  e.stopPropagation()
  removedAll()
})
setTimeout(() => {
  removedAll()
}, 17000);

var isMobile = window.innerWidth < 600;

function beginAnimation() {
  gsap.timeline()
    .set('.wbl_innerContainer', { display: 'block' })
}


beginAnimation();
