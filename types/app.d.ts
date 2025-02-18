declare module '#app' {
  interface NuxtApp {
    $isDarkMode: Ref<boolean>;
    $toggleTheme: () => void;
  }
}

export {};
