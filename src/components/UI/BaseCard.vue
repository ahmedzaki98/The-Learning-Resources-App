<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  transition: border-radius cubic-bezier(0.075, 0.82, 0.165, 1) 1s,
    transform cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
}
div:hover {
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  transform: scale(1.05);
}
</style>
