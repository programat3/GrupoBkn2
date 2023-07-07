

$(document).ready(function () {
    $("#formmisdatos").validate({
        rules: {
            rut: {
                required: true,
                rutChileno: true,
            },
            nombres: {
                required: true,
            },
            apellidos: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            direccion: {
                required: true,
            },
            contrasena: {
                required: true,
                minlength: 8,
            },
            confcontrasena: {
                required: true,
                equalTo: "#contrasena",
            },
        },
        messages: {
            rut: {
                required: "El RUT es un campo obligatorio",
                rutChileno: "El formato del rut no es válido",
            },
            nombres: {
                required: "Su nombre es un campo obligatorio",
            },
            apellidos: {
                required: "Su apellido es un campo obligatorio",
            },
            email: {
                required: "El correo es un campo obligatorio",
                email: "El correo no cumple con el formato",
            },
            direccion: {
                required: "La dirección es un campo obligatorio"
            },
            contrasena: {
                required: "La contraseña es una campo obligatorio",
                minlength: "Mínimo 8 caracteres",
            },
            confcontrasena: {
                required: "Repita la contraseña anterior",
                equalTo: "Debe ser igual a la contraseña anterior",
            },
        },
    });
});    


//Validador formulario de registro
$(document).ready(function () {

    //Validación para RUT chileno
    $.validator.addMethod("rutChileno", function (value, element) {
        
        value = value.replace(/[.-]/g, "");

        
        if (value.length < 8 || value.length > 9) {
            return false;
        }

        
        var validChars = "0123456789K";
        var lastChar = value.charAt(value.length - 1).toUpperCase();
        if (validChars.indexOf(lastChar) == -1) {
            return false;
        }

        
        var rut = parseInt(value.slice(0, -1), 10);
        var factor = 2;
        var sum = 0;
        var digit;
        while (rut > 0) {
            digit = rut % 10;
            sum += digit * factor;
            rut = Math.floor(rut / 10);
            factor = factor === 7 ? 2 : factor + 1;
        }
        var dv = 11 - (sum % 11);
        dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();

        
        return dv === lastChar;
    }, "Por favor ingrese un RUT válido.");

    $("#formregistro").validate({
        rules: {
            rut: {
                required: true,
                rutChileno: true,
            },
            nombres: {
                required: true,
            },
            apellidos: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            direccion: {
                required: true,
            },
            contrasena: {
                required: true,
                minlength: 8,
            },
            confcontrasena: {
                required: true,
                equalTo: "#contrasena",
            },
        },
        messages: {
            rut: {
                required: "El RUT es un campo obligatorio",
                rutChileno: "El formato del rut no es válido",
            },
            nombres: {
                required: "Su nombre es un campo obligatorio",
            },
            apellidos: {
                required: "Su apellido es un campo obligatorio",
            },
            email: {
                required: "El correo es un campo obligatorio",
                email: "El correo no cumple con el formato",
            },
            direccion: {
                required: "La dirección es un campo obligatorio"
            },
            contrasena: {
                required: "La contraseña es una campo obligatorio",
                minlength: "Mínimo 8 caracteres",
            },
            confcontrasena: {
                required: "Repita la contraseña anterior",
                equalTo: "Debe ser igual a la contraseña anterior",
            },
        },
    });
});    

// Validador formulario productos

$(document).ready(function(){

    $("#formproducto").validate({
        rules: {
            id_producto: {
                required: true,
            },
            categoria: {
                required: true,
            },
            nombre: {
                required: true,
            },
            descripcion: {
                required: true,
            },
            precio: {
                required: true,
            },
            desc_suscripcion: {
                required: true,
                min: 0
            },
            desc_oferta: {
                required: true,
                min: 0
            }
        },
        messages: {
            id_producto: {
                required: "El ID del producto es obligatorio"
            },
            categoria: {
                required: "La categoría del producto es obligatoria"
            },
            nombre: {
                required: "El nombre del producto es obligatorio"
            },
            descripcion: {
                required: "La descripción del producto es obligatoria"
            },
            precio: {
                required: "El precio del producto es obligatorio"
            },
            desc_suscripcion: {
                required: "Este es un campo obligatorio",
                min: "Mínimo valor 0"
            },
            desc_oferta: {
                required: "Este es un campo obligatorio",
                min: "Mínimo valor 0"
            },
        },
        errorPlacement: function (error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        },
    });
});

    $(document).ready(function(){

    $("#form-ingresar").validate({
        rules: {
            exampleInputEmail1: {
                required: true,
                emai: true,
            },
            exampleInputPassword1:{
                required: true,
            },
        },
        messages: {
            exampleInputEmail1: {
                required: "El correo es obligatorio",
                email: "Ingrese un correo válido",
            },
            exampleInputPassword1: {
                required: "La contraseña es obligatoria"
            },
        },
    });
});

//Validador formulario mantenedor usuarios
$(document).ready(function () {

    //Validación para RUT chileno
    $.validator.addMethod("rutChileno", function (value, element) {
        
        value = value.replace(/[.-]/g, "");

        
        if (value.length < 8 || value.length > 9) {
            return false;
        }

        
        var validChars = "0123456789K";
        var lastChar = value.charAt(value.length - 1).toUpperCase();
        if (validChars.indexOf(lastChar) == -1) {
            return false;
        }

        
        var rut = parseInt(value.slice(0, -1), 10);
        var factor = 2;
        var sum = 0;
        var digit;
        while (rut > 0) {
            digit = rut % 10;
            sum += digit * factor;
            rut = Math.floor(rut / 10);
            factor = factor === 7 ? 2 : factor + 1;
        }
        var dv = 11 - (sum % 11);
        dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();

        
        return dv === lastChar;
    }, "Por favor ingrese un RUT válido.");

    $("#formusuarios").validate({
        rules: {
            id: {
                required: true,
            },
            tipocliente: {
                required: true,
                maxlength: 2
            },
            rut: {
                required: true,
                rutChileno: true,
            },
            nombres: {
                required: true,
            },
            apellidos: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            direccion: {
                required: true,
            },
            contrasena: {
                required: true,
                minlength: 8,
            },
        },
        messages: {
            id: {
                required: "El ID es un campo obligatorio"
            },
            tipocliente: {
                required: "Debes elegir una opción",
                maxlength: "Elige solo {1} opción"
            },
            rut: {
                required: "El RUT es un campo obligatorio",
                rutChileno: "El formato del rut no es válido",
            },
            nombres: {
                required: "El nombre es un campo obligatorio",
            },
            apellidos: {
                required: "El apellido es un campo obligatorio",
            },
            email: {
                required: "El correo es un campo obligatorio",
                email: "El correo no cumple con el formato",
            },
            direccion: {
                required: "La dirección es un campo obligatorio"
            },
            contrasena: {
                required: "La contraseña es una campo obligatorio",
                minlength: "Mínimo 8 caracteres",
            },
        },
        errorPlacement: function(error,element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        }
    });
});  

// Validador formulario bodega

$(document).ready(function () {

    $("#formbodega").validate({
        rules: {
            categoria: {
                required: true,
            },
            producto: {
                required: true,
            },
            cantidad: {
                required: true,
            },
        },
        messages: {
            categoria: {
                required: "La categoría del producto es obligatoria",
            },
            producto: {
                required: "Este campo es obligatorio",
            },
            cantidad: {
                required: "Este campo es obligatorio",
            },
        },
        errorPlacement: function (error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        }
    });
});