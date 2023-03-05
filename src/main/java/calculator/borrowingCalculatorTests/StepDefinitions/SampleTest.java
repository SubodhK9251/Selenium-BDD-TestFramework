package calculator.borrowingCalculatorTests.StepDefinitions;

import calculator.pageObjectModel.pageObject;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;


/**
 * @author Subodh Kumar
 *
 */

public class SampleTest {
    static WebDriver driver;
    Properties prop = new Properties();
    pageObject borrowCalculatorPage;

    @Before
    public void setup() throws IOException {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        prop.load(new FileInputStream("config/global.properties"));
        driver.navigate().to(prop.getProperty("calculatorUrl"));
        borrowCalculatorPage = new pageObject(driver);
    }

    @After
    public void cleanup() throws IOException {
        driver.close();
        driver.quit();
    }



    @Given("^User launches borrowing calculator application on browser$")
    public void user_launches_borrowing_calculator_application_on_browser() {
        borrowCalculatorPage.verifyLaunchPage();
    }

    @And("^User fills personal details \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
    public void user_fills_personal_details(String applicationType, String noOfDependant, String propertyType) throws Throwable {
        borrowCalculatorPage.fillUserDetails(applicationType, noOfDependant, propertyType);
    }

    @And("^User fills earning details \"([^\"]*)\", \"([^\"]*)\"$")
    public void user_fills_earning_details(String annualIncome, String otherAnnualIncome) throws Throwable {
        borrowCalculatorPage.fillIncomeDetails(annualIncome, otherAnnualIncome);
    }

    @And("^User fills expense details like  \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
    public void user_fills_expense_details_like(String monthlyLivingExpense, String homeLoan, String otherLoan, String otherCommitment, String creditlimit) throws Throwable {
        borrowCalculatorPage.fillExpenseDetails(monthlyLivingExpense, homeLoan, otherLoan, otherCommitment, creditlimit);
    }

    @When("^User clicks on calculate button to see how much he can borrow$")
    public void user_clicks_on_calculate_button_to_see_how_much_he_can_borrow() throws Throwable {
        borrowCalculatorPage.clickCalculateBorrowingEstimateButton();
    }

    @Then("^Verify borrowing calculator provides an estimate that user can borrow and validate the estimate \"([^\"]*)\" is displayed$")
    public void verify_borrowing_calculator_provides_an_estimate_that_user_can_borrow_and_validate_the_estimate_is_displayed(String estimate) throws Throwable {
        borrowCalculatorPage.verifyBorrowingEstimateAmount(estimate);
    }

    @When("^User clicks on start over button$")
    public void user_clicks_on_start_over_button() {
        borrowCalculatorPage.clickStartOverButton();
    }

    @Then("^Verify form gets cleared$")
    public void verify_form_gets_cleared() {
        borrowCalculatorPage.verifystartOverButtonClearsForm();
    }

    @Then("^Verify application throws unable to estimate message$")
    public void verify_application_throws_unable_to_estimate_message() {
        borrowCalculatorPage.verifyUnableToEstimateErrorMessage();
    }

}
