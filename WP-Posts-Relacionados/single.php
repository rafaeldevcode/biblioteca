<?php 
    $posts = ['9040', '9010'];
    $post_id = get_post()->ID;

    if(in_array($post_id, $posts)){
        $randomPost = $wpdb->get_var("SELECT guid FROM $wpdb->posts WHERE post_type = ‘post’ AND post_status = ‘publish’ ORDER BY rand() LIMIT 1");
        $categories = get_the_category($post->ID);
        if ($categories) {
            $category_ids = array();
            foreach($categories as $individual_category) $category_ids[] = $individual_category->term_id;
                $args=array(
                    "category__in"    => $category_ids,
                    "post__not_in"    => array($post->ID),
                    "showposts"       => 3,
                    "caller_get_posts"=> 1
                );
                $my_query = new wp_query($args);
                if( $my_query->have_posts() ) { ?>
                    <section class="posts-relacionados"> 
                        <p>Posts Relacionados</p>
                                
                        <div class="post-relacionado">
                            <?php while ($my_query->have_posts()) {
                                $my_query->the_post(); ?>
                                    <a href="<?php the_permalink() ?>">
                                        <div class="post-image" style="background-image: url('<?php the_post_thumbnail_url(); ?>')">
                                
                                        </div>
                                        <p><?php the_title(); ?></p>
                                    </a>
                            <?php } ?>
                        </div>
                    </section>
                <?php }
        }
    }
?>