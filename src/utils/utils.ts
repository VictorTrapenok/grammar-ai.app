export function linkedInConversionAndGo(e) {
  if (e) {
    e.preventDefault();
  }

  // @ts-ignore
  window.gtag_report_conversion("https://www.linkedin.com/in/victor-trapenok/");
}

export function calendlyConversionAndGo(e) {
  if (e) {
    e.preventDefault();
  }

  // @ts-ignore
  window.gtag_report_calendly("https://calendly.com/viktor-trapenok/");
}

/**
 * Функции для отслеживания целевых действий в Яндекс.Метрике
 */

// Расширяем Window interface для TypeScript
declare global {
  interface Window {
    ym?: (id: number, action: string, goalName?: string, params?: any) => void;
  }
}

/**
 * ID счетчика Яндекс.Метрики
 */
const YANDEX_METRIKA_ID = 104372760;

/**
 * Отправляет событие цели в Яндекс.Метрику
 * @param goalName - название цели
 * @param params - дополнительные параметры
 */
export function trackYandexGoal(goalName: string, params?: any): void {
  if (typeof window !== "undefined" && window.ym) {
    try {
      window.ym(YANDEX_METRIKA_ID, "reachGoal", goalName, params);
      console.log(`Яндекс.Метрика: цель "${goalName}" отправлена`, params);
    } catch (error) {
      console.error("Ошибка отправки цели в Яндекс.Метрику:", error);
    }
  }
}

/**
 * Отслеживает клик по кнопке скачивания приложения
 * @param location - местоположение кнопки на странице
 * @param url - URL, на который ведет кнопка
 */
export function trackAppDownloadClick(location: string, url: string): void {
  const params = {
    location, // hero, final-cta, sticky-mobile
    url,
    timestamp: Date.now(),
  };

  // Отправляем основную цель "download-click"
  trackYandexGoal("download-click", params);

  // Отправляем дополнительную цель с указанием местоположения
  trackYandexGoal(`download-click-${location}`, params);
}

/**
 * Отслеживает переход на Google Play
 */
export function trackGooglePlayVisit(location: string): void {
  trackAppDownloadClick(location, "https://play.google.com/apps/testing/com.doctordredd.scp1471malo");
}
