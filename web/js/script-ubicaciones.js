var botonAgregar = document.querySelector('.AggButton');

// Callback para habilitar el botón cuando el reCAPTCHA se completa con éxito
function enableSubmitButton() {
    botonAgregar.disabled = false;
    
}
function recaptchaExpiredCallback() {
    botonAgregar.disabled = true;
    
}


$(document).ready(function () {
    $('.editbutton').click(function () {
        var ubi_id = $(this).data('ubi_id');

        // Hacer la solicitud Ajax
        $.ajax({
            url: '../../UbicacionesServlet', // Reemplaza con la ruta correcta
            method: 'GET',
            data: {accion: 'EditarUbicacion',ubi_id: ubi_id},
            dataType: 'json',
            success: function (data) {
                // Manejar la respuesta
                $('#ubi_codigo').val(data.ubi_codigo);
                $('#ubi_descrip').val(data.ubi_descripcion);
                $('#ubi_centrocosto').val(data.ubi_centro_costo);
                $('#ubi_id').val(data.ubi_id);

                // Abre la modal
                $('#EditarUbicacion').modal('show');
            },
            error: function (error) {
                console.log('Error en la solicitud Ajax:', error);
            }
        });
    });
});






