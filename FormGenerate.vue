<template>
  <form>

    <div class="row">
      <template v-for="field in formSchema">

        <template v-if="field instanceof FieldClass">
          <FormGenerateField
            :key="field.name"
            class="col-12 col-md-6 col-lg-4"

            :field="field"
            :form="form"
          />
        </template>

        <template v-else-if="field.type === 'group'" >
          <FormGenerateGroupAddition
            :key="field.name"
            class="col-12"

            :field="field"
            :form="form"
          />
        </template>

      </template>
    </div>

  </form>
</template>

<script>

import FormGenerateField          from "@widgetFormGenerate/Element/FormGenerateField";
import FormGenerateGroupAddition  from "@widgetFormGenerate/Element/FormGenerateGroupAddition";

export default {
  name: 'FormGenerate',
  components:{
    FormGenerateField,
    FormGenerateGroupAddition,
  },
  props:{
    formSchema: Array,
    form: Object
  },
};

</script>

<style lang="scss" scoped>
</style>
