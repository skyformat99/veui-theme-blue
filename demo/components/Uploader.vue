<template>
  <article>
    <h1><code>&lt;veui-uploader&gt;</code></h1>
    <p class="veui-font-level-2e">
        <veui-checkbox v-model="isVertical">是否纵向（默认横向展示，纵向设置ui="vertical"）</veui-checkbox>
    </p>
    <section v-if="!isVertical">
        <h2>图片上传模式，上传进度以文字百分比显示</h2>
        <veui-uploader type="image"
        name="file"
        action="/upload"
        v-model="files"
        :max-count="3"
        max-size="10mb"
        accept=".jpg,.jpeg,.gif"
        :payload="payload"
        progress="percent"
        @success="onSuccess"
        @failure="onFailure"
        @change="handleChange('files')"
        @statuschange="handleStatusChange">
        <template slot="desc">请选择jpg,jpeg,gif图片，大小在10M以内，最多上传3张图</template>
        </veui-uploader>
        <h2>图片上传模式，上传进度以进度条显示</h2>
        <veui-uploader type="image"
        name="file"
        request-mode="custom"
        action="/upload"
        v-model="files1"
        :max-count="3"
        max-size="10mb"
        accept=".jpg,.jpeg,.gif"
        :payload="payload"
        progress="bar"
        @success="onSuccess"
        @failure="onFailure"
        @change="handleChange('files1')"
        @statuschange="handleStatusChange"
        :upload="upload">
        <template slot="desc">请选择jpg,jpeg,gif图片，大小在10M以内，最多上传3张图</template>
        </veui-uploader>
        <h2>文件上传模式</h2>
        <veui-uploader
        name="file"
        action="/upload"
        v-model="files2"
        :max-count="3"
        max-size="10mb"
        accept=".jpg,.jpeg,.gif"
        :payload="payload"
        progress="detail"
        @success="onSuccess"
        @failure="onFailure"
        @change="handleChange('files2')"
        @statuschange="handleStatusChange">
        <template slot="desc">请选择jpg,jpeg,gif图片，大小在10M以内，只能上传3张图</template>
        </veui-uploader>
        <h2>文件上传模式，提示文字在下方（ui="bottom"）</h2>
        <veui-uploader
        name="file"
        action="/upload"
        v-model="files2"
        :max-count="3"
        max-size="10mb"
        ui="bottom"
        accept=".jpg,.jpeg,.gif"
        :payload="payload"
        progress="detail"
        @success="onSuccess"
        @failure="onFailure"
        @change="handleChange('files2')"
        @statuschange="handleStatusChange">
        <template slot="desc">请选择jpg,jpeg,gif图片，大小在10M以内，只能上传3张图</template>
        </veui-uploader>
        <h2>图片上传模式，增加额外操作按钮可以直接输入图片地址</h2>
        <veui-uploader type="image"
        name="file"
        action="/upload"
        v-model="filesExtra"
        :max-count="3"
        max-size="10mb"
        accept=".jpg,.jpeg,.gif"
        :payload="payload"
        progress="bar"
        @success="onSuccess"
        @failure="onFailure"
        @change="handleChange('filesExtra')"
        @statuschange="handleStatusChange"
        class="extra-operation">
        <template slot="desc">请选择jpg,jpeg,gif图片，大小在10M以内，最多上传3张图</template>
        <template slot="extra-operation" slot-scope="file">
            <veui-button
            :ui="file.src ? 'dark' : null"
            class="extra-operation-button"
            @click="openTooltip(file)"
            :ref="`add-image${file.index !== undefined ? '-' + file.index : ''}`">输入图片地址</veui-button>
        </template>
        </veui-uploader>
        <veui-tooltip :target="tooltipTarget" :open="tooltipOpen" trigger="click">
        <div class="extra-url">
            <veui-span>图片地址：</veui-span><veui-input v-model="imageSrc"></veui-input>
            <veui-button @click="addImage">确定</veui-button>
        </div>
        </veui-tooltip>
        <h2>文件上传模式，通过iframe上传</h2>
        <veui-uploader ref="iframeUploader"
        name="file"
        action="/uploadiframe"
        request-mode="iframe"
        v-model="filesIframe"
        :max-count="1"
        max-size="10mb"
        accept=".jpg,.jpeg,.gif"
        :payload="payload"
        :convert-response="convertResponse"
        @success="onSuccess"
        @failure="onFailure"
        @change="handleChange('filesIframe')"
        @statuschange="handleStatusChange">
        <template slot="desc">请选择jpg,jpeg,gif图片，大小在10M以内，只能上传1张图</template>
        </veui-uploader>
    </section>
    <section v-else>
        <h2>图片上传模式，上传进度以文字百分比显示</h2>
        <veui-uploader type="image"
        name="file"
        action="/upload"
        ui="vertical"
        v-model="files"
        :max-count="3"
        max-size="10mb"
        accept=".jpg,.jpeg,.gif"
        :payload="payload"
        progress="percent"
        @success="onSuccess"
        @failure="onFailure"
        @change="handleChange('files')"
        @statuschange="handleStatusChange">
        <template slot="desc">请选择jpg,jpeg,gif图片，大小在10M以内，最多上传3张图</template>
        </veui-uploader>
        <h2>图片上传模式，上传进度以进度条显示</h2>
        <veui-uploader type="image"
        name="file"
        request-mode="custom"
        action="/upload"
        ui="vertical"
        v-model="files1"
        :max-count="3"
        max-size="10mb"
        accept=".jpg,.jpeg,.gif"
        :payload="payload"
        progress="bar"
        @success="onSuccess"
        @failure="onFailure"
        @change="handleChange('files1')"
        @statuschange="handleStatusChange"
        :upload="upload">
        <template slot="desc">请选择jpg,jpeg,gif图片，大小在10M以内，最多上传3张图</template>
        </veui-uploader>
        <h2>文件上传模式</h2>
        <veui-uploader
        name="file"
        action="/upload"
        ui="vertical"
        v-model="files2"
        :max-count="3"
        max-size="10mb"
        accept=".jpg,.jpeg,.gif"
        :payload="payload"
        progress="detail"
        @success="onSuccess"
        @failure="onFailure"
        @change="handleChange('files2')"
        @statuschange="handleStatusChange">
        <template slot="desc">请选择jpg,jpeg,gif图片，大小在10M以内，只能上传3张图</template>
        </veui-uploader>
        <h2>文件上传模式，提示文字在下方（ui="vertical bottom"）</h2>
        <veui-uploader
        name="file"
        action="/upload"
        ui="vertical bottom"
        v-model="files2"
        :max-count="3"
        max-size="10mb"
        accept=".jpg,.jpeg,.gif"
        :payload="payload"
        progress="detail"
        @success="onSuccess"
        @failure="onFailure"
        @change="handleChange('files2')"
        @statuschange="handleStatusChange">
        <template slot="desc">请选择jpg,jpeg,gif图片，大小在10M以内，只能上传3张图</template>
        </veui-uploader>
        <h2>图片上传模式，增加额外操作按钮可以直接输入图片地址</h2>
        <veui-uploader type="image"
        name="file"
        action="/upload"
        ui="vertical"
        v-model="filesExtra"
        :max-count="3"
        max-size="10mb"
        accept=".jpg,.jpeg,.gif"
        :payload="payload"
        progress="bar"
        @success="onSuccess"
        @failure="onFailure"
        @change="handleChange('filesExtra')"
        @statuschange="handleStatusChange"
        class="extra-operation">
        <template slot="desc">请选择jpg,jpeg,gif图片，大小在10M以内，最多上传3张图</template>
        <template slot="extra-operation" slot-scope="file">
            <veui-button
            :ui="file.src ? 'dark' : null"
            class="extra-operation-button"
            @click="openTooltip(file)"
            :ref="`add-image${file.index !== undefined ? '-' + file.index : ''}`">输入图片地址</veui-button>
        </template>
        </veui-uploader>
        <veui-tooltip :target="tooltipTarget" :open="tooltipOpen" trigger="click">
        <div class="extra-url">
            <veui-span>图片地址：</veui-span><veui-input v-model="imageSrc"></veui-input>
            <veui-button @click="addImage">确定</veui-button>
        </div>
        </veui-tooltip>
        <h2>文件上传模式，通过iframe上传</h2>
        <veui-uploader ref="iframeUploader"
        name="file"
        action="/uploadiframe"
        ui="vertical"
        request-mode="iframe"
        v-model="filesIframe"
        :max-count="1"
        max-size="10mb"
        accept=".jpg,.jpeg,.gif"
        :payload="payload"
        :convert-response="convertResponse"
        @success="onSuccess"
        @failure="onFailure"
        @change="handleChange('filesIframe')"
        @statuschange="handleStatusChange">
        <template slot="desc">请选择jpg,jpeg,gif图片，大小在10M以内，只能上传1张图</template>
        </veui-uploader>
    </section>
    <section>
      <h2>用法如下：</h2>
      <p v-text="sample" class="sample"></p>
    </section>

    <section class="attrTab">
      <h2>Attributes</h2>
      <veui-table :data="attrData">
        <veui-table-column field="parameter" title="参数" width="10%"></veui-table-column>
        <veui-table-column field="desc" title="说明" width="40%"></veui-table-column>
        <veui-table-column field="type" title="类型" width="10%"></veui-table-column>
        <veui-table-column field="canSelectVal" title="可选值" width="30%"></veui-table-column>
        <veui-table-column field="defaultVal" title="默认值" width="10%"></veui-table-column>
      </veui-table>
    </section>
    <section class="attrTab">
      <h2>Events</h2>
      <veui-table :data="eventData">
        <veui-table-column field="eventName" title="事件名" width="40%"></veui-table-column>
        <veui-table-column field="desc" title="说明" width="60%"></veui-table-column>
      </veui-table>
    </section>
  </article>
</template>
<script>
import { Checkbox, Uploader, Table, Column, Button, Tooltip, Input, Span } from 'veui';
import ui from 'veui/mixins/ui';

export default {
    name: 'uploader-demo',
    components: {
        'veui-checkbox': Checkbox,
        'veui-uploader': Uploader,
        'veui-table': Table,
        'veui-table-column': Column,
        'veui-button': Button,
        'veui-tooltip': Tooltip,
        'veui-input': Input,
        'veui-span': Span
    },
    data: function () {
        let files = [
            {
                name: 'demo-file1.jpg',
                src: 'https://www.baidu.com/img/bd_logo1.png',
                extraInfo: 123
            },
            {
                name: 'demo-file2.gif',
                src: 'http://nodejs.cn/static/images/logo.svg',
                extraInfo: 128
            }
        ];

        return {
            isVertical: false,
            files,
            files1: files.slice(0),
            files2: files.slice(0),
            filesExtra: files.slice(0),
            filesIframe: {
                name: 'demo-file.txt',
                src: 'http://www.baidu.com'
            },
            payload: {
                year: '2017',
                month: '4'
            },
            sample: `<veui-uploader
              name="file"
              action="/upload"
              v-model="files2"
              :max-count="3"
              max-size="10mb"
              accept=".jpg,.jpeg,.gif"
              :payload="payload"
              progress="number"
              @success="onSuccess"
              @failure="onFailure"
              @change="handleChange('files2')"
              @statuschange="handleStatusChange">
              <template slot="desc">请选择jpg,jpeg,gif图片，大小在10M以内，只能上传3张图</template>
            </veui-uploader>`,
            currentImage: null,
            imageSrc: null,
            tooltipTarget: null,
            tooltipOpen: false,
            upload: (file, {onload, onprogress, onerror}) => {
                // onload(file: Object, data: Object)
                // onprogress(file: Object, progress: Object({loaded, total}))
                // onerror(file: Object, error: Object({reason}))
                let xhr = new XMLHttpRequest();
                file.xhr = xhr;
                xhr.upload.onprogress = e => onprogress(file, e);
                xhr.onload = () => onload(file, JSON.parse(xhr.responseText));
                xhr.onerror = e => onerror(file, e);
                let formData = new FormData();
                formData.append('file', file);
                xhr.open('POST', '/upload', true);
                xhr.send(formData);
            },
            attrData: [
                {
                    parameter: 'name', desc: '上传的文件字段名', type: 'string', canSelectVal: '--', defaultVal: 'file'
                },
                {
                    parameter: 'type', desc: '类型，图片上传还是文字上传', type: 'string', canSelectVal: 'file,image', defaultVal: 'file'
                },
                {
                    parameter: 'action', desc: '必选参数，上传地址', type: 'string', canSelectVal: '--', defaultVal: '--'
                },
                {
                    parameter: 'headers', desc: '设置上传的请求头部', type: 'object', canSelectVal: '--', defaultVal: '--'
                },
                {
                    parameter: 'with-credentials', desc: '支持发送 cookie 凭证信息', type: 'boolean', canSelectVal: '--', defaultVal: 'true'
                },
                {
                    parameter: 'request-mode', desc: '文件上传模式', type: 'string', canSelectVal: 'iframe（通过iframe上传）,xhr', defaultVal: 'xhr'
                },
                {
                    parameter: 'iframe-mode', desc: 'iframe上传模式下，传递数据模式', type: 'string', canSelectVal: 'postmessage，callback', defaultVal: 'postmessage'
                },
                {
                    parameter: 'data-type', desc: '传递的数据类型', type: 'string', canSelectVal: 'json，text', defaultVal: 'json'
                },
                {
                    parameter: 'extensions', desc: '支持上传文件的扩展名数组', type: 'array', canSelectVal: '--', defaultVal: ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'tif', 'tiff', 'webp', 'apng', 'svg']
                },
                {
                    parameter: 'accept', desc: '支持上传的文件类型', type: 'string', canSelectVal: '--', defaultVal: '--'
                },
                {
                    parameter: 'ui', desc: '样式', type: 'string', canSelectVal: 'vertical（纵向排列）,bottom（提示文字在下方）', defaultVal: ''
                },
                {
                    parameter: 'max-count', desc: '最大允许上传个数', type: 'number', canSelectVal: '--', defaultVal: '--'
                },
                {
                    parameter: 'max-size', desc: '最大允许的单个上传文件的大小', type: 'number,string', canSelectVal: '--', defaultVal: '--'
                },
                {
                    parameter: 'payload', desc: '上传文件时附带的其他请求参数', type: 'object', canSelectVal: '示例：{year: 2018}', defaultVal: '--'
                },
                {
                    parameter: 'progress', desc: '上传进度显示方式', type: 'string', canSelectVal: 'text（文字）, number（百分比）, bar（进度条）', defaultVal: 'text'
                }
            ],
            eventData: [
                {
                    eventName: 'success', desc: '文件上传成功时触发的事件'
                },
                {
                    eventName: 'failure', desc: '文件上传失败时触发的事件'
                },
                {
                    eventName: 'change', desc: '文件改变时触发的事件'
                },
                {
                    eventName: 'statuschange', desc: '文件状态（空文件list、成功、失败、上传中）改变时触发的事件'
                }
            ]
        };
    },
    mixins: [ui],
    methods: {
        onSuccess(data) {
            console.log('Success event: ', data);
        },
        onFailure(data) {
            console.log('Failure event: ', data);
        },
        handleChange(name) {
            console.log('Change event: ', this[name]);
        },
        handleStatusChange(status) {
            console.log('Total status is: ', status);
        },
        convertResponse(data) {
            return {
                status: data.code ? 'failure' : 'success',
                ...data.result
            };
        },
        openTooltip(file) {
            this.currentImage = file;
            this.tooltipOpen = true;
            this.tooltipTarget = `add-image${file.index !== undefined ? '-' + file.index : ''}`;
        },
        addImage() {
            if (this.currentImage.index !== undefined) {
                this.$set(this.filesExtra, this.currentImage.index, { src: this.imageSrc });
            } else {
                this.filesExtra.push({ src: this.imageSrc });
            }
            this.currentImage = null;
            this.imageSrc = null;
            this.tooltipOpen = false;
        }
    }
};
</script>

<style lang="less" scoped>
@import "~veui-theme-blue/lib.less";
h2 {
  font-size: 16px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-top: 40px;
}
.extra-operation {
  /deep/ label.veui-button {
    .veui-position-center(50%, 30%) !important;
  }
  /deep/ .veui-button&-button {
    width: 90%;
    padding: 0;
    height: 22px;
    line-height: 22px;
    border-radius: 0;
    .veui-position-center(50%, 70%);
  }
}
.extra-url {
  & > * {
    vertical-align: middle;
  }
  .veui-button {
    margin-left: 5px;
  }
}
</style>
