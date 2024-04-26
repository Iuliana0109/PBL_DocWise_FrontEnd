<template>
    <v-sheet
      class="py-8 px-6 mx-auto ma-4 text-center"
      elevation="4"
      max-width="500"
      rounded="lg"
      width="100%"
    >
      <h3 class="text-h5">Verification Code</h3>
  
      <div class="text-subtitle-2 font-weight-light mb-3">Please enter the verification code sent to your mobile</div>

      <div style="align-items: center">
      <v-otp-input
      ref="otpInput"
        input-classes="otp-input"
        :conditionalClass="['one', 'two', 'three', 'four']"
        separator="-"
        inputType="letter-numeric"
        :num-inputs="6"
        v-model:value="bindValue"
        :should-auto-focus="true"
        :should-focus-order="true"
        @on-change="handleOnChange"
        @on-complete="handleOnComplete"
        :placeholder="['', '', '', '']"
      ></v-otp-input>
    </div>

      <div class="text-caption">
        <v-btn
          color="primary"
          size="x-small"
          text="Send New Code"
          variant="text"
          @click="otp = ''"
        ></v-btn>
      </div>
    <button @click="clearInput()">Clear Input</button>
    <v-spacer></v-spacer>
    <v-btn to="/" color="primary" size="large" block   flat>Submit</v-btn>
    </v-sheet>
  </template>

<script setup lang="ts">
import { ref } from "vue";
import VOtpInput from "vue3-otp-input";

const otpInput = ref<InstanceType<typeof VOtpInput> | null>(null);
const bindModal = ref("");

const handleOnComplete = (value: string) => {
  console.log("OTP completed: ", value);
};

const handleOnChange = (value: string) => {
  console.log("OTP changed: ", value);
};

const clearInput = () => {
  otpInput.value?.clearInput();
};

const fillInput = (value: string) => {
  console.log(value);
  otpInput.value?.fillInput(value);
};
</script>

<style>
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #e0ebfa;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
</style>