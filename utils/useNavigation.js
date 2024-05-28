export default function useNavigation() {
  const navigateTo = (path) => {
    // Implementa qui la tua logica di navigazione
    console.log('Navigating to:', path);
    // Esempio di navigazione fittizia
    window.location.href = path;
  };
  return navigateTo;
}