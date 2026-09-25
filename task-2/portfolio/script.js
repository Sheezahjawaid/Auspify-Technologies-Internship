
document.addEventListener('DOMContentLoaded',()=>{
    const contactForm= document.querySelector('form');
    
    if (contactForm){
        contactForm.addEventListener('submit',(e)=>{
            e.preventDefault();

            const nameInput=contactForm.querySelector('input[type="text"]').value.trim();
            const emailInput=contactForm.querySelector('input[type="email"]').value.trim();
            const messageInput=contactForm.querySelector('textarea').value.trim();

            if (!nameInput || !emailInput || !messageInput){
                alert("please fill in alll the fields before sending.")
                return;
            }
            else{
                alert(`Thank You, ${nameInput}! Your message has been sent.`);
                contactForm.reset();
            };
        });
    }

    const projectButtons = document.querySelectorAll('.project button');

    projectButtons.forEach(button => {
        button.addEventListener('click',(e) => {
            const projectCard = e.target.closest('.project');
            const projectTitle = projectCard.querySelector('h3').innerText;
        
        alert(`Opening details for ${projectTitle}...`);
        });
    })
})