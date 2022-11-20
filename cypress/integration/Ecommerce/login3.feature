Feature: validate the Practice Automation site on login functionality

    Scenario: login the valid credential
        Given visit Practice Automation site on login
        When enter the Username and Password
            | Username        | Password    |
            | sarika@test.com | @Minskole12 |
        Then click on submit Button
        And validate the Dashboard text

    Scenario Outline: login the valid credential for multiple credential
        Given visit Practice Automation site on login
        When enter the "<Username>" and "<Password>"
        Then click on submit Button
        And validate the Dashboard text

        Examples:
            | Username                 | Password    |
            | sarika@test.com          | @Minskole12 |
            | gosavimonika01@gmail.com | monika@123@ |
            | gauri@test.com           | 12Minskole@ |