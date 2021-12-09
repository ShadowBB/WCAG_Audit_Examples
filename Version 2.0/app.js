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
                    description: '1.1.1 passed example',
                    img: 'awdwada',
                },
            ],

            unclear: [
                {
                    description: 'Op deze pagina is dit niet duidelijk.... *link*'
                },
            ]
        }
    },
    {
        title: 'SC 1.2.1 Audio-only and Video-only',
        examples: {
            failed: [
                {
                    description: 'Failed 1.2.1 example #1'
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

module.exports = data;