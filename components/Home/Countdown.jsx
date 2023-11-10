import Typography from "@mui/material/Typography";
import { useEffect, useRef } from "react";

const format = (str) => (String(str).length > 1 ? str : `0${str}`);

const TARGET_DATE = new Date(2023, 0, 31).getTime();

const Countdown = () => {
  const daysRef = useRef();
  const hoursRef = useRef();
  const minutesRef = useRef();
  const secondsRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      const difference = TARGET_DATE - new Date().getTime();
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (daysRef.current) {
        daysRef.current.innerHTML = format(days);
      }
      if (hoursRef.current) {
        hoursRef.current.innerHTML = format(hours);
      }
      if (minutesRef.current) {
        minutesRef.current.innerHTML = format(minutes);
      }
      if (secondsRef.current) {
        secondsRef.current.innerHTML = format(seconds);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Typography
        variant="h5"
        ref={daysRef}
        sx={{ display: "inline" }}
      ></Typography>
      &nbsp;:&nbsp;
      <Typography
        variant="h5"
        ref={hoursRef}
        sx={{ display: "inline" }}
      ></Typography>
      &nbsp;:&nbsp;
      <Typography
        variant="h5"
        ref={minutesRef}
        sx={{ display: "inline" }}
      ></Typography>
      &nbsp;:&nbsp;
      <Typography
        variant="h5"
        ref={secondsRef}
        sx={{ display: "inline" }}
      ></Typography>
    </div>
  );
};

export default Countdown;
