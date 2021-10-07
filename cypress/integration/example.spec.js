
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains body', ()=>{
            cy.get('body').should('be.visible');
        });
    });
});