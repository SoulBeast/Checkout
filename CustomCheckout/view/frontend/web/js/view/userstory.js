define([
    'uiComponent',
    'ko',
    'Magento_Checkout/js/model/step-navigator',
    'mage/translate',
    'underscore',
    'Magento_Checkout/js/model/quote',
    'Magento_Customer/js/model/customer',
    'jquery',
], function(
    Component,
    ko,
    stepNavigator,
    $t,
    _,
    quote,
    customer,
    $,
) {
    'use strict';
    return Component.extend({
        defaults: {
            template: 'Macademy_CustomCheckout/userstory',
            isVisible: ko.observable(true),
        },
        quoteIsVirtual: quote.isVirtual(),
        initialize: function() {
            this._super();
            stepNavigator.registerStep(
                'userstory',
                null,
                $t('Userstory'),
                this.isVisible,
                _.bind(this.navigate, this),
                this.sortOrder
            );
            return this;
        },
        navigate: function() {
            this.isVisible(true);
        },
        navigateToNextStep: function() {
            stepNavigator.next();
        }
    });
});
