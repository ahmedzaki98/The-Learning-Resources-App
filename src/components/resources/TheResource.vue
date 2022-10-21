<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resource')"
      :mode="storedResButtonMode"
      >Stored Resource</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="AddResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResource from "./StoredResource.vue";
import AddResource from "./AddResource.vue";

export default {
  components: {
    StoredResource,
    AddResource,
  },
  data() {
    return {
      selectedTab: "stored-resource",
      storedResources: [
        {
          id: "official-guid",
          title: "Official Guid",
          description: "The official vue.js documentation",
          link: "https://vue.js.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google...",
          link: "https://google.com",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.AddResource,
      deleteResource: this.DeleteResource,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === "stored-resource" ? "flat" : null;
    },
    AddResButtonMode() {
      return this.selectedTab === "add-resource" ? "flat" : null;
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    AddResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.push(newResource);
      this.selectedTab = "stored-resource";
    },
    DeleteResource(resId) {
      const resIndex = this.storedResources.findIndex(
        (res) => res.id === resId
      );
      this.storedResources.splice(resIndex, 1);
      //   console.log(this.storedResources)
    },
  },
};
</script>
