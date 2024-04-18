class AddingToCart {
    addingToCart() {
        cy.get("a[href='/products']").click()
        cy.get("div#cartModal > div:nth-child(1)").trigger("mouseover", {force: true})
        cy.get("div.col-sm-4 > div > div > div.product-overlay > div > a[data-product-id='1']")
            .click( {force: true})
        cy.get("button.btn.btn-success.close-modal.btn-block")
            .click()
        cy.get("div.col-sm-4 > div > div > div.product-overlay > div > a[data-product-id='2']")
            .click( {force: true})
    }
}

export default AddingToCart