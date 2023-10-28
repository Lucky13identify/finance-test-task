import React from 'react';
import { Transition } from 'react-transition-group';

export function createTransition(nodeRef, isVisible, children, classNames) {
  const duration = 500;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <Transition
      nodeRef={nodeRef}
      in={isVisible}
      timeout={duration}
      classNames={classNames}
    >
      {state => (
        <div
          ref={nodeRef}
          style={{ ...defaultStyle, ...transitionStyles[state] }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}
