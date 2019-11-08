<template>
  <div class="home">
    <div>
      <div class="container">
            <b-carousel
            id="carousel-w-animation"
            v-model="slide"
            :interval="4000"
            controls
            style="text-shadow: 0px 0px 2px #000"
            indicators
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
            img-width="100%"
            >
              <b-carousel-slide
                :img-src="require('@/assets/Carousel/001.jpg')"
              ></b-carousel-slide>
              <b-carousel-slide
                :img-src="require('@/assets/Carousel/002.jpg')"
              ></b-carousel-slide>
              <b-carousel-slide
                :img-src="require('@/assets/Carousel/003.jpg')"
              ></b-carousel-slide>
              <b-carousel-slide
                :img-src="require('@/assets/Carousel/004.jpg')"
              ></b-carousel-slide>
              <b-carousel-slide
                :img-src="require('@/assets/Carousel/005.jpg')"
              ></b-carousel-slide> 
          <!-- <b-carousel-slide
            img-src="https://www.microassist.com/wp-content/uploads/2017/01/business-woman-working-on-laptop-in-her-office-picjumbo-com-banner-1200x400.jpg"
          img-width="100"
          img-height="100"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="http://www.certifsa.com/wp-content/uploads/2018/08/e83db40c2bf4043ecd0b4204e2445b97e674e6d11db3114195_1920-1200x400.jpg"
          img-width="100"
          img-height="100"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://www.microassist.com/wp-content/uploads/2017/01/MG_7811-roomrentalblog-banner-1200x400.jpg"
          img-width="100"
          img-height="100"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://www.port.ac.uk/-/media/images/heros---1200x400-large---640x400-small/courses/ug-courses/forensic_psychology_1200x400.ashx"
          img-width="100"
          img-height="100"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://kidsbestprice.com/wp-content/uploads/2019/05/IMG_3364-1200x400.jpg"
            img-width="100"
          img-height="100"
        ></b-carousel-slide> -->
            </b-carousel>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// In your VueJS component.
import { VueperSlides, VueperSlide } from 'vueperslides'

// Since v. 1.6.0, you need to include Vueper Slides CSS file for default styles.
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'home',
  components: {
    
    VueperSlides, 
    VueperSlide
  },
  data: () => ({
    slides: [
      { title: 'Mountain 1', content: 'Slide content 1', link: '#link-to-article-1',
      image: require('@/assets/imagenes/auris.webp') },
      
    ]
  }),
  methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>
