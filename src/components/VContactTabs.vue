<template>
  <div class="contact-container">
    <h2>Contatos Salvos</h2>
    <ul>
      <li v-for="contact in contacts" :key="contact.id" class="contact-list">
        <p class="contact-name">{{ contact.userName }}</p>
        <p class="contact-number">{{ contact.number }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      contacts: [],
    };
  },
  methods: {
    getContacts() {
      axios
        .get("http://localhost:3000/contacts")
        .then((response) => {
          this.contacts = response.data;
          console.log("👉 response => ", response);
        })
        .catch((error) => {
          console.error("Erro ao obter contatos:", error);
        });
    },
  },
  created() {
    this.getContacts();
  },
};
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 80%;
}
ul {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  margin: 0;
  border-radius: 5px;
  background-color: #1c1c1c;
}

.contact-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

li {
  margin: 0;
  line-height: 1.5;
  color: #fff;
  padding: 15px 4px 5px 4px;
  transition: all 0.3s;
}
li:hover {
  margin: 0;
  line-height: 1.5;
  color: #fff;
  background-color: #202020;
  border: solid 4px #3f83f8;
  box-shadow: 0 4px 8px #3f83f8;

  padding: 5px 4px 5px 4px;
  border-radius: 5px;
  cursor: pointer;
  transform: scale(1.1);
}
</style>
