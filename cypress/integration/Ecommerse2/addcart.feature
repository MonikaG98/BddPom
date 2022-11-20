Feature: Ecommerse site: Add To Visit

    Scenario: Add to cart send delivery
        Given visit the ecomm site
        When search the product start from "ca"
        And add "carrot" in the cart
        Then place order and select the country and check condition
        And validate the thank you message

    Scenario: Add to cart send delivery
        Given visit the ecomm site
        When search the product start from "br"
        And add "Brocoli" in the cart
        Then place order and select the country and check condition
        And validate the thank you message

    Scenario: Add to cart send delivery
        Given visit the ecomm site
        When search the product start from "wa"
        And add "Walnuts " in the cart
        Then place order and select the country and check condition
        And validate the thank you message


