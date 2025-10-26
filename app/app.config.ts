export default defineAppConfig({
  ui: {
    colors: {
      primary: 'primary',
    },
    button: {
      variants: {
        active: {
          true: {
            base: 'font-bold',
          },
        },
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'link',
          class: 'text-slate-500 hover:text-primary hover:underline underline-offset-2 cursor-pointer p-0',
        },
        {
          color: 'primary',
          variant: 'link',
          active: true,
          class: 'text-primary hover:text-primary-500 font-semibold no-underline hover:no-underline',
        },
      ],
    },
  },
})
