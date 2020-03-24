import { browser, by, element } from 'protractor';

export class ComputerPage{
    sleep() {
        browser.driver.sleep(5000);
    }
    completeForm() {
        let modele = element.all(by.css('#modeleTest'));
        let marque = element.all(by.id('inputRadio-Apple'));
        let type = element.all(by.id('selectTest'));
        let category = element.all(by.id('inputRadio-Bureautique'));
        let prixAchat = element.all(by.css('#prixAchatTest'));
        let prixVente= element.all(by.css('#prixVenteTest'));
        modele.sendKeys('Macintosh SE');
        marque.click();
        type.sendKeys('Fixe');
        category.click();
        prixAchat.sendKeys(30);
        prixVente.sendKeys(350);
    }
}

