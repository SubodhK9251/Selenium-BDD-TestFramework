package calculator.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


/**
 * @author Subodh Kumar
 *
 */
@CucumberOptions(
        features = {
                    "src/main/java/calculator/borrowingCalculatorTests/Features/SampleTest.feature"
                   }

        ,plugin = {"pretty", "html:target/site/cucumber-pretty",
                    "json:target/cucumber.json"}

        ,glue = {"calculator.borrowingCalculatorTests.StepDefinitions"}

        ,tags = {"@test"}
)


public class RunCukesTest extends AbstractTestNGCucumberTests{

}
