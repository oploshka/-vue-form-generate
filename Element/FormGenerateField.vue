<template>
  <div>
    <component
      v-bind:is="fieldComponent"
      v-bind="fieldProps"

      v-model="form[field.getFieldName()]"
    />
  </div>
</template>

<script>

import FveText                            from "@widgetFormValidate/Element/FveText";
import FveNumber                          from "@widgetFormValidate/Element/Text/FveNumber";
import FveDatepicker                      from "@widgetFormValidate/Element/FveDatepicker";

export default {
  components:{
    FveText,
    FveNumber,
    FveDatepicker,
  },
  props: {
    // значение по умолчанию (можно переопределить тип)
    field   : { type: Object, },
    form    : { type: Object},
  },
  computed: {
    fieldComponent() {
      switch (this.field.toJSON().type) {
        case 'STRING'                 : return FveText;
        case 'INTEGER'                : return FveNumber;
        case 'DATE'                   : return FveDatepicker;
        default:                        return FveText;
      }
    },
    fieldProps() {
      const field = this.field.toJSON();
      return {
        // is: this.fieldComponent,

        name: field.name,
        label: field.label,
        placeholder: field.placeholder,
        required: field.required,
        // TODO
        // min: field.min,
        // max: field.max,
      };
    }

  }
};
</script>
