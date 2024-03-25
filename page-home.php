<?php

$args = array(
    'post_type'         => array('project', 'learning-opportunity'),
    'posts_per_page'    => -1,
    'orderby'           => 'date',
    'order'             => 'ASC'
);

$context                = Timber::context();
$context['page']        = Timber::get_post();
$context['relations']   = Timber::get_posts(get_field('projects_and_learning_opportunities'));

$templates        = array('page-home.twig');

Timber::render($templates, $context);
