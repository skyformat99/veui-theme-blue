<template>
  <article>
    <h1><code>&lt;veui-radio&gt;</code></h1>
    <section>
      <h3><code>v-model</code></h3>
      <p><veui-button ui="small" @click="size = size === 'normal' ? 'small' : 'normal'">Toggle</veui-button></p>
      <p>
        <veui-radio value="normal" name="size" v-model="size">正常状态</veui-radio>
        <veui-radio value="small" checked name="size" v-model="size">正常状态</veui-radio>
      </p>
      <p>Size: {{ size }}</p>
    </section>
    <section>
      <h3><code>:checked.sync</code></h3>
      <p><veui-button ui="small" @click="checked = !checked">Toggle</veui-button></p>
      <p><veui-radio :checked.sync="checked">绑定状态：{{ checked }}</veui-radio></p>
    </section>
    <section>
      <veui-radio checked>选中状态</veui-radio>
    </section>
    <section>
      <veui-radio disabled checked>选中禁用状态</veui-radio>
    </section>
    <section>
      <veui-radio disabled>未选禁用状态</veui-radio>
    </section>
  </article>
</template>

<script>
import { Radio, Button } from 'veui'

export default {
  name: 'radio-demo',
  components: {
    'veui-radio': Radio,
    'veui-button': Button
  },
  data () {
    return {
      size: null,
      checked: false
    }
  }
}
</script>
<style lang="less" scoped>
.veui-radio {
  margin-right: 10px;
}
section {
  margin-bottom: 20px;
}
</style>
