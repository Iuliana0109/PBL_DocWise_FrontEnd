<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import { useTheme } from 'vuetify';
const theme = useTheme();
const primary = theme.current.value.colors.primary;
const secondary = theme.current.value.colors.secondary;
const items = ref(['May 2024', 'April 2024', 'March 2024']);
const select = ref('May 2024');

/* Chart */
const areachartOptions = computed(() => {
    return {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09","10", "11","12","13", "14",  "15", "16", "17", "18", "19", "20","21","22","23","24","25","26","27","28","29","30","31"],
        chart: {
            type: 'area',
            height: 200,
            fontFamily: `inherit`,
            foreColor: '#a1aab2',
            toolbar: {
                show: true
            },
            sparkline: {
                enabled: true
            },
            group: 'sparklines'
        },
        colors: [secondary],
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'solid',
            opacity: 0.05
        },
        markers: {
            size: 3
        },
        tooltip: {
            theme: 'light',
            x: {
                show: true
            }
        }
    };
});

const areaChart = {
    series: [
        {
            name: '',
            data: [36.7, 38, 38.1, 39, 39, 37.4, 37.0, 36.6, 36.6, 36.6, 39.5, 39.2, 40, 36.7, 38, 38.1, 39, 39, 37.4, 37.0, 36.6, 36.6, 36.6, 39.5, 39.2, 40, 37.6, 36.2, 39.1, 39.0, 36.8]
        }
    ]
};
</script>
<template>
    <v-card elevation="10" class="withbg">
        <v-card-item>
            <div class="d-flex align-center justify-space-between pt-sm-2">
                <v-card-title class="text-h5">Temperature Overview</v-card-title>
                <div class="my-sm-0 my-2">
                    <v-select v-model="select" :items="items" variant="outlined" density="compact"
                        hide-details></v-select>
                </div>
            </div>
            <v-row>
                <v-col cols="12">
                    <div class="mt-2">
                    </div>
                </v-col>
            </v-row>
        </v-card-item>
        <div class="mt-3">
            <apexchart type="area" height="160" :options="areachartOptions" :series="areaChart.series"> </apexchart>
        </div>
    </v-card>
</template>
