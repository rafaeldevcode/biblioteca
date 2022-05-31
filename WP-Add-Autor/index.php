<!-- /* Add Post Date And Author After Article */ -->
<?php
    function add_date_after_article() {
        $single = JNews\Single\SinglePost::getInstance();
        ?>

        <div class="jeg_meta_container">
            <div class="jeg_post_meta jeg_post_meta_1">
                <div class="meta_left">
                    <div class="jeg_meta_author">
                        <?php $email = get_the_author_email(); $grav_url = "http://www.gravatar.com/avatar.php?gravatar_id=".md5($email); 
                            $usegravatar = get_option('woo_gravatar'); ?>
                            <img src="<?php echo $grav_url; ?>" alt="<?php the_author(); ?>" width="80" height="80">
                        <span class="meta_text">por</span>
                        <a> <?php the_author(); ?> </a>
                    </div>
                </div>
                
                <div class="meta_rigth">
                    <div class="jeg_meta_date">
                        <a><?php echo esc_html( $single->post_date_format( get_post())); ?></a>
                    </div>
                </div>
            </div>
        </div>
        <?php
    }
    add_action( 'jnews_source_via_single_post', 'add_date_after_article' );
?>
<!-- /* Add Post Date And Author After Article End */ -->