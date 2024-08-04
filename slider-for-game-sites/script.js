function switchTheme(theme) {
    document.body.classList.toggle('light-theme', theme === 'light');
    document.querySelector('.light').classList.toggle('active', theme === 'light');
    document.querySelector('.dark').classList.toggle('active', theme === 'dark');
}
