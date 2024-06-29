<template>
        <v-card class="ma-2" max-width="400"  color="primary" elevation="8">

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
                        <v-row>
                            <v-spacer />
                         <!--   <v-col cols="auto" class="d-flex  ma-2">
                                <v-btn color="secondary" icon="mdi-printer" @click="printPage" />

                            </v-col> -->
                            <v-col cols="auto" class="d-flex  ma-2">
                                <v-btn color="secondary" icon="mdi-download" @click="saveAsPDF" />

                            </v-col>
                            <v-col cols="auto" class="d-flex  ma-2">

                                <div class="d-flex justify-space-around">
                                    <v-menu>

                                        <template v-slot:activator="{ props }">
                                            <v-btn color="secondary" v-bind="props" icon="mdi-share" />
                                        </template>
                                        <v-list style="background-color: #73cb2b;">
                                       
                                            <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                                                <v-icon size="40" :icon="item.icon" @click="item.share"></v-icon>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </div>
                            </v-col>
                            <v-spacer />
                        </v-row>
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


</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import jsPDF from 'jspdf';



// Share functions
const shareToFacebook = () => {
    const url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href);
    window.open(url, '_blank');
}

const shareToTwitter = () => {
    const url = 'https://twitter.com/share?url=' + encodeURIComponent(window.location.href);
    window.open(url, '_blank');
}

const shareToLinkedIn = () => {
    const url = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(window.location.href);
    window.open(url, '_blank');
}

// Data
const items = ref([
    { icon: 'mdi-facebook', share: shareToFacebook },
    { icon: 'mdi-twitter', share: shareToTwitter },
    { icon: 'mdi-linkedin', share: shareToLinkedIn },
])


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


const saveAsPDF = () => {
    const pdf = new jsPDF();

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const marginLeft = 10;
    const marginRight = 10;
    const marginTop = 10;
    const marginBottom = 10;
    const usableWidth = pageWidth - marginLeft - marginRight;
    const lineHeight = 7; // This is the approximate line height for the default font size

    // Start the Y position at the top margin
    let y = marginTop;

    // Format the recipe data into a string
    let recipeText = `Title: ${recipe.value.title}\n\nDescription: ${recipe.value.description}\n\nDifficulty: ${recipe.value.difficulty}\n\nPortion: ${recipe.value.portion}\n\nTime: ${recipe.value.time}\n\n`;

    recipeText += 'Ingredients:\n';
    recipe.value.ingredients.forEach((ingredient) => {
        recipeText += `- ${ingredient}\n`;
    });

    recipeText += '\nMethod:\n\n';
    recipe.value.method.forEach((step) => {


        Object.entries(step).forEach(([key, instruction]) => {
            // Wrap the instruction text
            const instructionLines = pdf.splitTextToSize(instruction, usableWidth);
            recipeText += `${key}:\n ${instructionLines.join("\n")}`;
        });

        recipeText += '\n\n';
    });

    // Split the entire text into lines so that it can be added to the PDF with line breaks
    const lines = pdf.splitTextToSize(recipeText, usableWidth);

    // Add the lines to the PDF one by one
    lines.forEach((line) => {
        // If adding this line would go past the bottom margin, add a new page and reset the Y position
        if (y + lineHeight > pageHeight - marginBottom) {
            pdf.addPage();
            y = marginTop;
        }

        // Add the line to the PDF
        pdf.text(line, marginLeft, y);

        // Increase the Y position for the next line
        y += lineHeight;
    });

    // Save the PDF
    pdf.save('recipe.pdf');
};


const printPage = () => {
    window.print();
};


</script>
  
<style></style>
