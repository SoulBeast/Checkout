define([
    'uiComponent',
    'ko',
    'jquery',
    'Magento_Customer/js/customer-data'
], function (Component, ko, $, customerData) {
    'use strict';

    return Component.extend({
        initialize: function () {
            this._super();
        },

        defaults: {
            cart: customerData.get('cart'),
        },

        getCartTotal: function () {

            const cart = this.cart();

            if (cart && cart.subtotal) {
                let subtotal = parseFloat(cart.subtotal.replace(/[^\d.]/g, ''));
                if (!isNaN(subtotal)) {
                    let remaining = 100 - subtotal;
                    if (remaining > 0) {
                        return `Добавьте в корзину товаров на сумму ${remaining.toFixed(2)}$, чтобы получить промокод на скидку 10% на весь заказ`;
                    } else {
                        return "Поздравляем! Используйте промокод <strong>GET100</strong>, чтобы получить скидку 10% на весь заказ";
                    }
                }
            }

            return 0;

        }

    });
});
