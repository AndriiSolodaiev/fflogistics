import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
function TimerPromo() {
  const targetDate = new Date("2024-01-25T00:00:00");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeRemaining, setTimeRemaining] = useState(targetDate - currentTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date();
      const timeRemaining = targetDate - currentTime;
      setCurrentTime(currentTime);
      setTimeRemaining(timeRemaining);

      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  });

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  const { t } = useTranslation();
  return (
    <div className="timerPromo">
      {timeRemaining > 0 ? (
        <div className="timerPromo__wrap">
          <div>{days + " " + t("hero.promo.timer.days")}</div>
          <div>{hours + " " + t("hero.promo.timer.hours")}</div>
          <div>{minutes + " " + t("hero.promo.timer.minutes")} </div>
          <div>{seconds + " " + t("hero.promo.timer.seconds")} </div>
        </div>
      ) : (
        <div>Час вийшов! Але ви всеодно можете замовити вантаж.</div>
      )}
    </div>
  );
}

export default TimerPromo;
