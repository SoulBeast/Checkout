define([
    'Magento_Checkout/js/view/summary/cart-items'
], function(
    Component
) {
    'use strict';

    return Component.extend({
        isItemsBlockExpanded: function() {
            return true;
        },
        defaults: {
            template: 'Macademy_CustomCheckout/summary/cart-items'
        }
    });
});
