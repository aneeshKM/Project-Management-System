// shared/components/Button/index.jsx
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Button as RBButton } from "react-bootstrap";   // <-- react-bootstrap
import classNames from "classnames";

import { color } from "shared/utils/styles";
import Icon from "shared/components/Icon";
import Spinner from "shared/components/Spinner";

import "./Button.scss";                                // <-- the SCSS above

const propTypes = {
  className:    PropTypes.string,
  children:     PropTypes.node,
  variant:      PropTypes.oneOf(["primary", "success", "danger", "secondary", "empty"]),
  icon:         PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconSize:     PropTypes.number,
  disabled:     PropTypes.bool,
  isWorking:    PropTypes.bool,
  onClick:      PropTypes.func,
};

const defaultProps = {
  className:  undefined,
  children:   undefined,
  variant:    "secondary",
  icon:       undefined,
  iconSize:   18,
  disabled:   false,
  isWorking:  false,
  onClick:    () => {},
};

const mapToBootstrapVariant = (v) => (v === "empty" ? "light" : v);

const Button = forwardRef(
  (
    {
      className,
      children,
      variant,
      icon,
      iconSize,
      disabled,
      isWorking,
      onClick,
      ...rest
    },
    ref
  ) => {
    const iconOnly = !children;
    const handleClick = () => !disabled && !isWorking && onClick();

    return (
      <RBButton
        {...rest}
        ref={ref}
        variant={mapToBootstrapVariant(variant)}     /* bootstrap’s colour */
        disabled={disabled || isWorking}
        onClick={handleClick}
        className={classNames(
          "pms-btn",
          { "pms-btn--icon-only": iconOnly, "pms-btn-empty": variant === "empty" },
          className
        )}
      >
        {/*  spinner / icon */}
        {isWorking ? (
          <Spinner
            size={26}
            color={getIconColor(variant)}
            className="pms-btn--spinner"
          />
        ) : (
          icon &&
          (typeof icon === "string" ? (
            <Icon type={icon} size={iconSize} color={getIconColor(variant)} />
          ) : (
            icon
          ))
        )}

        {/*  children text */}
        {children && (
          <span
            className={classNames("pms-btn__text", {
              "pms-btn__text--with-padding": isWorking || icon,
            })}
          >
            {children}
          </span>
        )}
      </RBButton>
    );
  }
);

const getIconColor = (variant) =>
  ["secondary", "empty"].includes(variant) ? color.textDark : "#fff";

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
