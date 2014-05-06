var path = require("path");

module.exports = function() {
  this.Given(/^I view the todo list$/, function() {
    return this.driver.get("file://"+path.resolve(__dirname, "../", "../", "index.html"));
  });

  // this.When(/^I create the following todos:$/, function(table, callback) {
  //   // express the regexp above with the code you wish you had
  //   callback.pending();
  // });

  // this.Then(/^I should see the following todos:$/, function(table, callback) {
  //   // express the regexp above with the code you wish you had
  //   callback.pending();
  // });

  // this.When(/^I delete the "([^"]*)"$/, function(arg1, callback) {
  //   // express the regexp above with the code you wish you had
  //   callback.pending();
  // });
}
