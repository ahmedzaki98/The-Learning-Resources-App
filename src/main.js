import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import DeleteButton from './components/UI/DeleteButton.vue'
import AddButton from './components/UI/AddButton.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);
app.component("base-card", BaseCard);
app.component("base-dialog", BaseDialog);
app.component("delete-button", DeleteButton);
app.component("add-button", AddButton);
app.component("base-button", BaseButton);


app.mount("#app");
