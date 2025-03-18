import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      // 'tailwindcss/no-custom-classname': 'off',
      'max-params': [
        'error',
        {
          max: 2,
        },
      ],
    },
  }).prepend({
  rules: {
    'vue/define-emits-declaration': ['error', 'type-based'],
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/no-empty-component-block': 'error',
  },
}).override('nuxt/vue/rules', {
  rules: {
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'styles'],
      },
    ],
    'vue/attributes-order': ['error', {
      order: [
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'DEFINITION',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
      alphabetical: true,
    }],
  },
})
