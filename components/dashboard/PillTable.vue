<template>
  <v-container style="max-width: 1200px;">
    <v-timeline
      density="compact"
      side="end"
    >
      <v-timeline-item>
        <v-text-field
          v-model="input"
          density="comfortable"
          label="Leave a comment..."
          hide-details
          @keydown.enter="comment"
        >
          <template v-slot:append>
            <v-btn
              class="mx-0"
              variant="text"
              @click="comment"
            >
              Post
            </v-btn>
          </template>
        </v-text-field>
      </v-timeline-item>

      <v-slide-x-transition group>
        <v-timeline-item
          v-for="event in timeline"
          :key="event.id"
          class="mb-4"
          dot-color="primary"
          size="small"
        >
          <div class="d-flex justify-space-between flex-grow-1">
            <div>{{ event.text }}</div>
            <div class="flex-shrink-0">  | {{ event.time }}</div>
          </div>
        </v-timeline-item>
      </v-slide-x-transition>

      <v-timeline-item
        class="mb-6"
        hide-dot
      >
        <span>YESTERDAY</span>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        dot-color="primary"
        size="small"
      >
        <div class="d-flex justify-space-between flex-grow-1">
          <div>
            Headache
          </div>
          <div class="flex-shrink-0">
            15:26 EDT
          </div>
        </div>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        dot-color="primary"
        size="small"
      >
        <div class="d-flex justify-space-between flex-grow-1">
          <div>
            Headache
          </div>
          <div class="flex-shrink-0">
            15:25 EDT
          </div>
        </div>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        dot-color="primary"
        size="small"
      >
        <div class="d-flex justify-space-between flex-grow-1">
          <div>
            Chest Pain
          </div>
          <div class="flex-shrink-0">
            15:25 EDT
          </div>
        </div>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        dot-color="primary"
        size="small"
      >
        <div class="d-flex justify-space-between flex-grow-1">
          <div>
            Headache
          </div>
          <div class="flex-shrink-0">
            15:25 EDT
          </div>
        </div>
      </v-timeline-item>

      <v-timeline-item
        dot-color="primary"
        size="small"
      >
        <div class="d-flex justify-space-between flex-grow-1">
          <div>
            Chest Pain
          </div>
          <div class="flex-shrink-0">
            15:25 EDT
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script setup>
  import { computed, ref } from 'vue'

  const events = ref([])
  const input = ref(null)
  const nonce = ref(0)

  const timeline = computed(() => {
    return events.value.slice().reverse()
  })

  function comment () {
    const time = (new Date()).toTimeString()
    events.value.push({
      id: nonce.value++,
      text: input.value,
      time: time.replace(/^(\d{2}:\d{2}).*$/, '$1', (match, contents, offset) => {
        return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
      }),
    })
    input.value = null
  }
</script>

<script>
  export default {
    data: () => ({
      events: [],
      input: null,
      nonce: 0,
    }),

    computed: {
      timeline () {
        return this.events.slice().reverse()
      },
    },

    methods: {
      comment () {
        const time = (new Date()).toTimeString()
        this.events.push({
          id: this.nonce++,
          text: this.input,
          time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
            return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
          }),
        })

        this.input = null
      },
    },
  }
</script>
