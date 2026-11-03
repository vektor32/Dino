
var nemJo = false
var felhasznalo
document.querySelector(".login").addEventListener('click', () => {
    var keresztNev = document.querySelector(".validationCustom01").value
    var vezetekNev = document.querySelector(".validationCustom02").value
    var felhasznaloNev = document.querySelector(".validationCustomUsername").value
    var email = document.querySelector(".validationCustom03").value

    felhasznalo = new Felhasznalo(keresztNev, vezetekNev, felhasznaloNev, email)

    var kereszt = ((felhasznalo.getKeresztNev()) ? true : false)
    var vezetek = ((felhasznalo.getVezetekNev()) ? true : false)
    var felhNev = ((felhasznalo.getFelhasznaloNev()) ? true : false)
    var emailHelyes = ((felhasznalo.getEmail()) ? true : false)

    if (kereszt) {
        document.querySelector(".validationCustom01").classList.add("is-valid")
        document.querySelector(".validationCustom01").classList.remove("is-invalid")

        document.querySelector(".valid-feedback .keresztNev").innerHTML = "Helyes adat!"
        document.querySelector(".invalid-feedback .keresztNev").innerHTML = ""
    } else {
        document.querySelector(".validationCustom01").classList.remove("is-valid")
        document.querySelector(".validationCustom01").classList.add("is-invalid")

        document.querySelector(".invalid-feedback .keresztNev").innerHTML = "Helytelen adat, minimum 3 karakter, az első nagybetű! Pl: Otto"
        document.querySelector(".valid-feedback .keresztNev").innerHTML = ""
    }

    if (vezetek) {
        document.querySelector(".validationCustom02").classList.add("is-valid")
        document.querySelector(".validationCustom02").classList.remove("is-invalid")

        document.querySelector(".valid-feedback .vezetekNev").innerHTML = "Helyes adat!"
        document.querySelector(".invalid-feedback .vezetekNev").innerHTML = ""
    } else {
        document.querySelector(".validationCustom02").classList.remove("is-valid")
        document.querySelector(".validationCustom02").classList.add("is-invalid")

        document.querySelector(".invalid-feedback .vezetekNev").innerHTML = "Helytelen adat, minimum 3 karakter, az első nagybetű! Pl: Mark"
        document.querySelector(".valid-feedback .vezetekNev").innerHTML = ""
    }

    if (felhNev) {
        document.querySelector(".validationCustomUsername").classList.add("is-valid")
        document.querySelector(".validationCustomUsername").classList.remove("is-invalid")

        document.querySelector(".valid-feedback .felhasznaloNev").innerHTML = "Helyes adat!"
        document.querySelector(".invalid-feedback .felhasznaloNev").innerHTML = ""
    } else {
        document.querySelector(".validationCustomUsername").classList.remove("is-valid")
        document.querySelector(".validationCustomUsername").classList.add("is-invalid")

        document.querySelector(".invalid-feedback .felhasznaloNev").innerHTML = "Helytelen adat, minimum 2 karakter! Pl: Mo"
        document.querySelector(".valid-feedback .felhasznaloNev").innerHTML = ""
    }

    if (emailHelyes) {
        document.querySelector(".validationCustom03").classList.add("is-valid")
        document.querySelector(".validationCustom03").classList.remove("is-invalid")

        document.querySelector(".valid-feedback .emailCim").innerHTML = "Helyes adat!"
        document.querySelector(".invalid-feedback .emailCim").innerHTML = ""
    } else {
        document.querySelector(".validationCustom03").classList.remove("is-valid")
        document.querySelector(".validationCustom03").classList.add("is-invalid")

        document.querySelector(".invalid-feedback .emailCim").innerHTML = "Helytelen adat! Pl: mark.otto@gmail.com"
        document.querySelector(".valid-feedback .emailCim").innerHTML = ""
    }

    nemJo = ((kereszt && vezetek && felhNev && emailHelyes) ? true : false)

    if (nemJo) {
        alert("Sikeres be jelentkezés!")
        var modalElem = document.querySelector("#exampleModal")
        var modal = bootstrap.Modal.getInstance(modalElem)
        modal.hide()
    } else {
        alert("Ellenörizze az üzeneteket")
    }
})

/*
var felhasznalo = null;

document.querySelector(".login").addEventListener("click", function () {

    var keresztNev = document.querySelector(".validationCustom01").value;
    var vezetekNev = document.querySelector(".validationCustom02").value;
    var felhasznaloNev = document.querySelector(".validationCustomUsername").value;
    var email = document.querySelector(".validationCustom03").value;

    felhasznalo = new Felhasznalo(
        keresztNev,
        vezetekNev,
        felhasznaloNev,
        email
    );

    // 3. Ellenőrizzük, hogy helyesek-e az adatok.
    var keresztNevJo = !!felhasznalo.getKeresztNev();
    var vezetekNevJo = !!felhasznalo.getVezetekNev();
    var felhasznaloNevJo = !!felhasznalo.getFelhasznaloNev();
    var emailJo = !!felhasznalo.getEmail();

    // 4. Keresztnév ellenőrzése.
    var keresztNevMezo = document.querySelector(".validationCustom01");

    keresztNevMezo.classList.toggle("is-valid", keresztNevJo);
    keresztNevMezo.classList.toggle("is-invalid", !keresztNevJo);

    if (keresztNevJo) {
        document.querySelector(".valid-feedback .keresztNev").innerHTML = "Helyes adat!";
        document.querySelector(".invalid-feedback .keresztNev").innerHTML = "";
    } else {
        document.querySelector(".invalid-feedback .keresztNev").innerHTML =
            "Helytelen adat! Legalább 3 karakter legyen, és nagybetűvel kezdődjön.";

        document.querySelector(".valid-feedback .keresztNev").innerHTML = "";
    }

    // 5. Vezetéknév ellenőrzése.
    var vezetekNevMezo = document.querySelector(".validationCustom02");

    vezetekNevMezo.classList.toggle("is-valid", vezetekNevJo);
    vezetekNevMezo.classList.toggle("is-invalid", !vezetekNevJo);

    if (vezetekNevJo) {
        document.querySelector(".valid-feedback .vezetekNev").innerHTML = "Helyes adat!";
        document.querySelector(".invalid-feedback .vezetekNev").innerHTML = "";
    } else {
        document.querySelector(".invalid-feedback .vezetekNev").innerHTML =
            "Helytelen adat! Legalább 3 karakter legyen, és nagybetűvel kezdődjön.";

        document.querySelector(".valid-feedback .vezetekNev").innerHTML = "";
    }

    // 6. Felhasználónév ellenőrzése.
    var felhasznaloNevMezo = document.querySelector(".validationCustomUsername");

    felhasznaloNevMezo.classList.toggle("is-valid", felhasznaloNevJo);
    felhasznaloNevMezo.classList.toggle("is-invalid", !felhasznaloNevJo);

    if (felhasznaloNevJo) {
        document.querySelector(".valid-feedback .felhasznaloNev").innerHTML = "Helyes adat!";
        document.querySelector(".invalid-feedback .felhasznaloNev").innerHTML = "";
    } else {
        document.querySelector(".invalid-feedback .felhasznaloNev").innerHTML =
            "Helytelen adat! A felhasználónév legalább 2 karakter legyen.";

        document.querySelector(".valid-feedback .felhasznaloNev").innerHTML = "";
    }

    // 7. Email-cím ellenőrzése.
    var emailMezo = document.querySelector(".validationCustom03");

    emailMezo.classList.toggle("is-valid", emailJo);
    emailMezo.classList.toggle("is-invalid", !emailJo);

    if (emailJo) {
        document.querySelector(".valid-feedback .emailCim").innerHTML = "Helyes email-cím!";
        document.querySelector(".invalid-feedback .emailCim").innerHTML = "";
    } else {
        document.querySelector(".invalid-feedback .emailCim").innerHTML =
            "Helytelen email-cím! Például: nev@gmail.com";

        document.querySelector(".valid-feedback .emailCim").innerHTML = "";
    }

    // 8. Megnézzük, hogy minden adat helyes-e.
    var mindenAdatJo =
        keresztNevJo &&
        vezetekNevJo &&
        felhasznaloNevJo &&
        emailJo;

    // 9. Sikeres vagy sikertelen bejelentkezés.
    if (mindenAdatJo) {
        alert("Sikeres bejelentkezés!\n\n" + felhasznalo.toString());
    } else {
        alert("Hibás adatok! Kérlek, ellenőrizd a pirossal jelölt mezőket.");
    }

});*/