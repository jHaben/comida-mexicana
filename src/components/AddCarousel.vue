<!-- 
<template>
    <v-card class="ma-2 " max-width="272" max-height="300" color="primary">
        <v-carousel :show-arrows="false" cycle interval="5000">
            <v-carousel-item>
                <v-btn depressed block text :href="'https://rocasolida.tech'" target="_blank">

                    <v-sheet color="white" height="100%" min-width="272" class="d-flex flex-column align-center  ">

                        <h4 class="text-center mt-12">Juntos construimos sobre</h4>
                        <h2 class="font-weight-bold text-center mx-2">
                            <span style="color: #07689F;">ROCA</span>
                            <span style="color: #A2D5F2;">SOLIDA</span>
                            <span style="color: #07689F;">.TECH</span>
                        </h2>
                        <v-img width="50%" max-height="175" src="@/assets/brick.png" aspect-ratio="1" contain></v-img>
                    </v-sheet>
                </v-btn>

            </v-carousel-item>
            <v-carousel-item>
                <v-btn depressed block  text :href="'https://vjtotalservices.com'" target="_blank">

                    <v-sheet color="#29264a" height="100%" min-width="272" class="d-flex flex-column align-center  ">


                        <h2 class="font-weight-bold text-center mx-2">
                            <span style="color: white ;">VJ TOTAL SERVICES </span>

                        </h2>
                        <h4 class="text-center mb-2" style="color: white ;">
                            <ul>
                                <li>Taxes </li>
                                <li>Seguros</li>
                                <li>Auditorials</li>
                                <li>Real Estate</li>
                            </ul>
                        </h4>
                        <v-img width="50%" max-height="150" src="@/assets/vjlogo.png" aspect-ratio="1" contain></v-img>
                    </v-sheet>
                </v-btn>

            </v-carousel-item>

            <v-carousel-item>
                <v-btn depressed block text @click="sendEmail">>
                    <v-sheet color="primary" height="100%" min-width="272"
                        class="d-flex flex-column align-center justify-center ">


                        <h2 class="font-weight-bold text-center">
                            <span style="color: white;">ADVERTISE HERE </span>

                        </h2>

                    </v-sheet>
                </v-btn>
            </v-carousel-item>
        </v-carousel>
    </v-card>
</template>





<script setup>
import { ref } from 'vue';
import vj from '@/assets/vj.png';
import rocaSolida from '@/assets/rocaSolida.png';


// data
const adds = ref([vj, rocaSolida]);
</script> -->
<template>
    <v-card class="ma-2 " max-width="272" max-height="300" color="primary">
        <v-carousel :show-arrows="false" cycle interval="5000">
            <v-carousel-item>
                <div style="height: 100%;" @click="goToUrl('https://rocasolida.tech')">
                    <v-sheet color="white" height="100%" min-width="272" class="d-flex flex-column align-center">
                        <h4 class="text-center mt-12">Juntos construimos sobre</h4>
                        <h2 class="font-weight-bold text-center mx-2">
                            <span style="color: #07689F;">ROCA</span>
                            <span style="color: #A2D5F2;">SOLIDA</span>
                            <span style="color: #07689F;">.TECH</span>
                        </h2>
                        <v-img width="50%" max-height="175" src="@/assets/brick.png" aspect-ratio="1" contain></v-img>
                    </v-sheet>
                </div>
            </v-carousel-item>

            <v-carousel-item>
                <div style="height: 100%;" @click="goToUrl('https://vjtotalservices.com')">
                    <v-sheet color="#29264a" height="100%" min-width="272" class="d-flex flex-column align-center">
                        <h2 class="font-weight-bold text-center mx-2">
                            <span style="color: white;">VJ TOTAL SERVICES</span>
                        </h2>
                        <h4 class="text-center mb-2" style="color: white;">
                            <ul>
                                <li>Taxes</li>
                                <li>Seguros</li>
                                <li>Auditorials</li>
                                <li>Real Estate</li>
                            </ul>
                        </h4>
                        <v-img width="50%" max-height="150" src="@/assets/vjlogo.png" aspect-ratio="1" contain></v-img>
                    </v-sheet>
                </div>
            </v-carousel-item>

            <v-carousel-item>
                <div style="height: 100%;" @click="goToUrl('https://rocasolida.tech')">
                    <v-sheet color="primary" height="100%" min-width="272"
                        class="d-flex flex-column align-center justify-center">
                        <v-btn color="secondary">
                            <h2 class="font-weight-bold text-center">
                                <span >ADVERTISE HERE</span>
                            </h2>
                        </v-btn>
                    </v-sheet>
                </div>
            </v-carousel-item>
        </v-carousel>
    </v-card>
</template>
  
<script setup>



// methods
const goToUrl = (url) => {
    window.open(url);
};
const sendEmail() {
      window.location.href = 'mailto:jrhaben@gmail.com';
    },
</script>
  
