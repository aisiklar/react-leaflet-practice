import { useEffect, useState } from "react";

const GetCoord = (props) => {
  console.log("rendered GetCoord");
  const [count, setCount] = useState(1);
  let coordsList = {
    1: [52.36508941300016, 4.847276698549774],
    2: [7.873548147092286, 98.3966317818034],
    3: [41.399342916220014, 2.1786390956208406],
  };
  console.log(
    "the index and selected coordsList is: ",
    count,
    " ",
    coordsList[count]
  );

  useEffect(() => {
    console.log('in the useEffect');
    props.mapCoords(coordsList[count]);
  }, [count]);

  const clickButton = () => {
    console.log("button clicked");
    setCount(count < 3 ? count + 1 : 1);
  };

  return <input type="submit" onClick={clickButton}></input>;
};

export default GetCoord;
