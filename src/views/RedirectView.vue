<template>
  <div v-if="loading">Поиск ссылки...</div>
  <div v-else-if="!loading && !url">Ссылка не найдена</div>
  <div v-else>{{ `${url.schema}://${url.path}` }}</div>
</template>

<script>
import { urlsRef } from "@/firebase";
import { useDocument } from "vuefire";
import { doc } from "firebase/firestore";

export default {
  name: "RedirectView",
  data() {
    return {
      loading: true,
      url: null,
    };
  },
  async mounted() {
    const { promise } = useDocument(doc(urlsRef, this.$route.params.id), {
      once: true,
      wait: true,
    });
    this.url = await promise.value;
    this.loading = false;
    if (!this.url) return;

    try {
      window.location.href = `${this.url.schema}://${this.url.path}`;
    } catch (e) {
      console.log("e", e);
    }
  },
};
</script>

<style scoped lang="scss"></style>
