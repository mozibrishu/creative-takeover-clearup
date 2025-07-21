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
}, 12000);


function beginAnimation() {
  var isMobile = window.innerWidth < 600;
  if (isMobile) {
    gsap.timeline()
      .set('.wbl_innerContainer', { display: 'block' })
      .fromTo('.wbl_can_container', { y: '150%', display: 'none' }, { y: '0%', display: 'block', duration: 1, ease: 'none' })
      .fromTo('.wbl_can_wrapper>img', { x: "32%" }, { x: '-32%', duration: 1, ease: 'none', onComplete: wrapperImgAnim }, '<')
      .fromTo('.wbl_kv', { y: '60%', display: 'none', opacity: 0 }, { y: '0%', display: 'block', opacity: 1, duration: .7, ease: 'none' }, '>.5')
      .to('.wbl_can_container', { y: '40%', duration: .7 }, "<")
      .fromTo('.wbl_logo', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: .7, ease: 'none', onComplete: logoAnimation }, '>.5')

  } else {

    gsap.timeline()
      .set('.wbl_innerContainer', { display: 'block' })
      .fromTo('.wbl_can_container', { y: '150%', display: 'none' }, { y: '0%', display: 'block', duration: 1, ease: 'none' })
      .fromTo('.wbl_can_wrapper>img', { x: "32%" }, { x: '-32%', duration: 1, ease: 'none', onComplete: wrapperImgAnim }, '<')
      .fromTo('.wbl_kv', { x: '60%', display: 'none', opacity: 0 }, { x: '0%', display: 'block', opacity: 1, duration: .7, ease: 'none' }, '>.5')
      .to('.wbl_can_container', { x: '175%', duration: .7 }, "<")
      .fromTo('.wbl_logo', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: .7, ease: 'none', onComplete: logoAnimation }, '>.5')
  }

}

setTimeout(() => {
  beginAnimation();
}, 1000);

function wrapperImgAnim() {
  gsap.to('.wbl_can_wrapper>img', { x: "-30%", duration: 1, ease: 'none', repeat: -1, yoyo: true })
}


function logoAnimation() {
  gsap.fromTo('.wbl_logo', { rotationZ: 0, opacity: 0, scale: 0.5 }, { rotationZ: 360, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", repeat: -1, repeatDelay: 2 }, '<.2');
}