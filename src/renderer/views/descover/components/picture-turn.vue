<template>
	<div class="swiper-container" id="sheetSwiper">
	  <div class="swiper-wrapper">
	    <div class="swiper-slide" ontouchstart="this.classList.toggle('hover');" v-for="i in 10">
				<div class="container">
					<div class="front">
						<div class="inner">
							<span>信息信息信息信息信息信息信息信息信息信息信息信息</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">具体内容</div>
					</div>
				</div>
			</div>
	  </div>
	</div>
</template>

<script>
import Swiper from 'swiper';
export default {
	mounted() {
		new Swiper ('#sheetSwiper', {
			slidesPerView: 'auto',
			spaceBetween: 30
		})
	}
}
</script>

<style scoped="scoped" lang="less">
	.swiper-container{
		width: 100%;
		padding: 20px 0;
	}
	.swiper-slide{
		width: 150px;
	}
	.container{
	  -webkit-transform-style: preserve-3d;
	          transform-style: preserve-3d;
		-webkit-perspective: 1000px;
		        perspective: 1000px;
	}
	
	.front,
	.back{
	  background-size: cover;
		background-position: center;
		-webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
		-o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
		-webkit-backface-visibility: hidden;
		        backface-visibility: hidden;
		text-align: center;
		// min-height: 280px;
		height: 150px;
		border-radius: 10px;
		color: #fff;
	}
	
	.back{
	  background: #cedce7;
	  background: -webkit-linear-gradient(45deg,  #cedce7 0%,#596a72 100%);
	  background: -o-linear-gradient(45deg,  #cedce7 0%,#596a72 100%);
	  background: linear-gradient(45deg,  #cedce7 0%,#596a72 100%);
	}
	
	.front:after{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		content: '';
		display: block;
		opacity: .6;
		-webkit-backface-visibility: hidden;
						backface-visibility: hidden;
		border-radius: 10px;
		background-image: url(../../../../../static/image/11.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.container:hover .front,
	.container:hover .back{
	    -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
	    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
	    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
	    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
	    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
	}
	
	.back{
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	}
	
	.inner{
	    position: absolute;
			bottom: 10px;
	    left: 0;
	    width: 100%;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    outline: 1px solid transparent;
	    -webkit-perspective: inherit;
	    perspective: inherit;
	    z-index: 2;
			display: -webkit-box;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			padding: 0 7px;
	}
	
	.container .back{
	    -webkit-transform: rotateY(180deg);
	            transform: rotateY(180deg);
	    -webkit-transform-style: preserve-3d;
	            transform-style: preserve-3d;
	}
	
	.container .front{
	    -webkit-transform: rotateY(0deg);
	            transform: rotateY(0deg);
	    -webkit-transform-style: preserve-3d;
	            transform-style: preserve-3d;
	}
	
	.container:hover .back{
	  -webkit-transform: rotateY(0deg);
	          transform: rotateY(0deg);
	  -webkit-transform-style: preserve-3d;
	          transform-style: preserve-3d;
	}
	
	.container:hover .front{
	  -webkit-transform: rotateY(-180deg);
	          transform: rotateY(-180deg);
	  -webkit-transform-style: preserve-3d;
	          transform-style: preserve-3d;
	}
	
	
	.front .inner span{
	  color: rgba(255,255,255,0.7);
	  font-weight: 300;
	}
	
	@media screen and (max-width: 64rem){
	  .col{
	    width: calc(33.333333% - 2rem);
	  }
	}
	
	@media screen and (max-width: 48rem){
	  .col{
	    width: calc(50% - 2rem);
	  }
	}
	
	@media screen and (max-width: 32rem){
	  .col{
	    width: 100%;
	    margin: 0 0 2rem 0;
	  }
	}
</style>
