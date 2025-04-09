import { shallowEquals } from "../equalities";
import { ComponentType, ReactElement } from "react";
import { useRef } from "../hooks";
import React from "react";

export function memo<P extends object>(
  Component: ComponentType<P>,
  _equals = shallowEquals,
): ComponentType<P> {
  function MemoizedComponent(props: P): ReactElement {
    const memoizedProps = useRef<P | undefined>(undefined);
    const memoizedComponent = useRef<ComponentType<P> | undefined>(undefined);

    if (
      !memoizedProps.current ||
      !memoizedComponent.current ||
      !_equals(memoizedProps.current, props)
    ) {
      memoizedProps.current = props;
      memoizedComponent.current = Component;
      return React.createElement(memoizedComponent.current, props);
    }

    return React.createElement(
      memoizedComponent.current,
      memoizedProps.current,
    );
  }

  return MemoizedComponent;
}
