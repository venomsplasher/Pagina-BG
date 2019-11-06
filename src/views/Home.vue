<template>
  <div class="home">
    <div class="container" >
      <div>
        <b-carousel
          id="carousel-no-animation"
          style="text-shadow: 0px 0px 2px #000"
          no-animation
          indicators
          img-width="555"
          img-height="480"
        >
          <b-carousel-slide
            caption="First slide"
           
            :img-src="require('@/assets/imagenes/auris.webp')"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Second Slide"
            img-src="https://images.philips.com/is/image/PhilipsConsumer/SHB3075BK_00-IMS-es_AR?$jpglarge$&wid=1250"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Third Slide"
            img-src="https://www.netcomaccesorios.com/344-large_default/teclado-redragon-dyaus-k509.jpg"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Fourth Slide"
            img-src="https://www.bringerihogar.com.ar/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/p/a/panoramic_6915.png"
          ></b-carousel-slide>
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
}
</script>
