        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
              if (window.scrollY > 800) {
                text.classList.add('Text-white');
                page.classList.remove('bg-white');
                page.classList.add('bg-[#171738]');
                }         
                else {
                page.classList.remove('bg-[#171738]');
                page.classList.add('bg-white');
                }  
        })