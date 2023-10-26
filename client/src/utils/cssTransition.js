import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

export function CreateCSSTransition(isVisible, children) {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={isVisible}
      timeout={1000}
      classNames="fade"
      unmountOnExit
      nodeRef={nodeRef}
    >
      {children}
    </CSSTransition>
  );
}
