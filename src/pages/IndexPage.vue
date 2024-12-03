<!-- src/pages/IndexPage.vue -->
<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12" style="max-width: 600px">
        <AdBanner slot-number="1" class="q-mb-md" />

        <ExpenseForm
          :loading="loading"
          @submit="handleSubmit"
          class="q-mb-md"
        />

        <AdBanner slot-number="2" class="q-mb-md" />

        <ExpenseResults
          v-if="results.length"
          :results="results"
          :amount="currentAmount"
          class="q-mb-md"
        />

        <AdBanner slot-number="3" class="q-mb-xl" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import AdBanner from "components/AdBanner.vue";
import ExpenseForm from "components/ExpenseForm.vue";
import ExpenseResults from "components/ExpenseResults.vue";

const $q = useQuasar();
const loading = ref(false);
const results = ref([]);
const currentAmount = ref(0);

const handleSubmit = async (formData) => {
  loading.value = true;
  currentAmount.value = formData.amount;

  try {
    // 임시 데모 데이터
    await new Promise((resolve) => setTimeout(resolve, 1500));
    results.value = [
      {
        title: "미용실 방문 (커트 + 염색/펌 부분 시술)",
        description:
          "남성 커트 (15,000원) + 염색 또는 펌 부분 시술 (60,000원) 합계 약 75,000원.",
        imageSearchKeyword: "남성 미용실 커트 염색",
      },
      {
        title: "한정식 2인 식사",
        description:
          "가격대가 있는 한정식 집보다는 중저가 한정식 식당에서 2인 코스 (35,000원/1인 * 2인 = 70,000원)를 즐길 수 있습니다.",
        imageSearchKeyword: "한정식 2인 코스",
      },
      {
        title: "옷 구매 (2벌)",
        description:
          "SPA 브랜드에서 바지 1벌 (30,000원)과 티셔츠 1벌 (25,000원) 구매 가능합니다.",
        imageSearchKeyword: "남성 의류 쇼핑",
      },
    ];
  } catch (error) {
    $q.notify({
      type: "negative",
      message: "결과를 불러오는데 실패했습니다.",
    });
  } finally {
    loading.value = false;
  }
};
</script>
