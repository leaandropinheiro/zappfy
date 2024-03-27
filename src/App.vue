<template>
  <div id="app">
    <main id="main">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}
body {
  font-family: "Roboto", sans-serif;
  color: #345;
  background: url("@/assets/pattern.svg") repeat top;
  background-color: #181818;
}
a {
  color: #345;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.btn {
  display: block;
  padding: 10px 30px;
  background: #3f83f8;
  border-radius: 5px;
  color: white;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
}

.btn:hover {
  background: #3f83f8;
  transform: scale(1.1);
  box-shadow: 0 4px 8px #3f83f8;
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex: 1;
  padding: 20px;
}

input {
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  margin-bottom: 15px;
}
input:hover,
input:focus {
  outline: none;
  box-shadow: 0 4px 8px #3f83f8;
  border-color: #3f83f8;
}
</style>
