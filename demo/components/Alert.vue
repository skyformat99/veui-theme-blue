<template>
  <article>
    <h1><code>&lt;veui-alert&gt;</code></h1>
    <section>
      <div>固定提示</div>
      <veui-alert
        type="success"
        message="恭喜你，你的请求已成功处理"
        closable/>
      <veui-alert
        ui="limit"
        type="success"
        message="恭喜你，你的请求已成功处理"
        closable
        close-label="关闭"/>
      <veui-alert
        type="warning"
        message="警告，进行检查，有风险信息存在"
        closable/>
      <veui-alert
        ui="limit"
        type="warning"
        :message="messages"
        closable/>
      <veui-alert
        type="info"
        message="提醒，这个消息需要注意"
        closable/>
      <veui-alert
        ui="limit"
        type="info"
        message="提醒，这个消息需要注意"
        closable
        close-label="不再提示"/>
      <veui-alert
        type="error"
        message="错误，请检查并修改后再进行操作"
        closable/>
      <veui-alert
        ui="limit"
        type="error"
        message="错误，请检查并修改后再进行操作"
        closable
        close-label="关闭"/>
    </section>
  </article>
</template>

<script>
import bus from '../bus';
import { Alert } from 'veui';

export default {
    name: 'alert',
    components: {
        'veui-alert': Alert
    },
    data() {
        return {
            open: false,
            messages: [
                '我是消息1我是消息1我是消息1我是消息1',
                '我是消息2',
                '我是消息3',
                '我是消息4',
                '我是消息5'
            ],
            messageIndex: 0
        };
    },
    mounted() {
        this.$children.forEach(child => {
            child.$on('click', () => {
                bus.$emit('log', child.$el.getAttribute('ui'));
            });
        });
    },
    methods: {
        close() {
            this.open = true;
        }
    }
};
</script>

<style scoped>
section {
  margin: 30px;
}

.veui-alert {
  margin: 30px 0;
}
</style>
