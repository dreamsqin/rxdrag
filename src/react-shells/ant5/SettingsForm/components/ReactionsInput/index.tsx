import { Button, Form, Input, Modal, Switch } from "antd"
import { useToolsTranslate } from "core-react/hooks/useToolsTranslate";
import { memo, useCallback, useState } from "react"
import { IControllerMeta } from "runner/reaction/interfaces/metas";
import { ReactionsEditor } from "./ReactionsEditor";
import { createUuid } from "./ReactionsEditor/utils";

export const ReactionsInput = memo((props: {
  title: string,
  value?: IControllerMeta,
  onChange?: (value?: IControllerMeta) => void,
}) => {
  const { title, value, onChange, ...other } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useToolsTranslate()

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleSwitchChange = useCallback((checked: boolean) => {
    if (checked) {
      const id = createUuid()
      onChange?.({ ...value, id: id })
    } else {
      onChange?.({ ...value, id: undefined })
    }
  }, [onChange, value]);

  const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    onChange?.({ ...value, name: inputValue })
  }, [onChange, value]);

  const handleConfigChange = useCallback((meta?: IControllerMeta) => {
    onChange?.({ ...meta, id: value?.id, name: value?.name })
  }, [onChange, value?.id, value?.name]);

  return (
    <div>
      <Form.Item
        label={title}
      >
        <Switch checked={!!value?.id} onChange={handleSwitchChange} />
      </Form.Item>
      {
        value?.id &&
        <>
          <Form.Item
            label={t("controllerName")}
          >
            <Input value={value.name} onChange={handleNameChange} />
          </Form.Item>
          <Form.Item
            label={t("config")}
          >
            <Button {...other} onClick={showModal}>{t("configController")}</Button>
          </Form.Item>

          <Modal
            title={`${t("configController")} - 对话框`}
            open={isModalOpen}
            cancelText={t("cancel")}
            okText={t("confirm")}
            onCancel={handleCancel}
            width={"calc(100vw - 40px)"}
            style={{
              transform: 'scale(1)',
            }}
            getContainer={false}
            centered
            destroyOnClose
          >
            <ReactionsEditor value={value} onChange={handleConfigChange} />
          </Modal>
        </>
      }

    </div>

  )
})