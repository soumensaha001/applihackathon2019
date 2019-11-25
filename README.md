# applihackathon2019
This project is for submitting code in applitool hackathon 2019
Steps to Run this suite:
1. git pull this repo.
2. perform npm install on command line. This will install cypress and applitool sdk both.
3. Then open cypress runner by npx cypress run.
4. From the runner window click on TraditionalTests.js and see the execution.
5. Then run VisualTests.js from the window.
Importan note while executing: In both the executions if you want to see the version 2 app execution then please change url of app on line number 8 and line number 55 of VisualAITest.js
And for TraditionalTests.js it is on line number 4 and 81.

How to run test from CLI:
Traditional Test:
npx cypress run --spec "cypress/integration/TraditionalTests.js"

Visual Grid AI Test:
npx cypress run --spec "cypress/integration/VisualAITests.js"

Two test scripts file locaton=>
1. cypress/integration/TraditionalTests.js
2. cypress/integration/VisualAITests.js