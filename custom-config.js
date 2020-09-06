'use strict';

module.exports = {

    extends: 'lighthouse:default',

    passes: [{
        passName: 'defaultPass',
        gatherers: [
            'ratp-lighthouse-recipe/card-gatherer'
        ]
    }],

    audits: [
        'ratp-lighthouse-recipe/card-audit'
    ],

    categories: {
        ratp_pwa: {
            name: 'Ratp pwa metrics',
            description: 'Metrics for the ratp timetable site',
            auditRefs: [
                { id: 'card-audit', weight: 1 }
            ]
        }
    }
};