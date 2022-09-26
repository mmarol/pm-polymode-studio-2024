<?php


$context          = Timber::context();
$context['page'] = Timber::get_post();

$templates        = array('page-poetic-research.twig');

Timber::render($templates, $context);
