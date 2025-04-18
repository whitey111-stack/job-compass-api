
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

interface CacheItem<T> {
  data: T;
  timestamp: number;
}

class CacheManager {
  private static cache: Map<string, CacheItem<any>> = new Map();

  static set<T>(key: string, data: T): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  static get<T>(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) return null;
    
    if (Date.now() - item.timestamp > CACHE_DURATION) {
      this.cache.delete(key);
      return null;
    }
    
    return item.data as T;
  }

  static clear(): void {
    this.cache.clear();
  }
}

export default CacheManager;
