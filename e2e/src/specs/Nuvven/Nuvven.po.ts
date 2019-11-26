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

}
