import { RightOutlined } from "@ant-design/icons"
import { Form } from "antd"
import React, { memo, useCallback, useContext, useMemo, useState } from "react"
import { CSSProperties } from "styled-components"
import { FoldContext } from "./context"
import "./style.less"
import cls from "classnames"
import { isBool } from "core/utils/types"
import { useToken } from "antd/es/theme/internal"
import { ValueRow } from "./ValueRow"

export type FoldProps = {
  children?: React.ReactNode
}

export const Fold = memo((props: FoldProps) => {
  const [expand, setExpand] = useState<boolean>()

  const handleExpandChange = useCallback((exp?: boolean | ((previousState?: boolean) => boolean)) => {
    if (isBool(exp)) {
      setExpand(exp)
    } else {
      setExpand(exp?.(expand))
    }
  }, [expand])

  const param = useMemo(() => {
    return {
      expand,
      setExpand: handleExpandChange
    }
  }, [expand, handleExpandChange])

  return (
    <FoldContext.Provider value={param}>
      <div className='rx-fold-item'>
        {props.children}
      </div>
    </FoldContext.Provider>
  )
})

export type FoldBaseProps = {
  label?: string,
  children?: React.ReactNode
}
export const FoldBase = memo((props: FoldBaseProps) => {
  const { label, children, } = props
  const { expand, setExpand } = useContext(FoldContext)

  const handleClick = useCallback(() => {
    setExpand(expand => !expand)
  }, [setExpand])

  return (
    <Form.Item
      label={
        <div className="rx-fold-base-item-label" onClick={handleClick}>
          <RightOutlined className={cls("base-icon", { expand: expand })} />{label}
        </div>
      }
    >
      {children}
    </Form.Item>
  )
})

export type FoldExtraProps = {
  className?: string,
  style?: CSSProperties,
  children?: React.ReactNode
}

export const FoldExtra = memo((props: FoldExtraProps) => {
  const { className, children, ...other } = props;
  const [, token] = useToken()
  const { expand } = useContext(FoldContext)
  return (
    <div className="rx-fold-item-extra-container"
      style={{ backgroundColor: token.colorBorderSecondary, height: expand ? "auto" : 0 }}
    >
      <div className={cls("rx-fold-item-extra", className)} {...other}>
        <ValueRow>
          {children}
        </ValueRow>
      </div>
    </div>
  )
})