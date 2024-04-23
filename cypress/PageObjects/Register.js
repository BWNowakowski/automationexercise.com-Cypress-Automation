class Register {
    txtUserName = "input[data-qa='signup-name']";
    txtUserEmail = "input[data-qa='signup-email']";
    btnSignup = "button[data-qa='signup-button']";
    signupVerifyMsg = "#form > div > div > div > div.login-form > h2 > b";
    password = "haslo123";
    firstName = "Tomasz"
    lastName = "Nowicki"
    company = "Firma 1"
    address1 = "Ptakowa"
    address2 = "40A"
    country = "Israel"
    city = "Warszawa"

    register(username, email) {
        cy.get(this.txtUserName).type(username)
        cy.get(this.txtUserEmail).type(email)
        cy.get(this.btnSignup).click()
    }

    inputFullDetails() {
        cy.get("input#id_gender1").check()
        cy.get("input#password").type(this.password)
        cy.get("select#days").select("21")
        cy.get("select#months").select("May")
        cy.get("select#years").select("1991")
        cy.get("input#newsletter").check()
        cy.get("input#optin").check()
        cy.get("#first_name").type(this.firstName)
        cy.get("#last_name").type(this.lastName)
        cy.get("#company").type(this.company)
        cy.get("#address1").type(this.address1)
        cy.get("#address2").type(this.address2)
        cy.get("#country").select(this.country)
        cy.get("#state").type("Mazowieckie")
        cy.get("#city").type(this.city)
        cy.get("#zipcode").type("12-345")
        cy.get("#mobile_number").type("111-222-333")
    }
}

export default Register;