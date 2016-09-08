<?php
    $offset = intval( $_GET['offset'] );
    // $photos = extra_instagram_photos( $offset );
	if ( empty( $photos ) )
		return;

    $count_items = $photos['count_items'];
    unset( $photos['count_items'] );
?>
<a href="#" rel="<?php echo esc_attr( $count_items ); ?>" class="extra_more_response_count" style="display:none;"></a>  

<?php foreach( $photos as $photo ): ?>
    <?php
    $panel_classes = array('panel');
    $img = $photo->images->low_resolution->url;
    $validate_img = get_headers($img);
    $validator = $validate_img[0];
    $error = 'Forbidden';
    $link = $photo->link;
    $alt = ( ! empty( $photo->caption->text ) ) ? $photo->caption->text : '';
    
    if( strpos($validator, $error) == 0){
    ?>
    <li class="<?php echo esc_attr(implode(' ', $panel_classes)); ?> t2carousel_<?php echo esc_attr($panel_index); ?>">
        <a href="<?php echo esc_url( $link ); ?>">
            <div id="carouselT2-image">
                <img src="<?php echo esc_url($img); ?>" alt="<?php echo esc_attr($alt); ?>" />
            </div>
        </a>
    </li>
    <?php
    }
endforeach;?>
