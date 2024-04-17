class Login {
        
        
        txtUserEmail = "input[data-qa='login-email']";
        txtUserPassword = "input[data-qa='login-password']";
        btnLogin = "button[data-qa='login-button']";
        loginVerifyMsg = "#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10)";
        loginVerifyMsgIncorrect = "#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > p";
        
            
            
            login(email, password) {
                cy.get(this.txtUserEmail).type(email)
                cy.get(this.txtUserEmail).should("have.value", "przykladowyemail@example.com")
                cy.get(this.txtUserPassword).type(password)
                cy.get(this.txtUserPassword).should("have.value", "haslo123")
                cy.get(this.btnLogin).click()
                cy.get(this.loginVerifyMsg)
                .should("be.visible")
            }

            loginIncorrect(email, password) {
                cy.get(this.txtUserEmail).type(email)
                cy.get(this.txtUserPassword).type(password)
                cy.get(this.btnLogin).click()
                cy.get(this.loginVerifyMsgIncorrect)
                .should("be.visible")
            }
        }
        
export default Login;