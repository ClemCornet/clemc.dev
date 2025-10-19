export default defineAppConfig({
  ui: {
    colors: {
      primary: 'primary',
    },
    button: {
      compoundVariants: [
        {
          color: 'primary',
          variant: 'link',
          class: 'text-slate-500 hover:text-primary hover:underline underline-offset-2 cursor-pointer p-0',
        },
      ],
    },
  },
})
