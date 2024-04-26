<template>
    <v-row class="d-flex mb-3">
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">First Name</v-label>
            <v-text-field variant="outlined" hide-details color="primary"></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Last Name</v-label>
            <v-text-field variant="outlined" hide-details color="primary"></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Username</v-label>
            <v-text-field variant="outlined" hide-details color="primary"></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Password</v-label>
            <v-text-field variant="outlined" type="password"  hide-details color="primary"></v-text-field>
        </v-col>
        
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Phone Number</v-label>
            <v-text-field variant="outlined" type="password"  hide-details color="primary"></v-text-field>
        </v-col>

        <v-col cols="12">
        <v-label class="font-weight-bold mb-1">Gender</v-label>
        <v-select :items="['Female', 'Male', 'Other']"></v-select>
        </v-col>

    <!-- <v-col
      cols="12"
      sm="6"
      md="4"
    >
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="saveDate"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>-->
  </v-row> 

  <v-col cols="12" class="pt-0">
        <v-btn to="/auth/register2" color="primary" size="large" block   flat>Next</v-btn>
    </v-col>

</template>

<script lang="ts">
import { ref } from 'vue';
const checkbox = ref(true);
import { defineComponent} from 'vue';

export default defineComponent({
 setup() {
    const date = ref(new Date().toISOString().substr(0, 10));
    const menu = ref(false);
    const modal = ref(false);
    const menu2 = ref(false);

    const menuRef = ref<any>(null); // Ref for the menu component

const saveDate = () => {
  // Use menuRef.value to access the menu component
  menuRef.value.save(date.value);
};

    return {
      date,
      menu,
      modal,
      menu2,
      saveDate,
      menuRef,
    };
 },
});
</script>

