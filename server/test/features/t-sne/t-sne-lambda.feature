Feature: t-SNE lambda
  @tsne
  Scenario: t-SNE implementing AWS Lambda gets SNS message with a multidimensional data
    Given I have a multidimensional data
    When I invoke the t-SNE implementing lambda
    Then I get a response
    And Response has 2-dimensional data