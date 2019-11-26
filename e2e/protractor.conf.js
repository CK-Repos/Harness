// Protractor configuration file, see link for more information
// Author: CK

const { SpecReporter } = require('jasmine-spec-reporter');
var config = require('./protractor.conf.js');
var jasmineReporters = require('jasmine-reporters');
var htmlReporter = require('protractor-html-reporter-2');
var fs = require('fs-extra');

exports.config = {
    allScriptsTimeout: 10000,
    specs: [
    './src/specs/Nuvven/nuvven-spec.ts'
    ],
  //specs: ['./src/specs/Login/Login-spec.ts','./src/specs/Events/MultipleEvents-spec.ts'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['start-maximized', 'disable-infobars']
    },
    loggingPrefs: {
      driver: 'WARNING',
      server: 'ALL',
      browser: 'ALL',
      performance: 'ALL'
    }
  },

  suites: {
    debugscript: './src/specs/JobTravelerReport/jobtraveler-spec.ts',
    all: ['e2e/**/*Spec.ts', 'e2e/**/*Spec.ts']
  },
  directConnect: true,
  baseUrl: 'https://projects.invisionapp.com/share/F2T5CC2H4N9#/screens',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 50000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });

    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: { displayStacktrace: true, displayDuration: true },
        summary: {
          displayDuration: true
        }
      })
    );
    browser.getCapabilities().then(function(cap) {
      browser.browserName = cap.get('browserName');
      console.log('browserName:', browser.browserName);
    });

    browser.driver
      .manage()
      .window()
      .maximize();
    // Default implicit wait
    browser
      .manage()
      .timeouts()
      .implicitlyWait(10000);
    // Angular sync for non angular apps
    browser.ignoreSynchronization = true;

    fs.emptyDir('./src/reports/xml/', function(err) {
      //console.log(err);
    });

    browser.getCapabilities().then(function(cap) {
      fs.emptyDir('./src/reports/' + cap.get('browserName') + '/screenshots', function(err) {
        //console.log(err);
      });
    });

    jasmine.getEnv().addReporter(
      new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: './src/reports/xml/',
        filePrefix: 'xmlresults'
      })
    );

    jasmine.getEnv().addReporter({
      specDone: function(result) {
        browser.getCapabilities().then(function(caps) {
          var browserName = caps.get('browserName');

          browser.takeScreenshot().then(function(png) {
            var stream = fs.createWriteStream(
              './src/reports/' + browserName + '/screenshots/' + browserName + '-' + result.fullName + '.png'
            );
            stream.write(new Buffer(png, 'base64'));
            stream.end();
          });
        });
      }
    });
  },

  onComplete() {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function(caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      platform = caps.get('platform');

      testConfig = {
        reportTitle: 'Protractor Test Execution Report',
        outputPath: './src/reports/',
        outputFilename: 'ProtractorTestReport',
        screenshotPath: browserName + '/screenshots',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: false,
        testPlatform: platform
      };
      new htmlReporter().from('./src/reports/xml/xmlresults.xml', testConfig);
    });
  }
};

module.exports = config;
