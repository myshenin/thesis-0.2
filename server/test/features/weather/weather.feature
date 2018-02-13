Feature: Weather lambda

  @weather
  Scenario Outline: Get a weather data in t-SNE ready form
    Given I have location "<coordinates>" and period from "<start>" to "<end>"
    When I invoke weather lambda
    Then I get t-SNE ready weather data
    Examples:
      | coordinates                  | start      | end        |
      | 48.856614,2.3522219          | 2017-05-01 | 2017-06-01 |