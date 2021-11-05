Feature: Finishing all tests and cleanup test framework
  @CLEANUP
  Scenario: All tests are finished
    Given Close browser when all tests are finished
    When all tests are finished
    Then Close the browser
