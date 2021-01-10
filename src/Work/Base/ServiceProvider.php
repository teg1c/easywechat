<?php

declare(strict_types=1);

namespace EasyWeChat\Work\Base;

use Pimple\Container;
use Pimple\ServiceProviderInterface;

class ServiceProvider implements ServiceProviderInterface
{
    /**
     * @param Container $app
     */
    public function register(Container $app)
    {
        $app['base'] = function ($app) {
            return new Client($app);
        };
    }
}
