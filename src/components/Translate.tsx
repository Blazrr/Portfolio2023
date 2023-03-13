import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Translate = (props: Props) => {
  const { locale, locales, push } = useRouter();
  console.log(locales)

  const handleClick = (item: string) => {
    console.log(item);
    push("/", undefined, { locale: item });
  };

  return (
    <div className="space-x-4 bg-red-300 p-4">
      <h1>test</h1>
      {locale}
      <br />
      {locales?.map((item, id) => (
        <button key={id} onClick={() => handleClick(item)} className="bg-blue-600">
          {item}
        </button>
      ))}
    </div>
  );
};

export default Translate;
