Feature: Borrowing calculator functionality test

  @test
  Scenario Outline: Verify calculator provides borrowing estimate for a person with valid set of data
    Given User launches borrowing calculator application on browser
    And User fills personal details "<applicationType>", "<numberOfDependants>", "<typeOfPropertyToBuy>"
    And User fills earning details "<annualIncome>", "<otherAnnualIncome>"
    And User fills expense details like  "<monthlyLivingExpense>", "<homeLoanMonthlyRepayment>", "<otherLoanMonthlyRepayment>", "<otherMonthlyCommitment>", "<totalCreditCardLimit>"
    When User clicks on calculate button to see how much he can borrow
    Then Verify borrowing calculator provides an estimate that user can borrow and validate the estimate "<estimate>" matches

    Examples: 
      |applicationType | numberOfDependants | typeOfPropertyToBuy | annualIncome | otherAnnualIncome| monthlyLivingExpense| homeLoanMonthlyRepayment| otherLoanMonthlyRepayment|otherMonthlyCommitment| totalCreditCardLimit| estimate|
      |  Single         |    0               |     Home to live in |    80000     |    10000         |     500             |      0                  |     100                  |          0           |     10000           | 428000  |
      |  Single         |    0               |     Home to live in |    70000     |    8000          |     700             |      0                  |     100                  |          0           |     10000           | 347000  |


  @test
  Scenario Outline: Verify clicking on start over button clears the form
    Given User launches borrowing calculator application on browser
    And User fills personal details "<applicationType>", "<numberOfDependants>", "<typeOfPropertyToBuy>"
    And User fills earning details "<annualIncome>", "<otherAnnualIncome>"
    And User fills expense details like  "<monthlyLivingExpense>", "<homeLoanMonthlyRepayment>", "<otherLoanMonthlyRepayment>", "<otherMonthlyCommitment>", "<totalCreditCardLimit>"
    When User clicks on start over button
    Then Verify form gets cleared

    Examples:
      | applicationType | numberOfDependants | typeOfPropertyToBuy | annualIncome | otherAnnualIncome| monthlyLivingExpense| homeLoanMonthlyRepayment| otherLoanMonthlyRepayment|otherMonthlyCommitment| totalCreditCardLimit|
      |  Single         |    0               |     Home to live in |    80000     |    10000         |     500             |      0                  |     100                  |          0           |     10000           |


  @test
  Scenario Outline: Verify the scenario where borrowing calculator is unable to provide an estimate based on data entered by user
    Given User launches borrowing calculator application on browser
    And User fills expense details like  "<monthlyLivingExpense>", "<homeLoanMonthlyRepayment>", "<otherLoanMonthlyRepayment>", "<otherMonthlyCommitment>", "<totalCreditCardLimit>"
    When User clicks on calculate button to see how much he can borrow
    Then Verify application throws unable to estimate message

    Examples:
      | browser     | monthlyLivingExpense| homeLoanMonthlyRepayment| otherLoanMonthlyRepayment|otherMonthlyCommitment| totalCreditCardLimit|
      |  chrome     |       1             |      0                  |        0                 |          0           |       0             |
