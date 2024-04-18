class PaymentDetails {
    paymentDetails() {
        cy.get("input[data-qa='name-on-card']").type("BWNowakowski")
        cy.get("input[data-qa='card-number']").type("123123123123123")
        cy.get("input[data-qa='cvc']").type("123")
        cy.get("input[data-qa='expiry-month']").type("05")
        cy.get("input[data-qa='expiry-year']").type("2025")
        cy.get("#submit").click()
    }
}

export default PaymentDetails