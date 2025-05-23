        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
                if (window.scrollY > 800) {
                    text.classList.add('text-white');
                    text.classList.remove('text-black')
                    navbar.classList.remove('bg-[#7180b9]');
                    navbar.classList.add('bg-[#3423a6]');
                    page.classList.remove('bg-white');
                    page.classList.add('bg-[#171738]');
                }         
                else {
                    text.classList.add('text-black');
                    text.classList.remove('text-white');
                    navbar.classList.add('bg-[#7180b9]');
                    navbar.classList.remove('bg-[#3423a6]');
                    page.classList.remove('bg-[#171738]');
                    page.classList.add('bg-white');
                }  
        })