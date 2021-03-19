<template>
  <div>
    <div class="fg-title">{{field.label}}</div>
    <FormGenerate
      :form-schema="field.children"
      :form="form"
    />
  </div>
</template>

<script>

export default {
  name: 'FormGenerateGroup',
  components:{
    FormGenerate: () => import('@widgetFormGenerate/FormGenerateGroup.vue')
  },
  props: {
    // значение по умолчанию (можно переопределить тип)
    field   : { type: Object, },
    form    : { type: Object},
  },
};
</script>

