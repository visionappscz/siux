<?php

namespace Siux;

class Filters extends \Twig_Extension
{
    public function getName()
    {
        return 'filters';
    }

    public function getFilters()
    {
        return [
            'url' => new \Twig_SimpleFilter('url', [$this, 'urlFilter'])
        ];
    }

    public function urlFilter($slug, $parameters = null, $flashMessage = 0, $flashMessageType = 'info')
    {
        $query = '';

        if ($slug === 'index') {
            $slug = './';
        }

        if ($parameters !== null) {
            $queryParts = [];
            foreach ($parameters as $key => $value) {
                if (!in_array($key, ['flash', 'flashType'])) {
                    $queryParts[] = $key . '=' . $value;
                }
            }
            $query = '?' . implode('&', $queryParts);
        }

        $query .= ($query ? '&' : '') . 'flash=' . $flashMessage . '&flashType=' . $flashMessageType;

        return $slug . $query;
    }
}
