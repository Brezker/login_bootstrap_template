function valid_all() {
    //Mail
    var check_mail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var valid_mail=check_mail.test(document.f_log.f_mail.value);

    if(document.f_log.f_mail.value=="") {
        alert("Email obligatorio.");
        document.f_log.f_mail.focus();
    } else if(valid_mail==true) {
        //Pass
        var check_pass=/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040\^<>()\[\]\\.,;:\s@"\_-])(?=.*[A-Z])(?=.*[a-z])\S{8,8}$/;
        var valid_pass=check_pass.test(document.f_log.f_pass.value);
        
        if(document.f_log.f_pass.value=="") {
            alert("Contraseña obligatoria.");
            document.f_log.f_mail.focus();
        } else if(valid_pass==true) {
            //Same time
            if(document.f_log.f_mail.value=="julirolop10@gamil.com" && document.f_log.f_pass.value=="Juli$321") {
                alert("Bienvenido, iniciaste sesión.");
            } else {
                alert("Usuario y/o contraseña inválida(s)");
            }
        } else {
            alert("Formato de contraseña inválido, intente de nuevo.");
        }
    }else if (valid_mail==false) {
        alert('Email "' + document.f_log.f_mail.value + '" invalido');
    }
    return false;
}
