<template>
  <div class="ad-banner">
    <q-card flat class="bg-grey-2">
      <q-card-section class="text-center text-grey" style="height: 100px">
        광고 영역 {{ slotNumber }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
defineProps({
  slotNumber: {
    type: [String, Number],
    required: true,
  },
});
</script>
