<?php

use Silex\Application,
    Silex\Provider\TwigServiceProvider,
    Silex\Provider\SessionServiceProvider;


$app = new Application;

// Register providers
$app->register(new SessionServiceProvider);
$app->register(new TwigServiceProvider, ['twig.path' => __DIR__ . '/../views']);

// Page rendering
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
