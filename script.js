// 1. Hanapin ang form sa iyong HTML
const contactForm = document.querySelector('form');

// 2. Makinig sa "submit" event
contactForm.addEventListener('submit', function(e) {
    // Pinipigilan nito ang pag-reload ng page (optional, depende sa setup mo)
    // e.preventDefault(); 

    // 3. Maglagay ng maikling delay o gawin agad ang pag-clear
    // Dito mo rin pwede ilagay ang code kung gagamit ka ng EmailJS sa huli
    
    alert("Message Sent Successfully!");

    // 4. Ito ang magbubura ng lahat ng text sa loob ng form
    contactForm.reset();
});
