<?php

$context          = Timber::context();
$context['page']  = Timber::get_post();

Timber::render('page-about.twig', $context);
