<?php

declare(strict_types=1);

namespace EasyWeChat\MiniProgram\Mall;

use EasyWeChat\Kernel\BaseClient;

class OrderClient extends BaseClient
{
    /**
     * 导入订单.
     *
     * @param array $params
     * @param bool  $isHistory
     *
     * @return array|\EasyWeChat\Kernel\Support\Collection|object|\Psr\Http\Message\ResponseInterface|string
     *
     * @throws \EasyWeChat\Kernel\Exceptions\InvalidConfigException
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function add($params, $isHistory = false)
    {
        return $this->httpPostJson('mall/importorder', $params, ['action' => 'add-order', 'is_history' => (int) $isHistory]);
    }

    /**
     * 导入订单.
     *
     * @param array $params
     * @param bool  $isHistory
     *
     * @return mixed
     *
     * @throws \EasyWeChat\Kernel\Exceptions\InvalidConfigException
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function update($params, $isHistory = false)
    {
        return $this->httpPostJson('mall/importorder', $params, ['action' => 'update-order', 'is_history' => (int) $isHistory]);
    }

    /**
     * 删除订单.
     *
     * @param string $openid
     * @param string $orderId
     *
     * @return mixed
     *
     * @throws \EasyWeChat\Kernel\Exceptions\InvalidConfigException
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function delete($openid, $orderId)
    {
        $params = [
            'user_open_id' => $openid,
            'order_id' => $orderId,
        ];

        return $this->httpPostJson('mall/deleteorder', $params);
    }
}
