<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white text-primary">
      <q-toolbar>
        <div class="q-px-lg full-width">
          <div class="row items-center justify-between">
            <div class="row items-center">
              <q-avatar size="40px" class="q-mr-sm">
                <img src="~assets/logo.jpg" alt="그돈씨 로고" />
              </q-avatar>
              <span class="text-h6 text-weight-bold">그돈씨</span>
            </div>
            <q-btn flat round icon="share" @click="handleShare" />
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-dark">
      <div class="q-pa-md">
        <div class="row q-col-gutter-md justify-center">
          <div class="col-12" style="max-width: 600px">
            <div class="row q-col-gutter-xl">
              <div class="col-xs-6">
                <div class="text-weight-bold q-mb-sm text-white">About</div>
                <q-list dense padding>
                  <q-item clickable v-ripple class="text-grey-4">
                    <q-item-section>회사 소개</q-item-section>
                  </q-item>
                </q-list>
              </div>
              <div class="col-xs-6">
                <div class="text-weight-bold q-mb-sm text-white">Contact</div>
                <q-list dense padding>
                  <q-item clickable v-ripple class="text-grey-4">
                    <q-item-section>광고 문의</q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
            <q-separator class="q-my-md bg-grey-7" dark />
            <div class="text-caption text-grey-4">
              <div>사업자등록번호: 123-45-67890</div>
              <div>대표: 홍길동</div>
              <div>주소: 서울특별시 강남구 테헤란로</div>
              <div>
                © {{ new Date().getFullYear() }} 그돈씨. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { useQuasar } from "quasar";

const $q = useQuasar();

const handleShare = () => {
  $q.notify("사이트 공유하기 기능이 준비중입니다.");
};
</script>
