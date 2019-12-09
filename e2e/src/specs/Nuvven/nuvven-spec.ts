import { browser, by, element } from 'protractor';
import { Helper } from '../../common/common';
import { TestData } from '../../common/testdata';
import { NuvvenPO } from './Nuvven.po';
import { protractor, Ptor } from 'protractor/built/ptor';



describe('Nuvven Booking Scenario', () => {
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

  it('Booking Successfull', () => {

  // browser.actions().mouseMove(NuvvenRepo.BookingMousehover).perform();
  helper.clickbutton(NuvvenRepo.BookingMousehover);
  helper.clickbutton(NuvvenRepo.Bookings);
  browser.sleep(3000);
  expect(browser.getTitle()).toContain('Booking');
  helper.clickbutton(NuvvenRepo.createnew);
  helper.clickbutton(NuvvenRepo.Search);
  helper.clickbutton(NuvvenRepo.RmSelection);
  helper.clickbutton(NuvvenRepo.ProceedButton);
  helper.clickbutton(NuvvenRepo.CreateQuoteButton);
  helper.clickbutton(NuvvenRepo.PayConfirmbutton);
  helper.clickbutton(NuvvenRepo.paynowbutton);
  browser.sleep(2000);
  expect(browser.getTitle()).toEqual('Booking-Confirmation');





    // helper.clickbutton(NuvvenRepo.StartSystem);

  });



});
