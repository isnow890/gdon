<template>
  <q-card flat bordered>
    <q-card-section>
      <div class="text-h6 q-pt-sm">
        💸💰 이 돈으로 다른 무엇을 할 수 있을까요? 💰💸
      </div>
    </q-card-section>

    <q-card-section>
      <form @submit.prevent="handleSubmit">
        <div class="q-gutter-y-md">
          <div>
            <div class="text-subtitle2 q-mb-sm">사용하려는 금액</div>
            <q-input
              dense
              v-model="amount"
              type="number"
              outlined
              placeholder="금액을 입력하세요"
            />
          </div>

          <div>
            <div class="text-subtitle2 q-mb-sm">성별</div>
            <q-select
              v-model="gender"
              :options="genderOptions"
              outlined
              dense
            />
          </div>

          <div>
            <div class="text-subtitle2 q-mb-sm">나이대</div>
            <q-select
              v-model="ageGroup"
              :options="ageGroupOptions"
              outlined
              dense
            />
          </div>

          <q-btn
            type="submit"
            color="primary"
            class="full-width"
            :loading="loading"
            label="결과 보기"
          />
        </div>
      </form>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const props = defineProps({
  loading: Boolean,
});

const emit = defineEmits(["submit"]);

const amount = ref("75000");
const gender = ref({ label: "남성", value: "male" });
const ageGroup = ref({ label: "20대", value: "20s" });

const genderOptions = [
  { label: "남성", value: "male" },
  { label: "여성", value: "female" },
];

const ageGroupOptions = [
  { label: "10대", value: "10s" },
  { label: "20대", value: "20s" },
  { label: "30대", value: "30s" },
  { label: "40대", value: "40s" },
  { label: "50대 이상", value: "50s" },
];

const handleSubmit = () => {
  // 금액 검증
  if (!amount.value) {
    $q.notify({
      type: "warning",
      message: "금액을 입력해주세요.",
      position: "top",
    });
    return;
  }

  const amountNum = Number(amount.value);
  if (amountNum <= 0) {
    $q.notify({
      type: "warning",
      message: "0원보다 큰 금액을 입력해주세요.",
      position: "top",
    });
    return;
  }

  if (amountNum > 10000000) {
    $q.notify({
      type: "warning",
      message: "1000만원 이하로 입력해주세요.",
      position: "top",
    });
    return;
  }

  // 성별 검증
  if (!gender.value) {
    $q.notify({
      type: "warning",
      message: "성별을 선택해주세요.",
      position: "top",
    });
    return;
  }

  // 나이대 검증
  if (!ageGroup.value) {
    $q.notify({
      type: "warning",
      message: "나이대를 선택해주세요.",
      position: "top",
    });
    return;
  }

  emit("submit", {
    amount: amount.value,
    gender: gender.value.value,
    ageGroup: ageGroup.value.value,
  });
};
</script>
