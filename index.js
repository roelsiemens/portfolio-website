window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (window.scrollY > 800) {
        text.classList.add('text-white');
        text.classList.remove('text-black')
        navbar.classList.remove('bg-[#7180b9]');
        navbar.classList.add('bg-[#3423a6]');
        page.classList.remove('md:bg-white');
        page.classList.add('md:bg-[#171738]');
    }         
    else {
        text.classList.add('text-black');
        text.classList.remove('text-white');
        navbar.classList.add('bg-[#7180b9]');
        navbar.classList.remove('bg-[#3423a6]');
        page.classList.remove('md:wbg-[#171738]');
        page.classList.add('md:bg-white');
     }  
})
    let gewisseld = false;

    function verwisselfotos() {
      const blok1 = document.getElementById("foto1");
      const blok2 = document.getElementById("foto2");

      const pos1 = blok1.getBoundingClientRect();
      const pos2 = blok2.getBoundingClientRect();

      const offsetX = pos2.left - pos1.left;
      const offsetY = pos2.top - pos1.top;

      if (!gewisseld) {
        blok1.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        blok2.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
      } else {
        blok1.style.transform = `translate(0, 0)`;
        blok2.style.transform = `translate(0, 0)`;
      }

      gewisseld = !gewisseld;
    }