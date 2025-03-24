import React from "react";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/redux/counterSlice";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  console.log(count);
  const dispatch = useDispatch();
  //const [num, setNumber] = useState(0);

  // function Increment() {
  //   setNumber((count) => {
  //     return count + 1;
  //   });
  // }
  // function Decrement() {
  //   setNumber((count) => {
  //     return count - 1;
  //   });
  // }
  return (
    <>
      <CardHeader>
        <CardTitle>Counter</CardTitle>
      </CardHeader>

      <div
        className="counter-wrapper inline-flex"
        style={{ display: "d-flex" }}
      >
        <Button
          variant="outline"
          size="icon"
          className="previous-icon bg-primary text-primary-foreground rounded-full"
          // onClick={Decrement}
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        {/* <Button type="submit">Submit</Button> */}
        <div
          className={`Number-card mb-0 p-1 rounded w-25 0 ${
            count > 10 ? "bg-success ; text-white" : ""
          } ${count < 0 ? "bg-danger ; text-white" : ""} `}
        >
          <div style={{ textAlign: "Center" }}> {count}</div>
        </div>
        <Button
          size="icon"
          className="next-icon bg-primary text-primary-foreground rounded-full"
          // onClick={Increment}
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </div>
    </>
  );
}
export default Counter;
