/*
https://automationexercise.com/test_cases
*/

import VisitHomeValid from "../PageObjects/VisitHomeValid";
import Login from "../PageObjects/LoginCorrect";
import Register from "../PageObjects/Register";
import DeleteAcc from "../PageObjects/DeleteAcc";
import AddingToCart from "../PageObjects/AddingToCart";
import PaymentDetails from "../PageObjects/PaymentDetails";

describe("automationexercise.com Test Suite", () => {

        beforeEach(() => {
            const visit = new VisitHomeValid();
            visit.visitHomeValid()
        })



    it("Test Case 1: Register User", () => {
        cy.get("a[href='/login']").click()
        cy.get("div[class='signup-form'] > h2").should("have.text", "New User Signup!")

        cy.fixture("user").then( (data) => {
            const signup = new Register();
            signup.register(data.username, data.email)
            signup.inputFullDetails()
        })


        cy.get("button[data-qa='create-account").click()
        cy.get("#form > div > div > div > h2").should("be.visible")
        cy.get("a[data-qa='continue-button']").click()
        //By css selectors
        // cy.get("#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10)")
        // Using XPath to find an element
        cy.xpath("//header[@id='header']//ul[contains(@class,'nav')]/li/a[contains(text(),'Logged in as')]")
            .should("contain", "Logged in as")
            // const deleteAcc = new DeleteAcc()
            // deleteAcc.deleteAcc()
    })



    
    it("Test Case 2: Login User with correct email and password", () => {
        cy.get("a[href='/login']").click()
        cy.get("div[class='login-form'] > h2").should("be.visible")
        
        cy.fixture("user").then( data => {    
            const login = new Login();
            login.login(data.email, data.password)
        })
    })



    
    it("Test Case 3: Login User with incorrent email and password", () => {
        cy.get("a[href='/login").click()
        cy.get("div[class='login-form'] > h2").should("be.visible")
        cy.fixture("user").then( data => {    
            const login = new Login();
            login.loginIncorrect("asd@asd.pl", "asd")

        })
    })



    
    it("Test Case 4: Logout User", () => {
        cy.get("a[href='/login").click()
        cy.get("div[class='login-form'] > h2").should("be.visible")
        
        cy.fixture('login').then( (data) => {
            const login = new Login();
            login.login(data.email, data.password)
            cy.get("a[href='/logout']").click()
            cy.get("div[class='login-form'] > h2").should("be.visible")
        })
    })



    
    it("Test Case 5: Register User with existing email", () => {
        cy.get("a[href='/login").click()
        cy.get("div[class='login-form'] > h2").should("be.visible")
        cy.get("#form > div > div > div:nth-child(3) > div > h2").should("be.visible")
        cy.fixture("user").then( (data) => {
            const signup = new Register()
            signup.register(data.username, data.email)
        })
        cy.get("#form > div > div > div:nth-child(3) > div > form > p").should("be.visible")
    })




    it("Test Case 6: Contact Us Form", () => {
        cy.get("a[href='/contact_us']").click()
        cy.get("#contact-page > div.row > div.col-sm-8 > div > h2")
            .should("be.visible")
            .should("have.text", "Get In Touch")
        cy.get("input[data-qa='name']").type("Piotrek")
        cy.get("input[data-qa='email']").type("przykladowyemail@example.com")
        cy.get("input[data-qa='subject']").type("Nie podoba mi sie")
        cy.get("textarea#message").type("Strasznie mi sie nie podoba mega skarga")
        cy.get("input[name='upload_file']").attachFile("IMG_5329")
        cy.get("input[data-qa='submit-button").click()
        cy.get("div.status.alert.alert-success").should("be.visible")
        cy.get("#form-section > a").click()
        cy.get("#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(1) > a")
        .should("have.attr", "style")
    })




    it("Test Case 7: Verify Test Cases Page", () => {
        cy.get("a[href='/test_cases'] > i").click()
        cy.get("#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(5) > a")
        .should("have.attr", "style")
    })


    

    it("Test Case 8: Verify All Products and product detail page", () => {
        cy.get("a[href='/products']").click()
        cy.get("h2.title.text-center").should("be.visible")
        cy.get("div.features_items").should("be.visible")
        cy.get("a[href='/product_details/1").click()
        cy.url().should("eq", "https://automationexercise.com/product_details/1")
        cy.get("div.product-information")
            .should("be.visible")

        // cy.get("div.product-information").within( () => {
            // cy.get("h2").should("exist")
            // cy.get("p:nth-child(3)").should("exist").should("contain", "Category:")
            // cy.get("").should("contain", "Rs.")
            // cy.get("p:nth-child(6)").should("exist").should("contain", "Availability:")
            // cy.get("p:nth-child(7)").should("exist").should("contain", "Condition:")
        // })
    })




    it("Test Case 9: Search Product", () => {
        cy.get("a[href='/products']").click()
        cy.get("h2.title.text-center").should("be.visible")
        cy.get("#search_product").type("Tshirt")
        cy.get("#submit_search").click()
        cy.get("body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > h2")
            .should("be.visible")
            .should("have.text", "Searched Products")
        cy.get("body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(3)")
            .should("be.visible")
    })




    it("Test Case 10: Verify Subscription in home page", () => {
        cy.get("#footer").scrollIntoView({duration:2000})
        cy.get("#footer > div.footer-widget > div > div > div.col-sm-3.col-sm-offset-1 > div > h2")
            .should("be.visible")
            .should("have.text", "Subscription")
            
            cy.fixture("user").then( (data) => {
                cy.get("#susbscribe_email").type(data.email)
            })
            cy.get("#subscribe").click()
            cy.get("#success-subscribe > div").should("be.visible")
        })
        
        
        
        
        it("Test Case 11: Verify Subscription in Cart page", () => {
            cy.get("a[href='/view_cart'] > i").click()
            cy.get("#footer > div.footer-widget > div > div > div.col-sm-3.col-sm-offset-1 > div > h2")
                .should("be.visible")
                .should("have.text", "Subscription")
            cy.fixture("user").then( (data) => {
                cy.get("#susbscribe_email").type(data.email)
            })
            cy.get("#subscribe").click()
            cy.get("#success-subscribe > div").should("be.visible")
    })





    it("Test Case 12: Add Products in Cart", () => {
        cy.get("a[href='/products']").click()
        cy.get("div#cartModal > div:nth-child(1)").trigger("mouseover", {force: true})
        cy.get("div.col-sm-4 > div > div > div.product-overlay > div > a[data-product-id='1']")
            .click( {force: true})
        cy.get("button.btn.btn-success.close-modal.btn-block")
            .click()
        cy.get("div.col-sm-4 > div > div > div.product-overlay > div > a[data-product-id='2']")
            .click( {force: true})
        cy.get("div.modal-body > p.text-center > a[href='/view_cart']")
            .click()
        cy.get("#product-1")
            .should("be.visible")
            .within( () => {
                cy.get("td").eq(2).should("contain", "Rs.")
                cy.get("td").eq(3).should("contain", "1")
                cy.get("td").eq(4).should("contain", "Rs.")
        })
        cy.get("#product-2")
            .should("be.visible")
            .within( () => {
                cy.get("td").eq(2).should("contain", "Rs.")
                cy.get("td").eq(3).should("contain", "1")
                cy.get("td").eq(4).should("contain", "Rs.")
        })
    })




    it("Test Case 13: Verify Product quantity in Cart", () => {
        cy.get("a[href='/product_details/1']").click()
        cy.url()
            .should("eq", "https://automationexercise.com/product_details/1")
        cy.get("input#quantity")
            .clear()
            .type("4")
        cy.get("button.btn.btn-default.cart")
            .click()
        cy.get("div.modal-body > p.text-center > a[href='/view_cart']")
            .click()
        cy.get("#product-1")
            .should("be.visible")
            .within( () => {
            cy.get("td").eq(3).should("contain", "4")
        })
    })




    it("Test Case 14: Place Order: Register while Checkout", () => {
        cy.get("a[href='/products']").click()
        cy.get("div#cartModal > div:nth-child(1)").trigger("mouseover", {force: true})
        cy.get("div.col-sm-4 > div > div > div.product-overlay > div > a[data-product-id='1']")
            .click( {force: true})
        cy.get("button.btn.btn-success.close-modal.btn-block")
            .click()
        cy.get("div.col-sm-4 > div > div > div.product-overlay > div > a[data-product-id='2']")
            .click( {force: true})
        cy.get("div.modal-body > p.text-center > a[href='/view_cart']")
            .click()
        cy.get("a[href='/view_cart']")
            .should("have.attr", "style")
        cy.get("a.btn.btn-default.check_out").click()
        cy.get("#checkoutModal > div > div > div.modal-body > p:nth-child(2) > a").click()
        cy.fixture("user").then( (data) => {
            const signup = new Register()
            signup.register(data.username, data.email)
            signup.inputFullDetails()
        })
        cy.get("button[data-qa='create-account").click()
        cy.get("#form > div > div > div > h2").should("be.visible")
        cy.get("a[data-qa='continue-button").click()
        cy.xpath("//header[@id='header']//ul[contains(@class,'nav')]/li/a[contains(text(),'Logged in as')]")
        .should("contain", "Logged in as")
        cy.get("a[href='/view_cart'] > i").click()
        cy.get("a.btn.btn-default.check_out").click()
        //verify address details and review your order??? comparing to the data used earlier
        // cy.get("li.address_firstname.address_lastname").should("eq", "Mr. Tomasz Nowicki")???
        cy.get("textarea[class='form-control']").type("Message for the box")
        cy.get("a[href='/payment']").click()
        cy.get("input[data-qa='name-on-card']").type("BWNowakowski")
        cy.get("input[data-qa='card-number']").type("123123123123123")
        cy.get("input[data-qa='cvc']").type("123")
        cy.get("input[data-qa='expiry-month']").type("05")
        cy.get("input[data-qa='expiry-year']").type("2025")
        cy.get("#submit").click()
        //verifying msg that disappers??????
        // cy.get("#body").contains("Your order has been placed successfully!").should("exist")
        const deleteAcc = new DeleteAcc()
        deleteAcc.deleteAcc()
    })




    it("Test Case 15: Place Order: Register before Checkout", () => {
        cy.get("a[href='/login").click()
        cy.fixture("user").then( (data) => {
            const signup = new Register()
            signup.register(data.username, data.email)
            signup.inputFullDetails()
        })
        cy.get("button[data-qa='create-account").click()
        cy.get("#form > div > div > div > h2").should("be.visible")
        cy.get("a[data-qa='continue-button']").click()
        cy.xpath("//header[@id='header']//ul[contains(@class,'nav')]/li/a[contains(text(),'Logged in as')]")
        .should("contain", "Logged in as")
        cy.get("a[href='/products']").click()
        cy.get("div#cartModal > div:nth-child(1)").trigger("mouseover", {force: true})
        cy.get("div.col-sm-4 > div > div > div.product-overlay > div > a[data-product-id='1']")
            .click( {force: true})
        cy.get("button.btn.btn-success.close-modal.btn-block")
            .click()
        cy.get("div.col-sm-4 > div > div > div.product-overlay > div > a[data-product-id='2']")
            .click( {force: true})
        cy.get("div.modal-body > p.text-center > a[href='/view_cart']")
            .click()
        cy.get("li[class='active']").should("have.text", "Shopping Cart")
        cy.get("a.btn.btn-default.check_out").click()
        //verify address details and review your order??? comparing to the data used earlier
        // cy.get("li.address_firstname.address_lastname").should("eq", "Mr. Tomasz Nowicki")???
        cy.get("textarea[class='form-control']").type("Message for the box")
        cy.get("a[href='/payment']").click()
        cy.get("input[data-qa='name-on-card']").type("BWNowakowski")
        cy.get("input[data-qa='card-number']").type("123123123123123")
        cy.get("input[data-qa='cvc']").type("123")
        cy.get("input[data-qa='expiry-month']").type("05")
        cy.get("input[data-qa='expiry-year']").type("2025")
        cy.get("#submit").click()
        //verifying msg that disappers??????
        // cy.get("#body").contains("Your order has been placed successfully!").should("exist")
        const deleteAcc = new DeleteAcc()
        deleteAcc.deleteAcc()
    })




    it("Test Case 16: Place Order: Login before Checkout", () => {
        cy.get("a[href='/login']").click()
        cy.fixture("user").then( data => {    
            const login = new Login();
            login.login(data.email, data.password)
        })
        const addingToCart = new AddingToCart()
        addingToCart.addingToCart()
        cy.get("div.modal-body > p.text-center > a[href='/view_cart']")
        .click()
        cy.get("li[class='active']").should("have.text", "Shopping Cart")
        cy.get("a.btn.btn-default.check_out").click()
        //verify address details and review your order
        cy.get("textarea[class='form-control']").type("Message for the box")
        cy.get("a[href='/payment']").click()
        const paymentDetails = new PaymentDetails()
        paymentDetails.paymentDetails()
        //verifying msg that disappers??????
        // cy.get("#body").contains("Your order has been placed successfully!").should("exist")
        const deleteAcc = new DeleteAcc()
        deleteAcc.deleteAcc()
    })



    it("Test Case 17: Remove Products From Cart", () => {
        const addingToCart = new AddingToCart()
        addingToCart.addingToCart()
        cy.get("div.modal-body > p.text-center > a[href='/view_cart']")
        .click()
        cy.get("li[class='active']").should("have.text", "Shopping Cart")
        cy.get("#product-1 > td.cart_delete > a").click()
        cy.get("#product-1").should("not.exist")
    })



    it("Test Case 18: View Category Products", () => {
        cy.get("#accordian").should("be.visible")
        cy.get("a[href='#Women']").click()
        cy.get("a[href='/category_products/1']").click()
        cy.get("h2.title.text-center").should("have.text", "Women - Dress Products")
        cy.get("a[href='#Men']").click()
        cy.get("a[href='/category_products/3']").click()
        cy.get("h2.title.text-center").should("have.text", "Men - Tshirts Products")
    })



    it("Test Case 19: View and Cart Brand Products", () => {
        cy.get("a[href='/products']").click()
        cy.get("div.brands-name").should("be.visible")
        cy.get("a[href='/brand_products/H&M']").click()
        cy.get("h2.title.text-center").should("have.text", "Brand - H&M Products")
        cy.get("div.features_items").should("be.visible")
        cy.get("a[href='/brand_products/Biba']").click()
        cy.get("h2.title.text-center").should("have.text", "Brand - Biba Products")
        cy.get("div.features_items").should("be.visible")
    })




    it("Test Case 20: Search Products and Verify Cart After Login", () => {
        cy.get("a[href='/products']").click()
        cy.get("h2.title.text-center").should("have.text", "All Products")
        cy.get("#search_product").type("Top")
        cy.get("#submit_search").click()
        cy.get("h2.title.text-center").should("have.text", "Searched Products")

        // GENERATED BY CHAT GPT

        cy.get("div.col-sm-4 > div > div > div.product-overlay > div > a").then(($links) => {
            const numClicked = $links.length;
          
            // Click on each link
            $links.each((index, $el) => {
              cy.wrap($el).click({ force: true });
              
              // Handle the popup window
              cy.get('div.modal-content').within(() => {
                cy.get('button.btn.btn-success.close-modal.btn-block').click()
              })
            });
          
            // Click on the "View Cart" link
            cy.get("a[href='/view_cart'] > i").click();
          
            // Assert that the number of <tr> elements in the cart table equals the number of elements clicked
            cy.get("#cart_info_table > tbody > tr").should('have.length', numClicked);
            
            // GENERATED BY CHAT GPT

            cy.get("a[href='/login'] > i").click()
            cy.fixture("user").then( data => {    
                const login = new Login();
                login.login(data.email, data.password)
            })
            cy.get("a[href='/view_cart'] > i").click();
            cy.get("#cart_info_table > tbody > tr").should('have.length', numClicked);
        })
    })




    it.only("Test Case 21: Add review on product", () => {
        cy.get("a[href='/products']").click()
        cy.get("h2.title.text-center").should("have.text", "All Products")
        cy.get("a[href='/product_details/1']").click()
        cy.get("div.category-tab.shop-details-tab").should("be.visible")
        cy.get("#name").type("Imie")
        cy.get("#email").type("asd@asd.pl")
        cy.get("#review").type("Product review")
        cy.get("#button-review").click()
        cy.get("div.alert-success.alert > span").should("have.text", "Thank you for your review.")
    })
})