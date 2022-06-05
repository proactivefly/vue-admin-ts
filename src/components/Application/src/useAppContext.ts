import { InjectionKey, Ref } from 'vue';
import { createContext, useContext } from '/@/hooks/core/useContext';

export interface AppProviderContextProps {
  prefixCls: Ref<string>;
  isMobile: Ref<boolean>;
}

// 创建唯一不重复key
const key: InjectionKey<AppProviderContextProps> = Symbol();
// 根组件执行创建上下文
export function createAppProviderContext(context: AppProviderContextProps) {
  return createContext<AppProviderContextProps>(context, key);
}
// 使用上下文
export function useAppProviderContext() {
  return useContext<AppProviderContextProps>(key);
}
