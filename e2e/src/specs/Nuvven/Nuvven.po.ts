import { browser, by, element, promise } from 'protractor';
import { Helper } from '../../common/common';
import { ObjectLocator } from '../../common/objectLocator';

const Locator: ObjectLocator = new ObjectLocator();


export class NuvvenPO {

    // tslint:disable: quotemark
    readonly Screen1usename = ['xpath', "//div[@id='screen_393772829']/div/a"];
    readonly Screen1loginButton = ['xpath', "//div[@id='screen_393772830']/div/a"];
    readonly ResetUsername = ['xpath', "//div[@id='screen_393772831']/div/a"];
    readonly ResetPassword = ['xpath', "//div[@id='screen_393772832']/div/a"];
    readonly ResetconfirmPass = ['xpath', "//div[@id='screen_393772833']/div/a"];
    readonly ResetButton = ['xpath', "//div[@id='screen_393772834']/div/a"];
    readonly StartSystem = ['xpath', "//div[@id='screen_393772835']/div/a"];

    // Booking

    readonly BookingMousehover = ['xpath', "//a[contains(text(),'1052590969')]"];
    readonly Bookings = ['xpath', "//div[@id='screen_396015795']/div/a"];
    readonly createnew = ['xpath', "//a[contains(text(),'1046792897')]"];
        readonly Search = ['xpath', "//a[contains(text(),'1046793375')]"];
        readonly cartype = ['xpath', "//a[contains(text(),'1053639566')]"];
        readonly cartypeclose = ['xpath', "//a[contains(text(),'1053639580')]"];
        readonly searchfilter = ['xpath', "//a[contains(text(),'1107979234')]"];
        readonly vehicleselection = ['xpath', "//a[contains(text(),'1107980178')]"];
        readonly RmSelection = ['xpath', "//a[contains(text(),'1046800654')]"];
        readonly ProceedButton = ['xpath', "//a[contains(text(),'1046802397')]"];
        readonly CreateQuoteButton = ['xpath', "//a[contains(text(),'1108413359')]"];
        readonly PayConfirmbutton = ['xpath', "//a[contains(text(),'1108414435')]"];
        readonly paynowbutton = ['xpath', "//a[contains(text(),'1054595902')]"];
}
