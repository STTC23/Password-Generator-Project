// Función principal que genera la contraseña
function generarContraseña() {
    const longitud = 12; // Longitud deseada de la contraseña

    // Definimos los caracteres disponibles
    const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Letras mayúsculas y minúsculas
    const numeros = "0123456789"; // Dígitos numéricos
    const simbolos = "!@#$%^&*()_+~`|}{[]:;?><,./-="; // Símbolos especiales

    // Unimos todos los caracteres posibles en una sola cadena
    const caracteres = letras + numeros + simbolos;

    let contraseña = []; // Creamos un array vacío donde almacenaremos la contraseña

    // Aseguramos que la contraseña tenga al menos:
    // 1 minúscula o mayúscula
    contraseña.push(letras.charAt(Math.floor(Math.random() * 26)));
    // 1 número
    contraseña.push(numeros.charAt(Math.floor(Math.random() * numeros.length)));
    // 1 símbolo
    contraseña.push(simbolos.charAt(Math.floor(Math.random() * simbolos.length)));

    // Completa la contraseña hasta llegar a la longitud deseada
    while (contraseña.length < longitud) {
        // Agrega caracteres aleatorios de la lista completa
        contraseña.push(caracteres.charAt(Math.floor(Math.random() * caracteres.length)));
    }

    // Mezclamos los caracteres para que no siempre empiece con letra, número y símbolo
    contraseña = contraseña.sort(() => Math.random() - 0.5);

    // Mostramos la contraseña final en el elemento con id="output" y la comentamos
    document.querySelector('.mensaje').innerText = "Tu contraseña es: ";
    document.querySelector('.clave').innerText = contraseña.join('');
}

// Ejecuta la función automáticamente cuando la página haya cargado
window.onload = generarContraseña;
