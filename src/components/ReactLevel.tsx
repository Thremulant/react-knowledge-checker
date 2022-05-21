import { useFormikContext } from "formik";
import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { ITopics } from "../models";

export const ReactLevel = () => {
  const { values } = useFormikContext<ITopics>();
  const x = useSpring(0, { stiffness: 100 })

  const max = values.topics.reduce((x, b) => x + b.score, 0);
  const width = useTransform(x, [0, max], ["0%", "100%"]);

  useEffect(() => {
    const totalScore = values.topics.reduce(
      (previousValue, currentValue) =>
        previousValue + (currentValue.enabled ? currentValue.score : 0),
      0
    );
    x.set(totalScore)
  }, [values]);

  return (
    <div className="w-full mx-auto">
      <div className="h-12 rounded-xl bg-gray-200 w-100 drop-shadow-xl">
        <motion.div style={{ width: width }} transition={{ duration: .2 }} className="h-12 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></motion.div>
      </div>
      <div className="w-100 top-8 flex flex-row justify-between mx-auto text-white">
        <div>Beginer</div>
        <div>Intermediate</div>
        <div>Advanced</div>
      </div>
    </div>
  );
};
