class Register {
    txtUserName = "input[data-qa='signup-name']";
    txtUserEmail = "input[data-qa='signup-email']";
    btnSignup = "button[data-qa='signup-button']";
    signupVerifyMsg = "#form > div > div > div > div.login-form > h2 > b";
    // signupAlreadyExist = "#form > div > div > div:nth-child(3) > div > form > p"


    register(username, email) {
        cy.get(this.txtUserName).type(username)
        cy.get(this.txtUserEmail).type(email)
        cy.get(this.btnSignup).click()
    }

    inputFullDetails() {
        cy.get("input#id_gender1").check()
        cy.get("input#password").type("haslo123")
        cy.get("select#days").select("21")
        cy.get("select#months").select("May")
        cy.get("select#years").select("1991")
        cy.get("input#newsletter").check()
        cy.get("input#optin").check()
        cy.get("#first_name").type("Tomasz ")
        cy.get("#last_name").type("Nowicki")
        cy.get("#company").type("Firma 1")
        cy.get("#address1").type("Ptakowa")
        cy.get("#address2").type("40A")
        cy.get("#country").select("Israel")
        cy.get("#state").type("Mazowieckie")
        cy.get("#city").type("Warszawa")
        cy.get("#zipcode").type("12-345")
        cy.get("#mobile_number").type("111-222-333")
    }
}

export default Register;