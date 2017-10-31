'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

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
