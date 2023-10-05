
const options = document.querySelectorAll('.Main-a');
const sections = document.querySelectorAll('.Main-section');


options.forEach((element, index) => {
    element.addEventListener('click', () => {
        // Remueve la clase 'active' de todas las secciones y opciones
        sections.forEach((section) => {
            section.classList.remove('active');
        });
        options.forEach((option) => {
            option.classList.remove('active');
        });

        // Agrega la clase 'active' a la sección y opción actual
        sections[index].classList.add('active');
        element.classList.add('active');
    });
});
