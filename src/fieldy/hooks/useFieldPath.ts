import { FieldContext, IFieldParams } from "fieldy/contexts"
import { useContext } from "react"

export function useFieldPath(){
  const fieldPath = useContext<IFieldParams>(FieldContext).path

  return fieldPath
}