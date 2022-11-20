Feature: validate the orange HRM

    Scenario: login the valid credential
        Given visit orange HRM site
        When enter the orange HRM valid Username
        And enter orange HRM valid Password
        Then click on orange HRM login Button
        And validate the orange HRM Dashboard
