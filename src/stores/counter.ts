import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

const defaultState = ()=> ({
  count: 0,
});
export const useCounterStore = defineStore('counter', () => {
  // store
  const count = ref(defaultState().count);

  // getters
  const doubleCount = computed(() => count.value * 2);

  // action
  function increment () {
    count.value++;
  };

  function reset () {
    count.value = defaultState().count;
  };

  return { count, doubleCount, increment, reset };
});