<!-- src/components/ExpenseResults.vue -->
<template>
  <div class="results-container">
    <div class="row items-center justify-between q-mb-md">
      <div class="text-h6">
        {{ formatAmount(amount) }}원으로 이런 것들을 즐길 수 있어요!
      </div>
      <q-btn flat icon="share" label="공유하기" @click="handleShare" />
    </div>

    <div class="q-gutter-y-md">
      <q-card v-for="(item, index) in results" :key="index" flat bordered>
        <q-card-section>
          <div class="row q-col-gutter-md">
            <div class="col-auto">
              <img
                src="https://placehold.co/96x96/EEE/31343C"
                :alt="item.title"
                style="width: 96px; height: 96px; object-fit: cover"
                class="rounded-borders"
              />
            </div>
            <div class="col">
              <div class="text-subtitle1 text-weight-bold q-mb-sm">
                {{ item.title }}
              </div>
              <div class="text-body2 text-grey-8">
                {{ item.description }}
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";

const props = defineProps({
  results: {
    type: Array,
    required: true,
  },
  amount: {
    type: [String, Number],
    required: true,
  },
});

const $q = useQuasar();

const formatAmount = (value) => {
  return Number(value).toLocaleString();
};

const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "그돈씨 - 소비 대안 추천",
        text: `${formatAmount(
          props.amount
        )}원으로 할 수 있는 다양한 활동들을 확인해보세요!`,
        url: window.location.href,
      });
    } catch (error) {
      console.error("공유하기 실패:", error);
    }
  } else {
    $q.notify("공유하기 기능을 지원하지 않는 브라우저입니다.");
  }
};
</script>
