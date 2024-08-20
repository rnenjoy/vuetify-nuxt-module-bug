import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "require-login" | "require-permission"
declare module "../../node_modules/.pnpm/nuxt@3.12.4_@parcel+watcher@2.4.1_@types+node@22.2.0_encoding@0.1.13_ioredis@5.4.1_magicast@0_s6eobon7dodctnb23fvjqyitha/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}
declare module 'nitropack' {
  interface NitroRouteConfig {
    appMiddleware?: MiddlewareKey | MiddlewareKey[] | Record<MiddlewareKey, boolean>
  }
}