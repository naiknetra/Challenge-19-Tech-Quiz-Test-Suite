import Quiz from "../../client/src/components/Quiz";

describe("Quiz Component", () => {
  beforeEach(() => {
    cy.mount(<Quiz />);
    cy.intercept(
      {
        method: "GET",
        url: "/api/questions/random",
      },
      {
        fixture: "questions.json",
        statusCode: 200,
      }
    ).as("getRandomQuestion");
  });
  it("Clicking the Start button should show the quiz questions", () => {
    cy.get(".btn-primary").click();
    cy.get(".btn-primary").should("contain", "1");
  });

  it("Clicking the first option button should select option one", () => {
    cy.get(".btn-primary").click();
    cy.get(".btn-primary").should("contain", "1");
  });
  it("Clicking the second option button should select option two", () => {
    cy.get(".btn-primary").click();
    cy.get(".btn-primary").should("contain", "2");
  });
});
