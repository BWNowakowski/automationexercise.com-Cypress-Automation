class DeleteAcc {
    deleteAcc() {
        cy.get("a[href='/delete_account']").click()
        cy.get("#form > div > div > div > h2").should("be.visible")
        cy.get("a[data-qa='continue-button']").click()
    }
}




export default DeleteAcc