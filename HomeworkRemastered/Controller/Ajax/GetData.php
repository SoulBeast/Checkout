<?php

namespace Macademy\HomeworkRemastered\Controller\Ajax;

use Magento\Framework\App\Action\Action;
use Magento\Framework\App\Action\Context;
use Macademy\HomeworkRemastered\Helper\Data;
use Magento\Framework\Controller\Result\JsonFactory;

class GetData extends Action
{
    protected $dataHelper;
    protected $resultJsonFactory;

    public function __construct(
        Context     $context,
        Data        $dataHelper,
        JsonFactory $resultJsonFactory
    )
    {
        $this->dataHelper = $dataHelper;
        $this->resultJsonFactory = $resultJsonFactory;
        parent::__construct($context);
    }

    public function execute()
    {
        $value = $this->dataHelper->getQuantityOfProductInCard(); // Метод из вашего Helper/Data.php
        $result = $this->resultJsonFactory->create();
        return $result->setData(['value' => $value]);
    }

}
