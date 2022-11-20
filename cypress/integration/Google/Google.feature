Feature: Google/Flipcart Main Page

  I want to open a search engine
  
   Scenario: Opening a search engine page
    Given I open Google page
    Then I see "Google" in the title

    Scenario: Opening a youtube home page
    Given I open youtube home page
    Then I see "YouTube" in the title
