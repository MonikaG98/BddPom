Feature: validate the Automation Practice Exercise for upload file

    Scenario: login the valid credential
        Given visit Automation Exercise site for login
        When enter User and Password
        Then click login button
        And validate the Dashboard

    Scenario: validate the upload file
        Given open the contach us page
        When add your details
        Then validate the file upload message
        
        
