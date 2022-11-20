

class HomePage {


    selector = {
        url: "https://rahulshettyacademy.com/seleniumPractise/#/",
        searchProduct: ".search-keyword",
        searchButton: ".search-button",
        productList:'h4[class="product-name"]',

    }

    visitUrl() {
        cy.visit(this.selector.url)
    }
    enterText(value) {
        cy.get(this.selector.searchProduct).type(value)
    }
    clickBtn() {
        cy.get(this.selector.searchButton).click()
    }

}

export default HomePage