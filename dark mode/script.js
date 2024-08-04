const toggle = document.getElementById('toggle');  

toggle.addEventListener('change', () => {  
    document.body.classList.toggle('dark-mode');  
});