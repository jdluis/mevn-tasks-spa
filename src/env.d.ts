/// <reference types="vite/client" />

declare module '*.vue' {
  import type { defineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: defineComponent<{}, {}, any>
  export default component
}
