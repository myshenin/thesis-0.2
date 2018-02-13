Feature: Result lambda

  @result
  Scenario Outline: Get weather data for given periods projected to t-SNE
    Given I inputted "<location>" and period "<start 1>" - "<end 1>" and period "<start 2>" - "<end 2>"
    When I make an HTTP POST request
    Then I get a response summary
    Examples:
      | location            | start 1    | end 1      | start 2    | end 2      |
      | 48.856614,2.3522219 | 2016-05-05 | 2016-06-05 | 2017-05-05 | 2017-06-05 |