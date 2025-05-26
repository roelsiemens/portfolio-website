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
            const dot = document.getElementById('cursor-dot');

    window.addEventListener('mousemove', (e) => {
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    });