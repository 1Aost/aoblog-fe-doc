import { ButtonProps } from "antd";
import { type ReactNode } from "react";
export type ActionRenderProps = {
  /**
   * 编辑按钮触发函数
   */
  onEdit?: () => void;
  /**
   * 编辑按钮的自定义属性
   */
  editProps?: { tooltip?: string } & ButtonProps;
  /**
   * 删除按钮触发函数
   */
  onDelete?: () => void;
  /**
   *删除按钮的自定义属性
    */
  deleteProps?: { tooltip?: string } & ButtonProps;
  /**
   * 一个额外的组件或元素，可以在操作列中显示额外的内容。通常用于显示一些自定义的操作按钮或其他相关信息。
   */
  extra?: ReactNode;
  /**
   *自定义按钮数组
    */
  buttons?: ({ title: string; tooltip?: string } & ButtonProps)[];
};
export const ActionRender = (props?: ActionRenderProps) => {};
