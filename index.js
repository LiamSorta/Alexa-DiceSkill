'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            ROLLS: [
                'You rolled a 1, critial fail!',
                'You rolled a 2.',
                'You rolled a 3.',
                'You rolled a 4.',
                'You rolled a 5.',
                'You rolled a 6.',
                'You rolled a 7.',
                'You rolled a 8.',
                'You rolled a 9.',
                'You rolled a 10.',
                'You rolled a 11.',
                'You rolled a 12.',
                'You rolled a 13.',
                'You rolled a 14.',
                'You rolled a 15.',
                'You rolled a 16.',
                'You rolled a 17.',
                'You rolled a 18.',
                'You rolled a 19.',
                'You rolled a 20, critical success!'
            ],
            SKILL_NAME: 'D20',
            GET_ROLL_MESSAGE: "You roll the dice: ",
            HELP_MESSAGE: 'Here you can tell me to roll a D20, say "Rool Dice" to get started.',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-GB': {
        translation: {
            ROLLS: [
                'You rolled a 1, critial fail!',
                'You rolled a 2.',
                'You rolled a 3.',
                'You rolled a 4.',
                'You rolled a 5.',
                'You rolled a 6.',
                'You rolled a 7.',
                'You rolled a 8.',
                'You rolled a 9.',
                'You rolled a 10.',
                'You rolled a 11.',
                'You rolled a 12.',
                'You rolled a 13.',
                'You rolled a 14.',
                'You rolled a 15.',
                'You rolled a 16.',
                'You rolled a 17.',
                'You rolled a 18.',
                'You rolled a 19.',
                'You rolled a 20, critical success!'
            ],
            SKILL_NAME: 'D20',
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
