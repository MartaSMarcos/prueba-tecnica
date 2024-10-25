// cypress/e2e/favorites.spec.js

describe('Favorites Feature', () => {
  beforeEach(() => {
    cy.visit('/'); // Asegura que se esté en la página principal
  });

  it('should add a meetup to favorites and display it on the favorites page', () => {
    // Verifica que la lista de meetups se carga
    cy.get('[data-test="meet-up-item"]').should('have.length.greaterThan', 0);

    // Agrega el primer meetup a favoritos
    cy.get('[data-test="meet-up-item"]').first().within(() => {
      cy.contains('Add to Favorites').click();
    });

    // Verifica que el contador de favoritos en la navegación aumenta
    cy.get('.badge').should('contain', '1');

    // Navega a la página de favoritos
    cy.contains('My Favorites').click();

    // Verifica que el meetup se ha agregado a favoritos
    cy.get('[data-test="meet-up-item"]').should('have.length', 1);
  });

  it('should remove a meetup from favorites', () => {
    // Agrega y elimina un meetup para verificar que se quita de favoritos
    cy.get('[data-test="meet-up-item"]').first().within(() => {
      cy.contains('Add to Favorites').click();
    });

    // Navega a la página de favoritos
    cy.contains('My Favorites').click();

    // Elimina el meetup de favoritos
    cy.get('[data-test="meet-up-item"]').within(() => {
      cy.contains('Remove from Favorites').click();
    });

    // Verifica que el mensaje de no hay favoritos aparece
    cy.contains('You have no favorites yet. Start adding some!').should('exist');
  });
});
