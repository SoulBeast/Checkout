<?php declare(strict_types = 1);

namespace Macademy\CustomCheckout\Setup\Patch\Data;

use MarkShust\SimpleData\Setup\Patch\SimpleDataPatch;

class BlockFulfillmentStatusCreate extends SimpleDataPatch
{
    public function apply(): self
    {
        $this->block->save([
            'identifier' => 'fulfillment_status',
            'title' => 'Fulfillment Status',
            'content' => <<<CONTENT
    <style>#html-body [data-pb-style=U2O5234]{justify-content:flex-start;display:flex;flex-direction:column;background-position:left top;background-size:cover;backgrou
    CONTENT,
            ]);
        return $this;
    }
}
