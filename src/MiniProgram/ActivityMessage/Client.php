<?php

declare(strict_types=1);

namespace EasyWeChat\MiniProgram\ActivityMessage;

use EasyWeChat\Kernel\BaseClient;
use EasyWeChat\Kernel\Exceptions\InvalidArgumentException;

class Client extends BaseClient
{
    /**
     * @return \Psr\Http\Message\ResponseInterface|\EasyWeChat\Kernel\Support\Collection|array|object|string
     *
     * @throws \EasyWeChat\Kernel\Exceptions\InvalidConfigException
     */
    public function createActivityId()
    {
        return $this->httpGet('cgi-bin/message/wxopen/activityid/create');
    }

    /**
     * @param string $activityId
     * @param int    $state
     * @param array  $params
     *
     * @return \Psr\Http\Message\ResponseInterface|\EasyWeChat\Kernel\Support\Collection|array|object|string
     *
     * @throws \EasyWeChat\Kernel\Exceptions\InvalidArgumentException
     * @throws \EasyWeChat\Kernel\Exceptions\InvalidConfigException
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function updateMessage(string $activityId, int $state = 0, array $params = [])
    {
        if (!in_array($state, [0, 1], true)) {
            throw new InvalidArgumentException('"state" should be "0" or "1".');
        }

        $params = $this->formatParameters($params);

        $params = [
            'activity_id' => $activityId,
            'target_state' => $state,
            'template_info' => ['parameter_list' => $params],
        ];

        return $this->httpPostJson('cgi-bin/message/wxopen/updatablemsg/send', $params);
    }

    /**
     * @param array $params
     *
     * @return array
     *
     * @throws \EasyWeChat\Kernel\Exceptions\InvalidArgumentException
     */
    protected function formatParameters(array $params)
    {
        $formatted = [];

        foreach ($params as $name => $value) {
            if (!in_array($name, ['member_count', 'room_limit', 'path', 'version_type'], true)) {
                continue;
            }

            if ('version_type' === $name && !in_array($value, ['develop', 'trial', 'release'], true)) {
                throw new InvalidArgumentException('Invalid value of attribute "version_type".');
            }

            $formatted[] = [
                'name' => $name,
                'value' => strval($value),
            ];
        }

        return $formatted;
    }
}
