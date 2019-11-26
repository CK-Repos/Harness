import { browser, by, element, ElementFinder, Key, promise, } from 'protractor';
import { ObjectLocator } from './ObjectLocator';
import { TestData } from './testdata';



// Helper class will have all the common functions
// i have created couple of functions needed for automation flows

export class Helper {
    // tslint:disable: quotemark
    // tslint:disable: ban-types

  private testdata: TestData = new TestData();
  public Locator: ObjectLocator = new ObjectLocator();

  public date = new Date();

  // at the top of the test spec:
  // private fs = require('fs');

  /**
   * Search button element by text
   * @param text Button text
   */
  getButtonByText(text: string) {
    return element(by.buttonText(text));
  }

  /**
   * Search button element by id
   * @param id Button id
   */
  getButtonById(id: string) {
    return element(by.id(id));
  }

  /**
   * Returns the textbox value
   * @param ele element id
   */
  getTextValue(ele) {
    return element(by.id(ele)).getAttribute('value');
  }

  /**
   * Returns the numeric control value
   * @param ele element id
   */
  getNumericControlValue(ele: string) {
    // return element(by.id(ele)).getAttribute('ng-reflect-model');
    return element(by.id(ele))
      .element(by.tagName('input'))
      .getAttribute('value');
  }

  /**
   * Returns label element with matching content
   * @param content text content
   */
  getLabelElementByContent(content: string) {
    return element(by.cssContainingText('label', content));
  }

  /**
   * Returns the link text element
   * @param ele element id
   */
  getlinkText(ele: string): ElementFinder {
    return element(by.linkText(ele));
  }

  /**
   * Returns dropdown selected option
   * @param ele element id
   */
  getDropDownSelectedOption(ele: string) {
    return element(by.id(ele))
      .$('option:checked')
      .getText();
  }

  /**
   * Returns current browser URL
   */
  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  /**
   * Sets the element value. Previous value is cleared
   * @param ele element id
   * @param val element value
   */
  setTextValue(ele: string, val: string) {
    return element(by.id(ele))
      .clear()
      .then(() => {
        return element(by.id(ele)).sendKeys(val);
      });
  }

  /**
   * Sets the element value. Previous value is cleared
   * @param ele element id
   * @param val element value
   */
  setNumericControlValue(ele: string, val: string) {
    return element(by.id(ele))
      .element(by.tagName('input'))
      .sendKeys(val);
  }

  /**
   * Set dropdown option
   * @param optionToSelect option to select in dropdown
   */
  selectDropDownOption(optionToSelect: string) {
    element
      .all(by.css(`option[value="${optionToSelect}"]`))
      .first()
      .click();
  }

  /**
   * Set dropdown option in Kineteic control
   * @param ele element id
   * @param optionToSelect option to select in dropdown
   */
  selectKineticDropDownOption(ele: string, optionToSelect: string) {
    // first click on dropdown so it loads available options
    element(by.id(ele)).click();

    // select option
    element
      .all(by.css('li[kendodropdownsselectable]'))
      .filter(e => {
        return e.getText().then(val => val === optionToSelect);
      })
      .click();

    // for some reason we need to call twice. not sure why!!!
    element
      .all(by.css('li[kendodropdownsselectable]'))
      .filter(e => {
        return e.getText().then(val => val === optionToSelect);
      })
      .click();
  }

  selectTab(tab: string): void {
    element.all(by.className('k-link')).each(e => {
      e.getText().then(val => {
        if (val === tab) {
          e.click();
          return;
        }
      });
    });
  }

  /**
   * Send tab key
   * @param ele element id
   */
  sendTabKey(ele: string) {
    return element(by.id(ele)).sendKeys(Key.TAB);
  }

  /**
   * Check if value is either empty or zero
   * @param val value
   */
  isEmptyorZero(promiseValue: promise.Promise<string>): promise.Promise<boolean> {
    return promiseValue.then(val => {
      if (val === '0' || val === '') {
        return true;
      }
      return false;
    });
  }

  /**
   * Returns true if control is disabled
   * @param ele element id
   */
  isDisabled(ele: string): promise.Promise<String> {
    return element(by.id(ele)).getAttribute('ng-reflect-disabled');
  }

  takeScreenshot(): void {
    // browser.takeScreenshot().then(data => {
    //   const filename = `${guid}.png`;
    //   const stream = this.fs.createWriteStream(filename);
    //   stream.write(new Buffer(data, 'base64'));
    //   stream.end();
    // });
  }

   gettext(ele) {
    const text = this.Locator.findLocator(ele);
    return text;
}

   VerifyText(ele) {
    const text = this.Locator.findLocator(ele);
    return text;
    }

    enterTextvalue(ele, value) {
      const entertext = this.Locator.findLocator(ele);
      entertext.sendKeys(value);
  }

  clickbutton(ele) {
      const clickbtn = this.Locator.findLocator(ele);
      clickbtn.click();
  }

  clickCheckbox(ele) {
    const clickchk = this.Locator.findLocator(ele);
    clickchk.click();
}


getYesterdaysDate() {

  this.date.setDate(this.date.getDate() - 1);
  return this.date.getDate() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getFullYear();

}

getTomorrowDate() {
  this.date.setDate(this.date.getDate() + 1);
  return this.date.getDate() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getFullYear();
}

getDate() {
  this.date.setDate(this.date.getDate());
  return this.date.getDate() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getFullYear();
}


ClearTextField(ele) {
  const Cleartext = this.Locator.findLocator(ele);
  Cleartext.clear();
}

}
