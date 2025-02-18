export default defineNuxtPlugin((nuxtApp) => {
  const isDarkMode = useState<boolean>('isDarkMode', () => false);

  isDarkMode.value =
    localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  }

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  nuxtApp.provide('isDarkMode', isDarkMode);
  nuxtApp.provide('toggleTheme', toggleTheme);
});
