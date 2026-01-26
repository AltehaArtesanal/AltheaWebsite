document.getElementById('language-toggle').addEventListener('click', function() {
    var isEnglish = document.querySelector('.en').style.display !== 'none';

    // Toggle visibility of English and Spanish content
    var englishLinks = document.querySelectorAll('.en');
    var spanishLinks = document.querySelectorAll('.es');

    englishLinks.forEach(link => link.style.display = isEnglish ? 'none' : 'inline');
    spanishLinks.forEach(link => link.style.display = isEnglish ? 'inline' : 'none');

    // Change the button text
    this.textContent = isEnglish ? 'EN' : 'ES';
});
