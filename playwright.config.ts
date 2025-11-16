
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '/home/jules/verification',
  use: {
    baseURL: 'http://localhost:4321',
  },
});
