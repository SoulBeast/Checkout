<?php
namespace Macademy\HomeworkRemastered\Helper;

use Magento\Framework\App\Helper\AbstractHelper;
use Magento\Framework\App\Helper\Context;
use Magento\Framework\App\Config\ScopeConfigInterface;

class Data extends AbstractHelper
{

    /**
     * @param Context $context
     */

    public function __construct(Context $context)
    {
        parent::__construct($context);
    }

    public function isEnabled($scope = ScopeConfigInterface::SCOPE_TYPE_DEFAULT)
    {
        return $this->scopeConfig->isSetFlag(
            'perspective/general/enable',
            $scope
        );
    }

    // --- --- Get info --- --- //

    public function getQuantityOfProductInCard($scope = ScopeConfigInterface::SCOPE_TYPE_DEFAULT)
    {
        return $this->scopeConfig->getValue(
            'perspective/general/quantity_of_product_in_card',
            $scope
        );
    }
}
