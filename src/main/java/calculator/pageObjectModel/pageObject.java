package calculator.pageObjectModel;

import calculator.constants.StringConstant;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.util.concurrent.TimeUnit;

import static org.testng.Reporter.log;

/**
 * @author Subodh Kumar
 *
 */

public class pageObject {

    @FindBy(xpath = "//*[@class='hero__heading']")
    private WebElement borrowHeaderText;
    @FindBy(xpath = "//label[@for='application_type_single']")
    private WebElement applicationTypeSingle;

    @FindBy(xpath = "//select[@title='Number of dependants']")
    private WebElement selectDependants;

    @FindBy(xpath = "//input[@id='borrow_type_home']")
    private WebElement propertyBorrowTypeHome;

    @FindBy(xpath = "//input[@aria-labelledby='q2q1']")
    private WebElement annualIncomeInputBox;

    @FindBy(xpath = "//input[@aria-labelledby='q2q2']")
    private WebElement otherAnnualIncomeInputBox;

    @FindBy(xpath = "//input[@id='expenses']")
    private WebElement monthlyLivingExpensesInputBox;

    @FindBy(xpath = "//input[@id='homeloans']")
    private WebElement currentHomeLoanMonthlyRepaymentInputBox;

    @FindBy(xpath = "//input[@id='otherloans']")
    private WebElement otherLoanMonthlyRepaymentInputBox;

    @FindBy(xpath = "//input[@aria-labelledby='q3q4']")
    private WebElement otherMonthlyCommitmentInputBox;

    @FindBy(xpath = "//input[@id='credit']")
    private WebElement totalCreditLimitInputBox;

    @FindBy(xpath = "//button[@id='btnBorrowCalculater']")
    private WebElement howMuchICouldBorrowButton;

    @FindBy(xpath = "//div[@class='result__restart']/button[@class='start-over']/span")
    private WebElement startOverButton;

    @FindBy(xpath = "//span[@id='borrowResultTextAmount']")
    private WebElement borrowEstimateResultAmount;

    @FindBy(xpath = "//div[@class='borrow__error__text']")
    private WebElement unabletoEstimateErrorMessage;


    WebDriver driver;
    public pageObject(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void verifyLaunchPage(){
        borrowHeaderText.isDisplayed();
        applicationTypeSingle.isDisplayed();
    }

    public void fillUserDetails(String applicationType, String noOfDependant, String propertyType) throws Exception {
        /*if(applicationType.equalsIgnoreCase("Single")) {
            applicationTypeSingle.click();
        }else{
            log("Please Provide application Type as Single");
            throw new Exception("Incorrect application Type Provided");
        }*/
        Select sel = new Select(selectDependants);
        sel.selectByVisibleText(noOfDependant);
        //propertyBorrowTypeHome.click();
    }

    public void fillIncomeDetails(String annualIncome, String otherAnnualIncome) throws Exception {
        annualIncomeInputBox.sendKeys(annualIncome);
        otherAnnualIncomeInputBox.sendKeys(otherAnnualIncome);
    }

    public void fillExpenseDetails(String livingExpense, String homeLoan, String otherLoan, String otherCommitment, String totalCredit) throws Exception {
        monthlyLivingExpensesInputBox.sendKeys(livingExpense);
        currentHomeLoanMonthlyRepaymentInputBox.sendKeys(homeLoan);
        otherLoanMonthlyRepaymentInputBox.sendKeys(otherLoan);
        otherMonthlyCommitmentInputBox.sendKeys(otherCommitment);
        totalCreditLimitInputBox.sendKeys(totalCredit);
    }

    public void clickCalculateBorrowingEstimateButton() throws InterruptedException {
        howMuchICouldBorrowButton.click();
        Thread.sleep(5000);
        wait(10);
    }

    public void clickStartOverButton(){
        startOverButton.click();
        wait(5);
    }

    public void verifyBorrowingEstimateAmount(String estimateAmount){
        borrowEstimateResultAmount.isDisplayed();
        String actualEstimate = borrowEstimateResultAmount.getText();
        Assert.assertEquals(actualEstimate, estimateAmount, "Calculated Estimated borrow amount doesn't match");
        log("Estimated borrow amount displayed: " + actualEstimate);
    }

    public void verifyUnableToEstimateErrorMessage(){
        String actualEstimate = unabletoEstimateErrorMessage.getText();
        Assert.assertEquals(actualEstimate, StringConstant.UNABLE_TO_ESTIMATE_MESSAGE, "Error Message nor matching when unable to estimate");
    }

    public void verifystartOverButtonClearsForm(){
        String actualIncome = annualIncomeInputBox.getAttribute("value");
        String actualOtherIncome = otherAnnualIncomeInputBox.getAttribute("value");
        String actualLivingExpense = monthlyLivingExpensesInputBox.getAttribute("value");
        String actualCreditLimit = totalCreditLimitInputBox.getAttribute("value");
        Assert.assertEquals(actualIncome, "0", "Field didn't get cleared");
        Assert.assertEquals(actualOtherIncome, "0", "Field didn't get cleared");
        Assert.assertEquals(actualLivingExpense, "0", "Field didn't get cleared");
        Assert.assertEquals(actualCreditLimit, "0", "Field didn't get cleared");
        log("Form is cleared successfully upon clicking start Over button");
    }

    public void waitIsPresent(WebElement element){
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.visibilityOf(element));
    }

    public void wait(int timeInSeconds){
        driver.manage().timeouts().implicitlyWait(timeInSeconds, TimeUnit.SECONDS);
    }

}
