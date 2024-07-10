document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const loginButton = document.getElementById('login');
    const signUpButton = document.getElementById('signup');

    signUpButton.addEventListener('click', () => {
        container.classList.add('panel-active');
    });

    loginButton.addEventListener('click', () => {
        container.classList.remove('panel-active');
    });
});

const errors = document.querySelectorAll('.error');

for (let i = 0; i < errors.length; i++) {
    errors[i].style.display = 'none';
}

document.getElementById('signUpForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let nomOk = true;
    let emailOk = true;
    let passwordOk = true;

    if (nom.length < 3) {
        nomOk = false;
        document.getElementById('NomError').innerText = "Le nom doit contenir au moins 3 caractères";
        document.getElementById('NomError').style.display = "block";
    }

    if (nom.length > 15) {
        nomOk = false;
        document.getElementById('NomError').innerText = "Le nom doit contenir au maximum 15 caractères";
        document.getElementById('NomError').style.display = "block";
    }

    if (!email.includes('@')) {
        emailOk = false;
        document.getElementById('EmailError').innerText = "Veuillez entrer une adresse email valide";
        document.getElementById('EmailError').style.display = "block";
    }

    if (password.length < 8 || password.length > 10) {
        passwordOk = false;
        document.getElementById('PasswordError').innerText = "Le mot de passe doit contenir entre 8 et 10 caractères";
        document.getElementById('PasswordError').style.display = "block";
    }

    if (nomOk && emailOk && passwordOk) {
        // Envoyer le formulaire
        e.target.submit(); 
        // Décommenter pour activer l'envoi du formulaire
        alert('Formulaire soumis avec succès!');
    }
});
