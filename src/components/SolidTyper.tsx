import { Component, createSignal } from "solid-js";

interface SolidTyperProps {
  texts: string[];
  baseText?: string | undefined;
  holdTime: number;
  changeTime: number;
  stepTime: number;
}

const SolidTyper: Component<SolidTyperProps> = (props: SolidTyperProps) => {
  const [text, setText] = createSignal("");
  let currentText = 0;
  let currentIndex = 0;

  const add = () => {
    setText(text() + props.texts[currentText][currentIndex]);
    currentIndex++;
    if (currentIndex >= props.texts[currentText].length) {
      setTimeout(remove, props.holdTime);
    } else {
      setTimeout(add, props.stepTime);
    }
  };

  const remove = () => {
    setText(text().substring(0, text().length - 1));
    if (text().length <= 0) {
      currentIndex = 0;
      nextText();
      setTimeout(add, props.changeTime);
    } else {
      setTimeout(remove, props.stepTime);
    }
  };

  const nextText = () => {
    currentText++;
    if (currentText >= props.texts.length) {
      currentText = 0;
    }
  };

  setTimeout(add, 100);

  return (
    <h1 class="text-6xl text-slate-50 font-inter w-3/4 select-none">
      {props.baseText}
      {text()}
    </h1>
  );
};

export default SolidTyper;
