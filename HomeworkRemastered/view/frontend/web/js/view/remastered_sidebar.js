define([
    'uiComponent',
    'ko',
    'jquery',
    'mage/url',
    'Magento_Customer/js/customer-data'
], function (Component, ko, $, urlBuilder, customerData) {
    'use strict';

    return Component.extend({
        initialize: function () {
            this._super();
            this.getData();
            this.getQuantityOfProductInCard = ko.observable('');
        },

        defaults: {
            cart: customerData.get('cart'),
        },

        getData: function () {
            let self = this;
            $.ajax({
                url: urlBuilder.build('homeworkremastered/ajax/getdata'),
                method: 'GET',
                dataType: 'json',
                success: function (response) {
                    self.getQuantityOfProductInCard(response.value);
                },
                error: function () {
                    // Обработка ошибок
                }
            });
        },

        getCartTotal: function () {
            const cart = this.cart();

            let totalCount = 0;

            cart.items.forEach(function(item) {
                totalCount += item.qty;
            });

            if (cart && cart.subtotal) {
                let subtotal = parseFloat(cart.subtotal.replace(/[^\d.]/g, ''));
                if (!isNaN(subtotal)) {
                    let remaining = 100 - subtotal;
                    if (remaining > 0 && this.getQuantityOfProductInCard() < totalCount) {
                        return `Добавьте в корзину товаров на сумму ${remaining.toFixed(2)}$, чтобы получить промокод на скидку 10% на весь заказ.`;
                    } else if (this.getQuantityOfProductInCard() > totalCount) {
                        return `Товаров в корзне не достаточно для получение промокода.`
                    }
                    else {
                        return "Поздравляем! Используйте промокод <strong>GET100</strong>, чтобы получить скидку 10% на весь заказ";
                    }
                }
            }

            return 0;
        }
    });
});
