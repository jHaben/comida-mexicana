<template>
    <v-container>
        <v-card class="mx-auto" max-width="400" color="primary" elevation="8">

            <div v-if="recipe">
                <v-img max-height="400" :src="recipe.image" alt="recipe image" cover></v-img>

                <v-card-text style="font-size: 22px; font-weight: bold">
                    {{ recipe.title }}
                </v-card-text>

                <v-card-text style="font-size: 18px;">
                    {{ recipe.description }}
                </v-card-text>
                <v-card-title>
                    {{ recipe.difficulty }}
                </v-card-title>
                <v-card-title>
                    {{ recipe.portion }}
                </v-card-title>
                <v-card-text>
                    {{ recipe.time }}
                </v-card-text>
                <v-card-actions>
                    <v-row>

                        <v-col class="d-flex justify-center">

                            <v-btn color="secondary" variant="elevated" @click="show = !show">
                                Recipe
                                <v-icon>
                                    {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                                </v-icon>
                            </v-btn>
                        </v-col>

                    </v-row>


                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>
                        <v-sheet rounded color="white" class="ma-3">
                            <v-card-text>
                                <div class="mt-2" style="font-size: 18px;" v-for="(ingredient, index) in recipe.ingredients"
                                    :key="index">
                                    <span style="font-weight: bold;"> -</span> {{ ingredient }}
                                </div>

                            </v-card-text>
                            <v-card-text style="font-size: 18px;">
                                <div v-for="(step, index) in recipe.method" :key="index">
                                    <div v-for="(instruction, key) in step" :key="key">
                                        <div style="font-weight: bold; text-align: center;">{{ key }}:</div> {{ instruction
                                        }}
                                    </div>
                                </div>
                            </v-card-text>
                        </v-sheet>
                    </div>
                </v-expand-transition>
            </div>
            <div v-else>
                <v-row>
                    <v-col class="d-flex justify-center ma-4">
                        <v-progress-circular :size="50" color="secondary" indeterminate></v-progress-circular>
                    </v-col>
                </v-row>
            </div>
        </v-card>
    </v-container>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

let show = ref(false);
const recipe = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get('https://p1t6tahkz0.execute-api.us-east-1.amazonaws.com/mexican');
        recipe.value = JSON.parse(response.data.body);
    } catch (error) {
        console.error(error);
    }
});



</script>
  
<style>
/* Add any styles here */
</style>
