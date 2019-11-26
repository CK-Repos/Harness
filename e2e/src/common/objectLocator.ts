import { browser, by, element } from 'protractor';

export class ObjectLocator {
    webElement = null;

    // find locator using provided locator type and locator value
    findLocator = function(locator) {
        const locatorType = locator[0];
        const locatorValue = locator[1];
        if (typeof locatorType !== 'undefined') {
            if (locatorType === 'id') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.id(locatorValue));
                }
            } else if (locatorType === 'name') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.name(locatorValue));
                }
            } else if (locatorType === 'xpath') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.xpath(locatorValue));
                }
            } else if (locatorType === 'css') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.css(locatorValue));
                }
            } else if (locatorType === 'epbinding') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.binding(locatorValue));
                }
            } else if (locatorType === 'tagname') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.tagName(locatorValue));
                }
            } else if (locatorType === 'linkText') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.linkText(locatorValue));
                }
            }
            return this.webElement;
        }
    };
}

