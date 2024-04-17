class VisitHomeValid {
    pageURL = "https://automationexercise.com/"
    homeButton = "#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(1) > a"

    visitHomeValid() {
        cy.visit(this.pageURL)
        cy.url()
            .should("eq", this.pageURL)
        cy.get(this.homeButton)
            .should("have.attr", "style")
    }
}

export default VisitHomeValid;