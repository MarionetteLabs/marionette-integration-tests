Feature: Todo MVC
  Background:
    Given I view the todo list

  Scenario: creating a todo
    When I create the following todos:
      | name          |
      | go see a doge |
    Then I should see the following todos:
      | name          |
      | go see a doge |

  Scenario: deleting a todo
    When I create the following todos:
      | name          |
      | go see a doge |
    And I delete the "go see a doge todo"
    Then I should see the following todos:
      | name          |
