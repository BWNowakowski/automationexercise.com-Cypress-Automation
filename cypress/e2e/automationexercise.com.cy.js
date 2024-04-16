/*
https://automationexercise.com/test_cases
*/

describe("automationexercise.com Test Suite", () => {

        beforeEach(() => {
            cy.visit("https://automationexercise.com/")
            cy.url()
                .should("eq", "https://automationexercise.com/")
            cy.get("#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(1) > a")
                .should("have.attr", "style")
        })



    it("Test Case 1: Register User", () => {
        cy.get("a[href='/login']").click()
        cy.get("div[class='signup-form'] > h2").should("have.text", "New User Signup!")
        cy.get("input[data-qa='signup-name']").type("BWNowakowski")
        cy.get("input[data-qa='signup-email']").type("przykladowyemail@example.com")
        cy.get("button[data-qa='signup-button']").click()
        cy.get("#form > div > div > div > div.login-form > h2 > b").should("be.visible")
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
        cy.get("button[data-qa='create-account").click()
        cy.get("#form > div > div > div > h2").should("be.visible")
        cy.get("a[data-qa='continue-button']").click()
        cy.get("#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10)")
        .should("contain", "Logged in as")
        // cy.get("a[href='/delete_account").click()
        // cy.get("#form > div > div > div > h2").should("be.visible")
        // cy.get("a[data-qa='continue-button']").click()
    })
    
    it("Test Case 2: Login User with correct email and password", () => {
        cy.get("a[href='/login").click()
        cy.get("div[class='login-form'] > h2").should("be.visible")
        
        cy.fixture('login').then( (data) => {
            
            cy.get("input[data-qa='login-email']").type(data.username)
            cy.get("input[data-qa='login-email']").should("have.value", "przykladowyemail@example.com")
            cy.get("input[data-qa='login-password").type(data.password)
            cy.get("input[data-qa='login-password").should("have.value", "haslo123")
            cy.get("button[data-qa='login-button']").click()
            cy.get("#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10)")
            .should("be.visible")
            cy.get("a[href='/delete_account").click()
            cy.get("#form > div > div > div > h2").should("be.visible")      
        })
    })
    
    it("Test Case 3: Login User with incorrent email and password", () => {
        cy.get("a[href='/login").click()
        cy.get("div[class='login-form'] > h2").should("be.visible")
        cy.get("input[data-qa='login-email']").type("asd@asd.pl")
        cy.get("input[data-qa='login-password").type("asd123")
        cy.get("button[data-qa='login-button']").click()
        cy.get("#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > p")
        .should("be.visible")
    })
    
    it("Test Case 4: Logout User", () => {
        cy.get("a[href='/login").click()
        cy.get("div[class='login-form'] > h2").should("be.visible")
        
        cy.fixture('login').then( (data) => {
            
            cy.get("input[data-qa='login-email']").type(data.username)
            cy.get("input[data-qa='login-email']").should("have.value", "przykladowyemail@example.com")
            cy.get("input[data-qa='login-password").type(data.password)
            cy.get("input[data-qa='login-password").should("have.value", "haslo123")
            cy.get("button[data-qa='login-button']").click()
            cy.get("#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10)")
            .should("be.visible")
            cy.get("a[href='/logout']").click()
            cy.get("div[class='login-form'] > h2").should("be.visible")
        })
    })
    
    it.only("Test Case 5: Register User with existing email", () => {
        cy.get("a[href='/login").click()
        cy.get("div[class='login-form'] > h2").should("be.visible")
        cy.get("#form > div > div > div:nth-child(3) > div > h2").should("be.visible")
        cy.get("input[data-qa='signup-name']").type("BWNowakowski")
        cy.get("input[data-qa='signup-name']").should("have.value", "BWNowakowski")
        cy.get("input[data-qa='signup-email']").type("przykladowyemail@example.com")
        cy.get("input[data-qa='signup-email']").should("have.value", "przykladowyemail@example.com")
        cy.get("button[data-qa='signup-button']").click()
        cy.get("#form > div > div > div:nth-child(3) > div > form > p").should("be.visible")
        
        
        
    })
})