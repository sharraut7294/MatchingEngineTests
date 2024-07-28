import {locators} from '../support/locators';

describe('Verify supported products in Matching engine', () => {
  it('Visits the matching engine site and check the supported products list', () => {
    
    cy.visit('https://www.matchingengine.com/');
    cy.get(locators.basePage.modulesMenu).trigger('mouseover');
    cy.get(locators.basePage.repertoireManagementModule).invoke('show').click({force: true});

    cy.url().should('eq', 'https://www.matchingengine.com/repertoire-management-module/');

    cy.get(locators.repertoireManagementPage.additionalFeatures).eq(1).scrollIntoView();
    cy.get(locators.repertoireManagementPage.productsSupportedTab).eq(1).click();
    cy.get(locators.repertoireManagementPage.productsSupportedHeading).eq(7).should('have.text', 'There are several types of Product Supported:');

    cy.get(locators.repertoireManagementPage.supportedProductsList).eq(4).should('have.text', 'Cue Sheet / AV Work​');
    cy.get(locators.repertoireManagementPage.supportedProductsList).eq(5).should('have.text', 'Recording​');
    cy.get(locators.repertoireManagementPage.supportedProductsList).eq(6).should('have.text', 'Bundle​');
    cy.get(locators.repertoireManagementPage.supportedProductsList).eq(7).should('have.text', 'Advertisement ');

  });
});