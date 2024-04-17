class Register {
    txtUserName = "input[data-qa='signup-name']";
    txtUserEmail = "input[data-qa='signup-email']";
    btnSignup = "button[data-qa='signup-button']";
    signupVerifyMsg = "#form > div > div > div > div.login-form > h2 > b";
    signupAlreadyExist = "#form > div > div > div:nth-child(3) > div > form > p"


    register(username, email) {
        cy.get(this.txtUserName).type(username)
        cy.get(this.txtUserEmail).type(email)
        cy.get(this.btnSignup).click()
        cy.get(this.signupAlreadyExist).should("be.visible")
    }
}

export default Register;