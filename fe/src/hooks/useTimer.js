import { useCallback, useEffect, useRef, useState } from 'react';

// export type Props = {
//   m?: number;
//   s: number;
// };

export function useTimer(props) {
  const { m = 0, s } = props;
  const timer = useRef(null);

  const [isRunning, setRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (seconds > 0) setSeconds(seconds - 1);

      if (seconds !== 0) return;

      if (minutes === 0) {
        clearInterval(timer.current);
        timer.current = null;
        setRunning(false);
      } else {
        setSeconds(59);
        setMinutes(minutes - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer.current);
      timer.current = null;
    };
  }, [seconds]);

  const startTimer = useCallback(
    (force) => {
      if (timer.current && !force) return;
      setMinutes(m);
      setSeconds(s);
      setRunning(true);

      clearInterval(timer.current);
      timer.current = null;
    },
    [timer.current],
  );

  return { minutes, seconds, isRunning, startTimer };
}
