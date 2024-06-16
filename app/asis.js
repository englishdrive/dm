const formulario = document.getElementById('formulario');
const registro = document.getElementById ('registro');
const exito = document.getElementById ('exito');

formulario.addEventListener ('submit', async(e) => {
    e.preventDefault();

    await fetch('https://sheet.best/api/sheets/05ffed0e-a1ad-4420-b778-dc744868d58c', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            "Nombres": formulario.nombres.value,
            "Correo": formulario.correo.value,
        })

    });

    registro.classList.remove('activo');
    exito.classList.add('activo');

});