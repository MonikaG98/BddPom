export default class GenericMethod {

    static visitUrl(url) {
        cy.visit(url)
    }
    static type(element, value) {
        cy.get(element).type(value)
    }
    static click(element) {
        cy.get(element).click()
    }
    static visible(element){
    cy.contains(element).should('be.visible')
    }
    static attchFile1(element,path){
        cy.get(element).attachFile(path)
    }
    static validtext(element,text){
        cy.get(element).should('have.text',text)
    }
}