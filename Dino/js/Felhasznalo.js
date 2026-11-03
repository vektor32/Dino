class Felhasznalo {
    #vezetekNev
    #keresztNev
    #felhasznaloNev
    #email
    #pontszam
    constructor(keresztNev, vezetekNev, felhasznaloNev, email) {
        this.setKeresztNev(keresztNev)
        this.setVezetekNev(vezetekNev)
        this.setFelhasznaloNev(felhasznaloNev)
        this.setEmail(email)
        this.setPontszam()
    }
    setVezetekNev(vezetekNev) {
        if (vezetekNev.trim().length >= 3  && vezetekNev.charAt(0) == vezetekNev.charAt(0).toUpperCase()) {
            this.#vezetekNev = vezetekNev.trim()
            return true
        }
        return false
    }
    setKeresztNev(keresztNev) {
        if (keresztNev.trim().length >= 3  && keresztNev.charAt(0) == keresztNev.charAt(0).toUpperCase()) {
            this.#keresztNev = keresztNev.trim()
            return true
        }
        return false
    }
    setFelhasznaloNev(felhasznaloNev) {
        if (felhasznaloNev.trim().length >= 2) {
            this.#felhasznaloNev = felhasznaloNev.trim()
            return true
        }
        return false
    }
    setEmail(emailja) {
        var email = emailja.trim()
        var kukac = email.indexOf("@")
        var pont = email.lastIndexOf(".")

        for (let i = 0; i < email.length; i++) {
            if((email[i] < 'a' || email[i] > 'z') && (email[i] < '0' || email[i] > '9') && email[i] != '@' && email[i] != '.'){
                return false
            }
        }
        if (kukac > 0 && pont > kukac + 1 && pont < email.length - 1) {
            this.#email = email
            return true
        }

        return false
    }
    setPontszam() {
        this.#pontszam = 0
    }
    getVezetekNev() {
        return this.#vezetekNev
    }
    getKeresztNev() {
        return this.#keresztNev
    }
    getFelhasznaloNev() {
        return this.#felhasznaloNev
    }
    getEmail() {
        return this.#email
    }
    getPontszam() {
        return this.#pontszam
    }
    toString() {
        return "Kereszt név:" + this.getKeresztNev() + ", Vezeték név: " + this.getVezetekNev() + ", Felhasználó név: " + this.getFelhasznaloNev() + ", email: " + this.getEmail()
    }
}


