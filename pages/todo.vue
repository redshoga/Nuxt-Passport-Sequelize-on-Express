<template>
  <div style="margin: 1em;">
    <h1>TODO App</h1>

    <ul style="margin-bottom: 2em;">
      <li v-for="(todo, index) in todoList" :key="todo.id">
        {{ todo.title }}
        <button @click="deleteTodo(todo, index)">x</button>
      </li>
    </ul>

    <div style="margin-bottom: 2em;">
      <input v-model="todoTitle" />
      <button @click="addTodo">Add</button>
    </div>

    <router-link to="/">Back to the home page</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoTitle: ''
    }
  },
  async asyncData({ $axios }) {
    const todo = await $axios.$get('/api/todos')
    return { todoList: todo }
  },
  fetch({ store, redirect }) {
    if (!store.state.authUser) {
      return redirect('/')
    }
  },
  methods: {
    async addTodo() {
      const response = await this.$axios
        .$post('/api/todo', {
          title: this.todoTitle
        })
        .catch(err => {
          return alert(err)
        })

      this.todoList.push(response)
    },
    async deleteTodo(todo, index) {
      await this.$axios
        .$delete('/api/todo', {
          data: {
            id: todo.id
          }
        })
        .catch(err => {
          return alert(err)
        })

      this.todoList.splice(index, 1)
    }
  }
}
</script>
