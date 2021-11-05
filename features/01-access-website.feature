Feature: Search github on google.com

  @UI
  Scenario: access www.google.com
    Given When I open browser and go to www.google.com
    When Website is loaded and input[name=q] is loaded
    Then I search for "github"

  @UI
  Scenario: See the result from previous search for github website
    Given Find github website on search result
    When Search results loaded
    Then the first link must be "github"

