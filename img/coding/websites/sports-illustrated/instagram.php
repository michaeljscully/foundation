<script id="si-instagram-metadata" type="text/javascript">

var si_instagram = <? echo json_encode($photos); ?>;

</script>

<a name=""></a>
<section id="instagram-extra">
	
	<h2>
		<a href="#">Instagram</a>
		<span></span>
	</h2>
	
	<h6>
		<a href="#" class="prev">Previous</a>
		<a href="#" class="next">Next</a>
	</h6>
	
	<hr/>
	
	<div class="swipe3">
		<ul class="panels" id="extra-carousel-instagram">
			<?php
			foreach($photos as $index => $photo) {
				?>
				<li class="panel" id="t2carousel_<?php echo esc_attr($index); ?>">
					<a href="<?php echo esc_url($photo['link']); ?>">
						<img src="<?php echo esc_url($photo['photo']); ?>" alt="<?php echo esc_attr($photo['alt']); ?>" />		
					</a>
				</li>

				<?php
				if($index >= 9) {
					break;
				}
			}
			if(count($photos) > 9) {
				?>
				<li class="panel" id="extra-load-more-carousel-instagram">
					<a href="#" rel="0">
						<img src="<?php echo get_template_directory_uri('/img/end-carousel-arrow.png'); ?>" alt="More Instagram" />
						<h5>More Instagram &raquo;</h5>
					</a>
				</li>
				<?php 
			}
			?>
		</ul>
	</div>
	
</section>