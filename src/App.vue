<script setup lang="ts">
import { computed } from 'vue';
import { useCounterStore } from './stores/counter';

const counterStore = useCounterStore();

const count = computed((): number => {
  return counterStore.count;
});

const doubleCount = computed((): number => {
  return counterStore.doubleCount;
});

const onClickIncrement = () => {
  counterStore.increment();
};

const onClickReset = () => {
  counterStore.reset();
};
</script>

<template>
  <main>
    <p>カウント： {{ count }}</p>
    <p>2倍した数： {{ doubleCount }}</p>
    <button @click="onClickIncrement">増やす！</button>
    <button @click="onClickReset">リセット</button>
  </main>
</template>