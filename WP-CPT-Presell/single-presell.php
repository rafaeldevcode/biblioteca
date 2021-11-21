<?php
    get_header();

    $args = array(
        'post_type'      => 'presell',
        'post_status'    => 'publish',
        'posts_per_page' => 1,
        'tax_query' => 'categorias'
    );

    $query = new WP_Query( $args );
    
            the_post();
            
            get_template_part('template/content', 'presell');
                

    get_footer();
    ?>