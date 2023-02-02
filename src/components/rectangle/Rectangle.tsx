import { ElementType, ForwardedRef, forwardRef, memo, RefObject } from 'react';
import { IRectangle } from '../../core';

type IntrinsicElement = keyof JSX.IntrinsicElements;

type IRectangleInnerProps<T extends IntrinsicElement> = {
  tag?: T;
  ref: any;
} & IRectangle &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const DEFAULT_RECTANGLE_ELEMENT_TYPE = 'div';

const RectangleInner = <T extends keyof JSX.IntrinsicElements>(
  {
    tag: elementType = DEFAULT_RECTANGLE_ELEMENT_TYPE as T,
    color,
    width,
    height,
    children,
    ...rest
  }: Partial<IRectangleInnerProps<T>>,
  ref: ForwardedRef<T>
) => {
  const Component = elementType as ElementType;

  const styles = {
    backgroundColor: color,
    width: width,
    height: height,
  };

  return (
    <Component ref={ref} style={styles} {...rest}>
      {children}
    </Component>
  );
};

export const Rectangle = forwardRef(RectangleInner);
