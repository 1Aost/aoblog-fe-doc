import type { ReactNode } from 'react';
export type HeaderGroupProps = {
    /**
     * 组件标签
     */
    label?: string;
    /**
     * 额外的内容
     */
    extra?: ReactNode;
    /**
     * 组件的子元素
     */
    children?: ReactNode;
};
export const HeaderGroup = (props?: HeaderGroupProps) => {};
