Comments based on the task: I've selected Protractor for a task, because have some experience in using it on the real project. The only one problem is that Protractor is angular specific framework, even if it also feets for non angular web pages (used following: browser.ignoreSynchronization = true, to disable auto waiters for angular components). Also this aspect, leads to manually using waiters, which affects overall performance. So if I had more time and it would be my read project, I would choose another instrument, more specific for a project. In the beginning of analyzing the task, I faced the problem, that: "Google calculator" doesn't display the working on calculator application. I tried several machines and browsers + a lot of Google work. On the same machine, on IE 11 and Edge is was working, while for Chrome and FF - no. So I've found some workaround, as used russian searching to specify running tests on Chrome. Also because a lack of time, after I've done some tests, I got some ideas about refactoring the code. For example I have test, when I check page's title, but in my case it's location based (Ukraine local leads to specific Google title). So test like that could be extend, to support multi location behavior of test. (For example it the local is set to Italy, test would be failed, because title would change based on 2nd domain) 
P.s. sorry for long text, I meant to write only few words :)
_________________________________________________________________________________________________________________________________________________________________________________


Protractor is a Node.js program. To run Protractor, you will need to have Node.js installed.
Check the version of node you have by running node --version. It should be greater than v0.10.0.

NodeJs: 
Istall (https://nodejs.org/en/download/)

JDK:
Istall (http://www.oracle.com/technetwork/java/javase/downloads/index.html)
Or check if it's already installed - Run the update command:java -version

Installing Protractor:
Run the update command: npm install -g protractor

Standalone Selenium Server
Install Webdriver: (the webdriver-manager command line tool, which comes with Protractor)
Run the update command: webdriver-manager update


Run the start command: webdriver-manager start (In your config file, set seleniumAddress to the address of the running server. This defaults to http://localhost:4444/wd/hub.)

________________________________________________________________________________________________________________________________________________________________________________

Running protractos tests
$ protractor conf.js --suite=suiteName (run specific test suite)

$ protractor conf.js --suite=suiteName1,suiteName2  (run specific test suites)

$ protractor conf.js (run all test available tests)

__________________________________________________________________________________________________________________________________________________________________________________

grunt protractor runner

npm install grunt-protractor-runner --save-dev              (grunt.loadNpmTasks('grunt-protractor-runner'); => following line of JS was added to your Gruntfile )

Install local standalone version of Selenium
./node_modules/grunt-protractor-runner/scripts/webdriver-manager-update


The "protractor" task

Overview
In your project's Gruntfile, add a section named protractor to the data object passed into grunt.initConfig().

grunt.initConfig({
  protractor: {
    options: {
      configFile: "node_modules/protractor/example/conf.js", // Default config file 
      keepAlive: true, // If false, the grunt process stops when the test fails. 
      noColor: false, // If true, protractor will not use colors in its output. 
      args: {
        // Arguments passed to the command 
      }
    },
    your_target: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too. 
      options: {
        configFile: "e2e.conf.js", // Target-specific config file 
        args: {} // Target-specific arguments 
      }
    },
  },
})





