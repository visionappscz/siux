<?php

$app = new Silex\Application;

$app->register(new Silex\Provider\SessionServiceProvider);
$app->register(new Silex\Provider\UrlGeneratorServiceProvider);
$app->register(new Silex\Provider\TwigServiceProvider, ['twig.path' => __DIR__ . '/../views']);

$app->get('/', function () use ($app) {
    return $app['twig']->render('index.html.twig');
});

$app->get('/{page}', function ($page) use ($app) {
    $template = $page . '.html.twig';
    if (!file_exists($app['twig.path'] . '/' . $template)) {
        $app->abort(404, 'Requested page not found.');
    }
    return $app['twig']->render($template);
});

return $app;
