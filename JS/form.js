/* form js */

// add click event for register form
document.getElementById('registration-form-title').addEventListener('click', function(){
    // register form
    document.getElementById('register-form').style.display = 'block';

    // signIn form
    document.getElementById('signIn-form').style.display = 'none';

    // signUp form
    document.getElementById('signUp-form').style.display = 'none';
});


// add click event for signIn form
document.getElementById('signIn-form-title').addEventListener('click', function(){
    // signIn form
    document.getElementById('signIn-form').style.display = 'block';

    // register form
    document.getElementById('register-form').style.display = 'none';

    // signUp form
    document.getElementById('signUp-form').style.display = 'none';
});


// add click event for signUp form
document.getElementById('signUp-form-title').addEventListener('click', function(){
    // signUp form
    document.getElementById('signUp-form').style.display = 'block';

    // register form
    document.getElementById('register-form').style.display = 'none';

    // signIn form
    document.getElementById('signIn-form').style.display = 'none';
});