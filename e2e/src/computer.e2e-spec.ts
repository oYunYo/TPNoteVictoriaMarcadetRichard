import {browser, element, logging, by} from 'protractor';
import { ComputerPage } from './computer.po';

describe('test des ordinateurs', () => {
let page: ComputerPage;

 beforeEach(() => {
 page = new ComputerPage();
 browser.get('/home');
 });

 it('Je compte le nombre de lignes dans le tableau et Recherche le lien d\'ajout d\'ordinateur et clique dessus', () => {
    element.all(by.css('.lineComputer')).then(totalRows => {
    this.nbLineInit = totalRows.length;
    });
    element.all(by.id('addComputerLink')).first().click();
    expect(browser.driver.getCurrentUrl()).toContain('/computer/add');
 });

   it('je remplis le formulaire, je le valide et je suis revenue sur la page d\'accueil', () => {
     browser.get('/computer/add');
     page.completeForm();
     page.sleep();
     element.all(by.id('submitFormComputer')).click();
     page.sleep();
     expect(browser.driver.getCurrentUrl()).toContain('/home');
    });

    it('Une fois sur la page home on recompte le nombre de lignes du tableau', () => {
    element.all(by.css('.lineComputer')).then(totalRows => {
        this.nbLineInit += 1;
        expect(totalRows.length).toEqual(this.nbLineInit);
        });
    });


 afterEach(async () => {
 const logs = await browser.manage().logs().get(logging.Type.BROWSER);
 expect(logs).not.toContain(jasmine.objectContaining({
 level: logging.Level.SEVERE,
 } as logging.Entry));
 });
});