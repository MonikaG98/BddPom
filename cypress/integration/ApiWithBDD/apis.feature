Feature: Regress Api

    Scenario: Get User via api
        Given user send Get Request to retrieve multiple users
        Then User list should be display

    Scenario Outline: Create User
        Given user send Post Request to retrieve multiple users with "<name>" and "<job>"
        Then user should be Created with "<name>" and "<job>"
        Examples:
            | name      | job                   |
            | monika    | software engineer     |
            | poonam    | E & tc                |
            | pratiksha | software Developement |

    Scenario Outline: Update User
        Given user send Put Request to Update multiple users with "<name>" and "<job>"
        Then user should be Updated with "<name>" and "<job>"
        Examples:
            | name      | job                   |
            | monika    | software Developement |
            | poonam    | electronic            |
            | pratiksha | mechanical            |