  <template>
    <v-timeline align="start">
        <v-timeline-item
            v-for="(article, i) in lifeExperience"
            :key="i"
            :dot-color="article.color"
            size="small"
        >
            <template v-slot:opposite>
                <div
                    :class="`pt-1 headline font-weight-bold text-${article.color}`"
                    v-text="article.date"
                ></div>
            </template>
            <div>
                <h2
                    :class="`mt-n1 headline font-weight-light mb-4 text-${article.color}`"
                >{{ article.title }}</h2>
                <div>{{ article.description }}</div>
            </div>
        </v-timeline-item>
    </v-timeline>
</template>



<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            lifeExperience:
                [
                    {
                        title: "Home",
                        description: "LOREUDSIVGBDSUGVB",
                        date: "1998",
                        color: 'green',
                    },

                    {
                        title: "List",
                        description: "LOREM OIEWOIGFIG",
                        date: "1999",
                        color: 'blue',
                    }
                ],
        };
    },
    name: 'TimeLine'
})
</script>
