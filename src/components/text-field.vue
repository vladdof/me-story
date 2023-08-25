<template>
  <input
    :value="modelValue"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :required="required"
    :autocomplete="autocomplete"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'text-field',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: true,
    },
    autocomplete: {
      type: String,
      default: 'on',
    },
  },
};
</script>
