// carreguem les llibreries
const { BaseTest } = require("./BaseTest.js")
const { By, until } = require("selenium-webdriver");
const assert = require('assert');

// heredem una classe amb un sol mètode test()
// emprem this.driver per utilitzar Selenium


class MyTest extends BaseTest
{
	async test() {
        // login test
        //////////////////////////////////////////////////////

        await this.driver.get("http://emieza.ieti.site/admin/login/");

        // Localitzem el camp de text "Username" i "Password"
        const usernameField = await this.driver.findElement(By.name("username"));
        const passwordField = await this.driver.findElement(By.name("password"));

        // Verifiquem que els camps existeixen
        assert(usernameField !== null, "El camp Username no es troba.");
        assert(passwordField !== null, "El camp Password no es troba.");

        console.log("TEST OK");
	}
}

// executem el test

(async function test_example() {
	const test = new MyTest();
	await test.run();
	console.log("END")
})();