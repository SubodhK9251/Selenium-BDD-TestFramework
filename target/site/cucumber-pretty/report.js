$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/calculator/borrowingCalculatorTests/Features/SampleTest.feature");
formatter.feature({
  "line": 1,
  "name": "Borrowing calculator functionality test",
  "description": "",
  "id": "borrowing-calculator-functionality-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify calculator provides borrowing estimate for a person with valid set of data",
  "description": "",
  "id": "borrowing-calculator-functionality-test;verify-calculator-provides-borrowing-estimate-for-a-person-with-valid-set-of-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launches borrowing calculator application on browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User fills personal details \"\u003capplicationType\u003e\", \"\u003cnumberOfDependants\u003e\", \"\u003ctypeOfPropertyToBuy\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User fills earning details \"\u003cannualIncome\u003e\", \"\u003cotherAnnualIncome\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User fills expense details like  \"\u003cmonthlyLivingExpense\u003e\", \"\u003chomeLoanMonthlyRepayment\u003e\", \"\u003cotherLoanMonthlyRepayment\u003e\", \"\u003cotherMonthlyCommitment\u003e\", \"\u003ctotalCreditCardLimit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on calculate button to see how much he can borrow",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify borrowing calculator provides an estimate that user can borrow and validate the estimate \"\u003cestimate\u003e\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "borrowing-calculator-functionality-test;verify-calculator-provides-borrowing-estimate-for-a-person-with-valid-set-of-data;",
  "rows": [
    {
      "cells": [
        "applicationType",
        "numberOfDependants",
        "typeOfPropertyToBuy",
        "annualIncome",
        "otherAnnualIncome",
        "monthlyLivingExpense",
        "homeLoanMonthlyRepayment",
        "otherLoanMonthlyRepayment",
        "otherMonthlyCommitment",
        "totalCreditCardLimit",
        "estimate"
      ],
      "line": 13,
      "id": "borrowing-calculator-functionality-test;verify-calculator-provides-borrowing-estimate-for-a-person-with-valid-set-of-data;;1"
    },
    {
      "cells": [
        "Single",
        "0",
        "Home to live in",
        "80000",
        "10000",
        "500",
        "0",
        "100",
        "0",
        "10000",
        "$428,000"
      ],
      "line": 14,
      "id": "borrowing-calculator-functionality-test;verify-calculator-provides-borrowing-estimate-for-a-person-with-valid-set-of-data;;2"
    },
    {
      "cells": [
        "Single",
        "0",
        "Home to live in",
        "70000",
        "8000",
        "700",
        "0",
        "100",
        "0",
        "10000",
        "$347,000"
      ],
      "line": 15,
      "id": "borrowing-calculator-functionality-test;verify-calculator-provides-borrowing-estimate-for-a-person-with-valid-set-of-data;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9109141999,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify calculator provides borrowing estimate for a person with valid set of data",
  "description": "",
  "id": "borrowing-calculator-functionality-test;verify-calculator-provides-borrowing-estimate-for-a-person-with-valid-set-of-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launches borrowing calculator application on browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User fills personal details \"Single\", \"0\", \"Home to live in\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User fills earning details \"80000\", \"10000\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User fills expense details like  \"500\", \"0\", \"100\", \"0\", \"10000\"",
  "matchedColumns": [
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on calculate button to see how much he can borrow",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify borrowing calculator provides an estimate that user can borrow and validate the estimate \"$428,000\" is displayed",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SampleTest.user_launches_borrowing_calculator_application_on_browser()"
});
formatter.result({
  "duration": 185916400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Single",
      "offset": 29
    },
    {
      "val": "0",
      "offset": 39
    },
    {
      "val": "Home to live in",
      "offset": 44
    }
  ],
  "location": "SampleTest.user_fills_personal_details(String,String,String)"
});
formatter.result({
  "duration": 99734701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80000",
      "offset": 28
    },
    {
      "val": "10000",
      "offset": 37
    }
  ],
  "location": "SampleTest.user_fills_earning_details(String,String)"
});
formatter.result({
  "duration": 180495100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 34
    },
    {
      "val": "0",
      "offset": 41
    },
    {
      "val": "100",
      "offset": 46
    },
    {
      "val": "0",
      "offset": 53
    },
    {
      "val": "10000",
      "offset": 58
    }
  ],
  "location": "SampleTest.user_fills_expense_details_like(String,String,String,String,String)"
});
formatter.result({
  "duration": 367399800,
  "status": "passed"
});
formatter.match({
  "location": "SampleTest.user_clicks_on_calculate_button_to_see_how_much_he_can_borrow()"
});
formatter.result({
  "duration": 5082006700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$428,000",
      "offset": 97
    }
  ],
  "location": "SampleTest.verify_borrowing_calculator_provides_an_estimate_that_user_can_borrow_and_validate_the_estimate_is_displayed(String)"
});
formatter.result({
  "duration": 57058101,
  "status": "passed"
});
formatter.after({
  "duration": 729401001,
  "status": "passed"
});
formatter.before({
  "duration": 7452281399,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify calculator provides borrowing estimate for a person with valid set of data",
  "description": "",
  "id": "borrowing-calculator-functionality-test;verify-calculator-provides-borrowing-estimate-for-a-person-with-valid-set-of-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launches borrowing calculator application on browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User fills personal details \"Single\", \"0\", \"Home to live in\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User fills earning details \"70000\", \"8000\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User fills expense details like  \"700\", \"0\", \"100\", \"0\", \"10000\"",
  "matchedColumns": [
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on calculate button to see how much he can borrow",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify borrowing calculator provides an estimate that user can borrow and validate the estimate \"$347,000\" is displayed",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SampleTest.user_launches_borrowing_calculator_application_on_browser()"
});
formatter.result({
  "duration": 69304600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Single",
      "offset": 29
    },
    {
      "val": "0",
      "offset": 39
    },
    {
      "val": "Home to live in",
      "offset": 44
    }
  ],
  "location": "SampleTest.user_fills_personal_details(String,String,String)"
});
formatter.result({
  "duration": 80304400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70000",
      "offset": 28
    },
    {
      "val": "8000",
      "offset": 37
    }
  ],
  "location": "SampleTest.user_fills_earning_details(String,String)"
});
formatter.result({
  "duration": 182410000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "700",
      "offset": 34
    },
    {
      "val": "0",
      "offset": 41
    },
    {
      "val": "100",
      "offset": 46
    },
    {
      "val": "0",
      "offset": 53
    },
    {
      "val": "10000",
      "offset": 58
    }
  ],
  "location": "SampleTest.user_fills_expense_details_like(String,String,String,String,String)"
});
formatter.result({
  "duration": 356685200,
  "status": "passed"
});
formatter.match({
  "location": "SampleTest.user_clicks_on_calculate_button_to_see_how_much_he_can_borrow()"
});
formatter.result({
  "duration": 5085696200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$347,000",
      "offset": 97
    }
  ],
  "location": "SampleTest.verify_borrowing_calculator_provides_an_estimate_that_user_can_borrow_and_validate_the_estimate_is_displayed(String)"
});
formatter.result({
  "duration": 58415400,
  "status": "passed"
});
formatter.after({
  "duration": 729578801,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Verify clicking on start over button clears the form",
  "description": "",
  "id": "borrowing-calculator-functionality-test;verify-clicking-on-start-over-button-clears-the-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User launches borrowing calculator application on browser",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User fills earning details \"\u003cannualIncome\u003e\", \"\u003cotherAnnualIncome\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User fills expense details like  \"\u003cmonthlyLivingExpense\u003e\", \"\u003chomeLoanMonthlyRepayment\u003e\", \"\u003cotherLoanMonthlyRepayment\u003e\", \"\u003cotherMonthlyCommitment\u003e\", \"\u003ctotalCreditCardLimit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on start over button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Verify form gets cleared",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "borrowing-calculator-functionality-test;verify-clicking-on-start-over-button-clears-the-form;",
  "rows": [
    {
      "cells": [
        "annualIncome",
        "otherAnnualIncome",
        "monthlyLivingExpense",
        "homeLoanMonthlyRepayment",
        "otherLoanMonthlyRepayment",
        "otherMonthlyCommitment",
        "totalCreditCardLimit"
      ],
      "line": 27,
      "id": "borrowing-calculator-functionality-test;verify-clicking-on-start-over-button-clears-the-form;;1"
    },
    {
      "cells": [
        "80000",
        "10000",
        "500",
        "0",
        "100",
        "0",
        "10000"
      ],
      "line": 28,
      "id": "borrowing-calculator-functionality-test;verify-clicking-on-start-over-button-clears-the-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8939522199,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify clicking on start over button clears the form",
  "description": "",
  "id": "borrowing-calculator-functionality-test;verify-clicking-on-start-over-button-clears-the-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User launches borrowing calculator application on browser",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User fills earning details \"80000\", \"10000\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User fills expense details like  \"500\", \"0\", \"100\", \"0\", \"10000\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on start over button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Verify form gets cleared",
  "keyword": "Then "
});
formatter.match({
  "location": "SampleTest.user_launches_borrowing_calculator_application_on_browser()"
});
formatter.result({
  "duration": 59635801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80000",
      "offset": 28
    },
    {
      "val": "10000",
      "offset": 37
    }
  ],
  "location": "SampleTest.user_fills_earning_details(String,String)"
});
formatter.result({
  "duration": 224279900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 34
    },
    {
      "val": "0",
      "offset": 41
    },
    {
      "val": "100",
      "offset": 46
    },
    {
      "val": "0",
      "offset": 53
    },
    {
      "val": "10000",
      "offset": 58
    }
  ],
  "location": "SampleTest.user_fills_expense_details_like(String,String,String,String,String)"
});
formatter.result({
  "duration": 481494499,
  "status": "passed"
});
formatter.match({
  "location": "SampleTest.user_clicks_on_start_over_button()"
});
formatter.result({
  "duration": 143597700,
  "status": "passed"
});
formatter.match({
  "location": "SampleTest.verify_form_gets_cleared()"
});
formatter.result({
  "duration": 125747299,
  "status": "passed"
});
formatter.after({
  "duration": 815600400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "Verify the scenario where borrowing calculator is unable to provide an estimate based on data entered by user",
  "description": "",
  "id": "borrowing-calculator-functionality-test;verify-the-scenario-where-borrowing-calculator-is-unable-to-provide-an-estimate-based-on-data-entered-by-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User launches borrowing calculator application on browser",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User fills expense details like  \"\u003cmonthlyLivingExpense\u003e\", \"\u003chomeLoanMonthlyRepayment\u003e\", \"\u003cotherLoanMonthlyRepayment\u003e\", \"\u003cotherMonthlyCommitment\u003e\", \"\u003ctotalCreditCardLimit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User clicks on calculate button to see how much he can borrow",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Verify application throws unable to estimate message",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "borrowing-calculator-functionality-test;verify-the-scenario-where-borrowing-calculator-is-unable-to-provide-an-estimate-based-on-data-entered-by-user;",
  "rows": [
    {
      "cells": [
        "browser",
        "monthlyLivingExpense",
        "homeLoanMonthlyRepayment",
        "otherLoanMonthlyRepayment",
        "otherMonthlyCommitment",
        "totalCreditCardLimit"
      ],
      "line": 39,
      "id": "borrowing-calculator-functionality-test;verify-the-scenario-where-borrowing-calculator-is-unable-to-provide-an-estimate-based-on-data-entered-by-user;;1"
    },
    {
      "cells": [
        "chrome",
        "1",
        "0",
        "0",
        "0",
        "0"
      ],
      "line": 40,
      "id": "borrowing-calculator-functionality-test;verify-the-scenario-where-borrowing-calculator-is-unable-to-provide-an-estimate-based-on-data-entered-by-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8217957700,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Verify the scenario where borrowing calculator is unable to provide an estimate based on data entered by user",
  "description": "",
  "id": "borrowing-calculator-functionality-test;verify-the-scenario-where-borrowing-calculator-is-unable-to-provide-an-estimate-based-on-data-entered-by-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User launches borrowing calculator application on browser",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User fills expense details like  \"1\", \"0\", \"0\", \"0\", \"0\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User clicks on calculate button to see how much he can borrow",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Verify application throws unable to estimate message",
  "keyword": "Then "
});
formatter.match({
  "location": "SampleTest.user_launches_borrowing_calculator_application_on_browser()"
});
formatter.result({
  "duration": 65638600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 34
    },
    {
      "val": "0",
      "offset": 39
    },
    {
      "val": "0",
      "offset": 44
    },
    {
      "val": "0",
      "offset": 49
    },
    {
      "val": "0",
      "offset": 54
    }
  ],
  "location": "SampleTest.user_fills_expense_details_like(String,String,String,String,String)"
});
formatter.result({
  "duration": 424948200,
  "status": "passed"
});
formatter.match({
  "location": "SampleTest.user_clicks_on_calculate_button_to_see_how_much_he_can_borrow()"
});
formatter.result({
  "duration": 5139568800,
  "status": "passed"
});
formatter.match({
  "location": "SampleTest.verify_application_throws_unable_to_estimate_message()"
});
formatter.result({
  "duration": 34127299,
  "status": "passed"
});
formatter.after({
  "duration": 719539800,
  "status": "passed"
});
});