import { useAppProviderContext } from '/@/components/Application';
export function useDesign(scope: string) {
  const values = useAppProviderContext(); // 返回的是reactive({prefixCls,isMobile})
  return {
    prefixCls: `${values.prefixCls}-${scope}`, // xx-[scope]
    prefixVar: values.prefixCls,
  };
}
