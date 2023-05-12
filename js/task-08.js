const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
  e.preventDefault(); // Previene que la página se recargue al enviar el formulario
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    alert('Todos los campos son obligatorios'); // Avisa que todos los campos son obligatorios
  } else {
    const user = { email, password };
    console.log(user); // Muestra los datos del usuario en la consola
    form.reset(); // Reinicia los valores del formulario
  }
});
