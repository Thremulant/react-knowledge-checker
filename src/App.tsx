import { ReactLevel } from "./components/ReactLevel";
import { ReactCheckList } from "./components/ReactCheckList";
import { Formik } from "formik";
import { ITopics } from "./models";
import { topicsCollection } from "./data";

export default function App() {

  const model: ITopics = {
    topics: topicsCollection
  };

  return (
    <div className="bg-zinc-900 h-screen w-75 pt-32">
      <h1 className="w-[75%] mx-auto text-slate-600 text-4xl font-vol">
        What level of React are you in?
      </h1>
      <div className="w-[75%] mx-auto font-wor font-light">
        <Formik
          initialValues={model}
          onSubmit={() => { return }}>
          <>
            <ReactCheckList />
            <ReactLevel />
          </>
        </Formik>
      </div>
    </div>
  );
}
