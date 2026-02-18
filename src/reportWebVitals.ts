import { Metric } from 'web-vitals';

const reportWebVitals = async (onPerfEntry?: (metric: Metric) => void): Promise<void> => {
  if (onPerfEntry != null && onPerfEntry instanceof Function) {
    const { onCLS, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals');
    onCLS(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
    onINP(onPerfEntry);
  }
};

export default reportWebVitals;
