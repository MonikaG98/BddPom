Feature: Ecommerse site: Add To Visit

    Scenario: Add to cart send delivery
        Given visit the ecomm sites
        When search the products start from "ca"
        And add "carrot" in the carts
        Then place order and select the countries and check condition
        And validate the thank you message!!



