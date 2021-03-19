<template>
  <div>
    <div class="fg-title">{{field.label}}</div>
    <FormGenerate
      :form-schema="formSchema"
      :form="form"
    />

    <template v-if="formSchemaAdditional.length > 0">
      <div @click="setting.additionalView = !setting.additionalView">{{ setting.additionalView ? 'Скрыть' : 'Показать'}}</div>
    </template>
  </div>
</template>

<script>

// import FormGenerateV2 from "@component/Widget/FormGenerateV2/FormGenerateV2";

export default {
  name: 'FormGenerateGroupAddition',
  components:{
    FormGenerate: () => import('@widgetFormGenerate/FormGenerateGroup.vue')
  },
  props: {
    // значение по умолчанию (можно переопределить тип)
    field   : { type: Object, },
    form    : { type: Object},
  },
  data() {
    return {
      setting: {
        additionalView  : (this.field.setting && this.field.setting.additionalView)   ? this.field.setting.additionalView   :  false,
        additionalFields: (this.field.setting && this.field.setting.additionalFields) ? this.field.setting.additionalFields :  {},
      }
    };
  },
  methods: {
  },
  computed: {
    formSchema() {
      if(this.setting.additionalView) {
        return this.field.children;
      }

      const filterSchema = (originSchema) => {
        let filtered = [];

        for(let i = 0; i < originSchema.length; i++) {
          //
          let item = originSchema[i];
          //
          if(!item.children) {
            if(!this.setting.additionalFields[item.getFieldName ? item.getFieldName() : item.name]) {
              filtered.push(item);
            }
          } else {
            filtered.push( Object.assign({}, item, {children: filterSchema(item.children)} ) );
          }
        }

        return filtered;
      };


      return filterSchema(this.field.children);
    },

    formSchemaAdditional() {
      // TODO: fix
      return [12,123];
    }
  },
};
</script>

