export interface NavigationItem {
  name: string;
  path: string;
  component: React.ComponentType;
  submenu?: NavigationItem[];
}

export interface PageTransition {
  initial: { x: number; opacity: number };
  animate: { x: number; opacity: number };
  exit: { x: number; opacity: number };
  transition: { duration: number; ease: string };
}
<Action type="file" filePath="src/utils/pageTransitions.ts" contentType="content">import { PageTransition } from '../types';

export const slideFromRight: PageTransition = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
  transition: { duration: 0.5, ease: 'easeInOut' }
};

export const slideFromLeft: PageTransition = {
  initial: { x: '-100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '100%', opacity: 0 },
  transition: { duration: 0.5, ease: 'easeInOut' }
};

export const fadeIn: PageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeInOut' }
};
</parameter>