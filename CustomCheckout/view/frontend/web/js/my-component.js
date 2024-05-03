define([
    'uiComponent',
    'Magento_Customer/js/model/customer'
], function (Component, customer) {
    'use strict';

    return Component.extend({
        initialize: function () {
            this._super();
            this.isLoggedIn = customer.isLoggedIn;
            this.username = customer.customerData.firstname; // Для вывода имени пользователя
        }
    });
});
