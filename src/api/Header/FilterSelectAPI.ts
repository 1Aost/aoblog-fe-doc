import type { CSSProperties } from 'react';
export type FilterSelectProps = {
    /**
     * 前缀
     */
    prefix?: string;
    /**
     * 选择框默认文字
     */
    placeholder?: string;
    /**
     * 选择器样式
     */
    style?: CSSProperties;
    /**
     * 指定可选项
     */
    options?: { label: string; value: string | number }[];
    /**
     * 是否开启多选模式或标签模式
     */
    mode?: 'single' | 'multiple' | 'tags';
    /**
     * 选择器当前值
     */
    value?: string | string[];
    /**
     * 选择器值变化事件
     */
    onChange?: (value: string) => void;
    /**
     * 其他可选属性
     */
    rest?: any;
};
export const FilterSelect = (props?: FilterSelectProps) => {};
