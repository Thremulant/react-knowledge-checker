import { useFormikContext } from "formik";
import { motion, MotionValue, useSpring, useTransform } from "framer-motion";
import { ReactElement, useEffect, useState } from "react";
import { useReward } from "react-rewards";
import { ITopics } from "../models";

export const ReactLevel = () => {
  const { values, setFieldValue } = useFormikContext<ITopics>();
  const [total, setTotal] = useState<number>(0);
  const x = useSpring(0, { stiffness: 100 })


  const max = values.topics.reduce((x, b) => x + b.score, 0);
  const width = useTransform(x, [0, max], ["0%", "100%"]);

  const BEGIN = 10;
  const INTER = max / 2;
  const ADVAN = max;

  useEffect(() => {
    let isActive = true;
    if (isActive) {
      const totalScore = values.topics.reduce(
        (previousValue, currentValue) =>
          previousValue + (currentValue.enabled ? currentValue.score : 0),
        0
      );
      x.set(totalScore)
      setTotal(totalScore)
    }
    return () => { isActive = false };

  }, [values]);



  const handleClear = () => {
    const clear = values.topics.map(x => ({
      ...x,
      enabled: false
    }))
    setFieldValue('topics', clear);
  }

  const handleSelectAll = () => {
    const clear = values.topics.map(x => ({
      ...x,
      enabled: true
    }))
    setFieldValue('topics', clear);
  }


  return (
    <>
      <div className="w-full mx-auto mb-16 sticky top-0 z-20 pt-16 bg-zinc-900">
        <div className="h-12 rounded-full w-100 drop-shadow-xl overflow-clip shadow-inner shadow-xl bg-zinc-800 mb-4">
          <motion.div style={{ width: width }} transition={{ duration: .2 }} className="h-12 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></motion.div>
        </div>
        <div className="w-100 top-8 flex flex-row justify-between mx-auto text-white pl-6 md:pl-32 h-16">
          <Level current={total} text="Beginner" msg="Nice!!" points={BEGIN} />
          <Level current={total} text="Intermediate" msg="Epic!" points={INTER} />
          <Level current={total} text="Advanced" msg={`Congratulations! ${< br />}you're the king of the React nerds!`} points={ADVAN} />
        </div>
        <div className="w-100 top-8 flex flex-row justify-between mx-auto text-white pl-6 md:pl-32 py-6">
          <div onClick={handleClear}>
            Clear
          </div>
          <div onClick={handleSelectAll}>
            All
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-zinc-900 z-20 sticky top-[240px] h-16"></div>
    </>
  );
};

const Level = ({ current, text, msg, points }: { current: number, text: string, msg: string | JSX.Element, points: number }) => {
  const { reward } = useReward(`reward-${text.toLowerCase()}`, 'confetti');
  const [control, setControl] = useState<boolean>(true)

  useEffect(() => {
    if (control) {
      if (current >= points) {
        reward();
        setControl(false);
      }
    }
  }, [current, points])

  return (
    <div className="flex flex-col relative w-[200px] justify-start items-center min-h-[64px]" id={`reward-${text.toLowerCase()}`}>
      <div className="relative text-xl">{text}</div>
      {current >= points && <motion.p animate={{ opacity: [0, 1], y: [10, 0] }} transition={{ duration: .2 }} className='text-yellow-500  mx-auto text-md font-bold'>{msg}</motion.p>}
    </div>
  )
}