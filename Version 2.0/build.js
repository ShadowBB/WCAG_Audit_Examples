
const data = require('./app.js')
const fs = require('fs');
var nunjucks = require('nunjucks');
nunjucks.configure('views', { autoescape: true });


const generatePages = data.map((successCriterion, index) => {
    console.log('---------------------------------')

    // RegEx to replace empty spaces with dashes to comply with OS naming standards

    const formattedTitle = successCriterion.title.replace(/ /g,"_")

    // define arrays and objects

    const failedExamplesArray = [];
    const passedExamplesArray = [];
    const unclearExamplesArray = [];

    const failedExamples = successCriterion.examples.failed;
    const passedExamples = successCriterion.examples.passed;
    const unclearExamples = successCriterion.examples.unclear;

    // Loop over each individual example type per succes criteria

    unclearExamples.forEach(unclearExample => {
        unclearExamplesArray.push(unclearExample.description);
    })

    passedExamples.forEach(passedExample => {
        passedExamplesArray.push(passedExample.description)
    })

    failedExamples.forEach(failedExample => {
        failedExamplesArray.push(failedExample.description);
    })

    // Pass the data to the index.html in order for nunjucks templating to work. Additionally replace the dist files on each node render command to generate new updated files that will be served to the user

    var res = nunjucks.render('index.html', { title: successCriterion.title, failedExamples: failedExamplesArray, passedExamples: passedExamplesArray, unclearExamples: unclearExamplesArray});
    fs.writeFileSync('./dist/' + formattedTitle + '.html', res);
});

