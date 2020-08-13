import React, { forwardRef, memo } from 'react'
import cx from 'classnames'
import { css as glamorCss } from 'glamor'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import useTextStyle from '../../theme/src/hooks/useTextStyle'

const Text = memo(
  forwardRef(function Text(props, ref) {
    const {
      className,
      css,
      size = 400,
      color = 'default',
      fontFamily = 'ui',
      marginTop,
      ...restProps
    } = props

    const textStyle = useTextStyle({ size, color, fontFamily })

    return (
      <Box
        is="span"
        ref={ref}
        {...textStyle}
        className={cx(className, css ? glamorCss(css).toString() : undefined)}
        {...restProps}
      />
    )
  })
)

Text.propTypes = {
  /**
   * Composes the Box component as the base.
   */
  ...Box.propTypes,

  /**
   * Size of the text style.
   * Can be: 300, 400, 500, 600.
   */
  size: PropTypes.oneOf([300, 400, 500, 600]),

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: PropTypes.string
}

export default Text
