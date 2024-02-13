import {useState} from "react";

export const MbtiBox = ({data}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <li>
      <button
        type="button"
        onClick={() => {
          setToggle((state) => !state);
        }}
      >
        <img src={toggle ? data.deep_purple : data.light_purple} />
      </button>
    </li>
  );
};
