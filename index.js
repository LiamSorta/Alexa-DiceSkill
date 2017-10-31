'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            ROLLS: [
                '1, critial fail!',
                '2.',
                '3.',
                '4.',
                '5.',
                '6.',
                '7.',
                '8.',
                '9.',
                '10.',
                '11.',
                '12.',
                '13.',
                '14.',
                '15.',
                '16.',
                '17.',
                '18.',
                '19.',
                '20, critical success!'
            ],
            SKILL_NAME: 'D20',
            GET_ROLL_MESSAGE: "You roll the dice: You rolled a ",
            HELP_MESSAGE: 'Here you can tell me to roll a D20, say "Rool Dice" to get started.',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-GB': {
        translation: {
            ROLLS: [
                '1, critial fail!',
                '2.',
                '3.',
                '4.',
                '5.',
                '6.',
                '7.',
                '8.',
                '9.',
                '10.',
                '11.',
                '12.',
                '13.',
                '14.',
                '15.',
                '16.',
                '17.',
                '18.',
                '19.',
                '20, critical success!'
            ],
            SKILL_NAME: 'D20',
        },
    },
    'de-DE': {
        translation: {
            ROLLS: [
                '1, Großer Fehler',
                '2.',
                '3.',
                '4.',
                '5.',
                '6.',
                '7.',
                '8.',
                '9.',
                '10.',
                '11.',
                '12.',
                '13.',
                '14.',
                '15.',
                '16.',
                '17.',
                '18.',
                '19.',
                '20, Großer Gewinn!'
            ],
            SKILL_NAME: 'D20',
            GET_ROLL_MESSAGE: "Du wirfst die Würfel: Du hast einen Würfel geworfen",
            HELP_MESSAGE: 'Hier kannst du mir sagen, dass ich eine D20 würfeln soll, sagen wir"Roll Dice", um loszulegen.',
            HELP_REPROMPT: 'Womit kann ich dir helfen?',
            STOP_MESSAGE: 'Auf Wiedersehen!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetRoll');
    },
    'GetNewRollIntent': function () {
        this.emit('GetRoll');
    },
    'GetRoll': function () {
        const rollArr = this.t('ROLLS');
        const rollIndex = Math.floor(Math.random() * rollArr.length);
        const randomRoll = rollArr[rollIndex];

        const speechOutput = this.t('GET_ROLL_MESSAGE') + randomRoll;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomRoll);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
