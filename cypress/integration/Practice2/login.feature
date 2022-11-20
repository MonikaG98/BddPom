Feature: validate the login functionality

  #valid
  Scenario: Login the valid credential
    Given visit practice automation site
    When enter the Valid Username
    And enter the Valid Password
    Then click on Submit Button
    And Validate the Dashboard

  #invalid
  Scenario: Login the invalid credential
    Given visit practice automation site
    When Enter the invalid Username
    And Enter the invalid Password
    Then click on Submit Button
    And Validate the Error