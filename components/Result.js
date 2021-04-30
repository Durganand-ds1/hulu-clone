import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
function Result({ results }) {
  //console.log(results);
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-3 ">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default Result;
