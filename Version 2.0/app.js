const list = document.querySelector('.criterium-list');

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
                    description: 'Image has a text alternative'
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
                    description: 'This image has no text alternative'
                },
                {
                    description: 'Usage of title is not allowed'
                },
            ],

            passed: [
                {
                    description: 'Image has a text alternative'
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

const renderList = data.map((listItem, index) => {
    const listElement = document.createElement('li');
    listElement.dataset.test = index;
    const button = document.createElement('button');
    button.innerHTML = listItem.title;
    listElement.append(button)
    list.append(listElement);
});



