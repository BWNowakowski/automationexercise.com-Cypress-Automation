class Login {

    txtUserEmail = "input[data-qa='login-email']";
    txtUserPassword = "input[data-qa='login-password']";
    btnLogin = "button[data-qa='login-button']";
    loginVerifyMsg = "#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10)";


    setUserName(username) {
        cy.get(this.txtUserName).type(username)
    }

    setPassword(password) {
        cy.get(this.txtPassword).type(password)
    }

    clickSubmit() {
        cy.get(this.btnLogin).click()
    }

    verifyLogin () {
        cy.get(this.loginVerifyMsg)
            .should("be.visible")
    }
}

export default Login;