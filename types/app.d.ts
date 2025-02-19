declare module '#app' {
  interface NuxtApp {
    $isDarkMode: Ref<boolean>;
    $toggleTheme: () => void;
  }
}
declare module '#app' {
  interface NuxtApp {
    $db: ReturnType<typeof getFirestore>;
  }
}
export {};
