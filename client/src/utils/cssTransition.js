import { CSSTransition } from 'react-transition-group';

export function CreateCSSTransition(isVisible, children) {
  return (
    <CSSTransition
      in={isVisible}
      timeout={1000}
      classNames="fade"
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
}
