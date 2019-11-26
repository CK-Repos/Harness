import { browser, by, element } from 'protractor';
import { Helper } from '../../common/common';
import { TestData } from '../../common/testdata';
import { NuvvenPO } from './Nuvven.po';



describe('Nuvven', () => {
  const helper: Helper = new Helper();
  const NuvvenRepo: NuvvenPO = new NuvvenPO();
  const testdata: TestData = new TestData();




  it('Login Page 1', () => {
    browser.get(testdata.baseUrl);
    browser.sleep(7000);
    expect(browser.getTitle()).toEqual('Login-1');

    helper.clickbutton(NuvvenRepo.Screen1usename);
    browser.sleep(1000);
    expect(browser.getTitle()).toEqual('Login-2');

    helper.clickbutton(NuvvenRepo.Screen1loginButton);
    browser.sleep(1000);
    expect(browser.getTitle()).toEqual('Login-3');
  });


  it('Reset Username & passwprd Page', () => {

    helper.clickbutton(NuvvenRepo.ResetUsername);
    browser.sleep(1000);
    expect(browser.getTitle()).toEqual('Login-4');


    helper.clickbutton(NuvvenRepo.ResetPassword);
    browser.sleep(1000);
    expect(browser.getTitle()).toEqual('Login-5');

    helper.clickbutton(NuvvenRepo.ResetconfirmPass);
    browser.sleep(1000);
    expect(browser.getTitle()).toEqual('Login-6');
  });

  it('Username Password updated successfully', () => {
    helper.clickbutton(NuvvenRepo.ResetButton);
    browser.sleep(1000);
    expect(browser.getTitle()).toEqual('Login-7');

    helper.clickbutton(NuvvenRepo.StartSystem);





  });


});
