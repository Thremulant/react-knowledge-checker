import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { useFormikContext } from "formik";
import { IOption, ITopics } from "../models";

export const TopicSwitch = ({ topicIndex, obj }: { topicIndex: number, obj: IOption }) => {
  const [enabled, setEnabled] = useState(false);
  const { values, setFieldValue } = useFormikContext<ITopics>();

  useEffect(() => {
    setFieldValue(`topics[${topicIndex}].enabled`, enabled);
  }, [enabled]);

  useEffect(() => {
    if (values.topics[topicIndex].enabled !== enabled) {
      setEnabled(!enabled)
    }
  }, [values.topics])

  return (
    <div className="flex flex-row grow-0 shrink-0">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full mr-2`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white`}
        />
      </Switch>
      <div className="flex flex-col">
        <h4 className="text-xl text-zinc-100">{obj.name}</h4>
        <p className="text-sm text-zinc-400">{obj.desc}</p>
      </div>
    </div>
  );
};
