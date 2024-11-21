
<script setup lang="ts">
import { ref } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'
const todoList = [
  {
    key: '1',
    label: '吃饭',
    done: false,
  },
  {
    key: '2',
    label: '学习',
    done: true,
  },
  {
    key: '3',
    label: '跑步',
    done: false,
  },
]
const todoRef = ref(todoList)
const labelRef = ref('')

const handleClick = (item) => {
  const index = todoRef.value.findIndex((ele) => ele.key === item.key)
  todoRef.value[index].done = !todoRef.value[index].done
}

function handleAdd() {
  const data = {
    key: (todoRef.value.length + 1).toString(),
    label: labelRef.value,
    done: false,
  }
  todoRef.value.push(data)
  labelRef.value = ''
}
</script>

<template>
  <main>
    <div v-for="item in todoRef" v-bind:key="item.key" @click="handleClick(item)">
      <div>
        <input type="checkbox" v-bind:checked="item.done" />
        {{ item.label }}
      </div>
    </div>
    <input type="text" v-model="labelRef" />
    <button @click="handleAdd()">添加</button>
    <!-- <TheWelcome /> -->
  </main>
</template>
