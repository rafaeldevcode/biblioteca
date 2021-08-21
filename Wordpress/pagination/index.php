<?php
// No arquivo functions.php
function my_pagination() {
    global $wp_query;
    
    echo paginate_links( array(
        'base' => str_replace( 9999999999999, '%#%', esc_url( get_pagenum_link( 9999999999999 ) ) ),
        'format' => '?paged=%#%',
        'current' => max( 1, get_query_var( 'paged' ) ),
        'total' => $wp_query->max_num_pages,
        'type' => 'list',
        'prev_next' => true,
        'prev_text' => 'Página Anterior',
        'next_text' => 'Próxima Página',
        'before_page_number' => '-',
        'after_page_number' => '>',
        'show_all' => false,
        'mid_size' => 3,
        'end_size' => 1,
    ) );
    }
    
    // No arquivo de listagem
    while ( have_posts() ) :
    // Conteúdo do loop
    endwhile;
    
    my_pagination();



/*<nav class="pagination">
    <a class="prev"><?php next_post_link( '%link', '<i class="fas fa-arrow-right"></i> <' ); ?></a>
    <a class="next"><?php previous_post_link( '%link', '<i class="fas fa-arrow-right"></i> >' ); ?></a>
</nav>*/
?>