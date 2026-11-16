
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
        var modalElem = document.querySelector("#exampleModal")
        var modal = bootstrap.Modal.getInstance(modalElem)
        modal.hide()
    } else {
        alert("Ellenörizze az üzeneteket")
    }
})