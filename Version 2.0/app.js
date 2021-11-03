// define list element

const list = document.querySelector('.criterium-list');

// WCAG data

const data = [

    {
        title: 'SC 1.1.1 Non-text Content',
        examples: {
            failed: [
                {
                    description: 'This image has no text alternative'
                },
                {
                    description: 'Usage of title is not allowed',
                },
            ],

            passed: [
                {
                    description: '1.1.1 passed example'
                },
            ],

            unclear: [
                {
                    description: ''
                },
            ]
        }
    },
    {
        title: 'SC 1.2.1 Audio-only and Video-only',
        examples: {
            failed: [
                {
                    description: 'Failed 1.2.1 example #1   '
                },
            ],

            passed: [
                {
                    description: '1.2.1 passed example'
                },
            ],

            unclear: [
                {
                    description: ''
                },
            ]
        }
    },
];

// dynamically generated list based on data

const renderList = data.map((listItem, index) => {
    const listElement = document.createElement('li');
    listElement.dataset.chapter = index;
    const button = document.createElement('button');
    button.classList.add('js-context-toggle');
    button.innerHTML = listItem.title;
    listElement.append(button)
    list.append(listElement);
});

// hooks

const navigationButton = document.querySelectorAll('.js-context-toggle');
const passedExample = document.querySelectorAll('.passed-example');
const failedExample = document.querySelectorAll('.failed-example');
const criterionName = document.querySelector('.criterion-name');

// change content

navigationButton.forEach(button => {
    button.addEventListener('click', () => {
        let index = button.parentElement.dataset.chapter;

        console.log(failedExample)
        console.log(passedExample[0]);
        passedExample[0].innerHTML = data[index].examples.passed[0].description;
        criterionName.innerHTML = data[index].title;

    })
})
