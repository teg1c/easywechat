<?php

declare(strict_types=1);

namespace EasyWeChat\Work\Invoice;

use EasyWeChat\Kernel\BaseClient;

class Client extends BaseClient
{
    /**
     * @param string $cardId
     * @param string $encryptCode
     *
     * @return array|\EasyWeChat\Kernel\Support\Collection|object|\Psr\Http\Message\ResponseInterface|string
     *
     * @throws \EasyWeChat\Kernel\Exceptions\InvalidConfigException
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function get(string $cardId, string $encryptCode)
    {
        $params = [
            'card_id' => $cardId,
            'encrypt_code' => $encryptCode,
        ];

        return $this->httpPostJson('cgi-bin/card/invoice/reimburse/getinvoiceinfo', $params);
    }

    /**
     * @param array $invoices
     *
     * @return array|\EasyWeChat\Kernel\Support\Collection|object|\Psr\Http\Message\ResponseInterface|string
     *
     * @throws \EasyWeChat\Kernel\Exceptions\InvalidConfigException
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function select(array $invoices)
    {
        $params = [
            'item_list' => $invoices,
        ];

        return $this->httpPostJson('cgi-bin/card/invoice/reimburse/getinvoiceinfobatch', $params);
    }

    /**
     * @param string $cardId
     * @param string $encryptCode
     * @param string $status
     *
     * @return array|\EasyWeChat\Kernel\Support\Collection|object|\Psr\Http\Message\ResponseInterface|string
     *
     * @throws \EasyWeChat\Kernel\Exceptions\InvalidConfigException
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function update(string $cardId, string $encryptCode, string $status)
    {
        $params = [
            'card_id' => $cardId,
            'encrypt_code' => $encryptCode,
            'reimburse_status' => $status,
        ];

        return $this->httpPostJson('cgi-bin/card/invoice/reimburse/updateinvoicestatus', $params);
    }

    /**
     * @param array  $invoices
     * @param string $openid
     * @param string $status
     *
     * @return array|\EasyWeChat\Kernel\Support\Collection|object|\Psr\Http\Message\ResponseInterface|string
     *
     * @throws \EasyWeChat\Kernel\Exceptions\InvalidConfigException
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function batchUpdate(array $invoices, string $openid, string $status)
    {
        $params = [
            'openid' => $openid,
            'reimburse_status' => $status,
            'invoice_list' => $invoices,
        ];

        return $this->httpPostJson('cgi-bin/card/invoice/reimburse/updatestatusbatch', $params);
    }
}
