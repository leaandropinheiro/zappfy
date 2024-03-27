<template>
  <form>
    <input
      type="text"
      name="search"
      id="search"
      v-model="phoneNumber"
      placeholder="Digite o número do celular"
      maxlength="15"
    />
    {{ this.phoneNumber }}
    <button
      type="submit"
      id="search"
      value="search"
      @click.prevent="openWhatsAppWeb"
      class="btn"
    >
      Enviar
    </button>
  </form>
</template>

<script>
export default {
  name: "VInputField",
  data() {
    return {
      phoneNumber: this.phoneNumber,
    };
  },
  methods: {
    openWhatsAppWeb() {
      if (this.phoneNumber) {
        var cleanedPhoneNumber = this.phoneNumber.replace(/\D/g, "");
        var isMobile = window.innerWidth < 640;

        if (isMobile) {
          var mobileUrl = "https://wa.me/" + cleanedPhoneNumber;
          window.open(mobileUrl, "_blank");
        } else {
          var desktopUrl =
            "https://web.whatsapp.com/send?phone=" + cleanedPhoneNumber;
          window.open(desktopUrl, "_blank");
        }
      }
    },
  },
  watch: {
    // format phone number type (99) 9 9999-9999, maximum 11 characters
    phoneNumber: function (val) {
      var formatted = val
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{1})(\d{4})/, "$1 $2")
        .replace(/(\d{4})(\d{4})/, "$1-$2");

      this.phoneNumber = formatted;
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: 30px auto 60px auto;
  position: relative;
}

#search {
  width: 100%;
  padding: 20px;
  border: none;
  max-width: 400px;
}

#search:focus,
#search:hover {
  transform: scale(1.1);
}

.btn {
  max-width: 400px;
  transition: all 0.3s;
}
</style>
