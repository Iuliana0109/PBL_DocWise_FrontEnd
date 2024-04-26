<script setup lang="ts">
/*Call Components*/
import PulseOverview from '@/components/dashboard/PulseOverview.vue';
import O2Overview from '@/components/dashboard/OxygenOverview.vue';
import Pulse from '@/components/dashboard/Pulse.vue';
import Oxygen from '@/components/dashboard/Oxygen.vue';
import Temperature from '@/components/dashboard/Temperature.vue';
import TemperatureOverview from '@/components/dashboard/TemperatureOverview.vue';
import PillTable from '@/components/dashboard/PillTable.vue';

</script>
<template>
    <v-row>
        <v-col cols="12">
            <v-row>

                <v-col cols="12" lg="4">
                    <div class="mb-6">
                        <Pulse />
                    </div>
                    <div class="mb-6">
                        <Temperature />
                    </div>
                    <div class="mb-6">
                        <Oxygen />
                    </div>
                </v-col>

                <!-- Sales overview -->
                <v-col cols="12" lg="8">
                    <PulseOverview />
                </v-col>

                <!-- Yearly Breakup / Monthly Earnings -->
                <v-col cols="12" lg="6">
                    <div>
                        <TemperatureOverview />
                    </div>
                </v-col>
                <v-col cols="12" lg="6">
                    <O2Overview />
                </v-col>
                <v-col cols="12" lg="12">
                    <PillTable />
                </v-col>
               
            </v-row>
        </v-col>
        
    </v-row>
</template>