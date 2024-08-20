import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["vuetify"]?: typeof import("vuetify-nuxt-module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["storyblok"]?: typeof import("@storyblok/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["sentry"]?: typeof import("@sentry/nuxt/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["vuetify-nuxt-module", Exclude<NuxtConfig["vuetify"], boolean>] | ["@storyblok/nuxt", Exclude<NuxtConfig["storyblok"], boolean>] | ["@sentry/nuxt/module", Exclude<NuxtConfig["sentry"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["vuetify"]?: typeof import("vuetify-nuxt-module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["storyblok"]?: typeof import("@storyblok/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["sentry"]?: typeof import("@sentry/nuxt/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["vuetify-nuxt-module", Exclude<NuxtConfig["vuetify"], boolean>] | ["@storyblok/nuxt", Exclude<NuxtConfig["storyblok"], boolean>] | ["@sentry/nuxt/module", Exclude<NuxtConfig["sentry"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },
  }
  interface PublicRuntimeConfig {
   isDev: boolean,

   protocol: string,

   host: string,

   storyblok: {
      accessToken: string,

      enableSudoMode: boolean,

      usePlugin: boolean,

      bridge: boolean,

      devtools: boolean,

      componentsDir: string,

      apiOptions: any,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }