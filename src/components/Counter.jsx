import React, { useState, useEffect } from "react";

const Counter = ({ targetDate }) => {
  const [timeDifference, setTimeDifference] = useState(
    calculateTimeDifference(targetDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDifference(calculateTimeDifference(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  function calculateTimeDifference(dateString) {
    const target = new Date(dateString);
    const now = new Date();
    const difference = now - target;
    if (difference <= 0) {
      return {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      anos: Math.floor(difference / (1000 * 60 * 60 * 24 * 365)),
      meses: Math.floor(
        (difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      ),
      dias: Math.floor(
        (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      ),
      horas: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutos: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      segundos: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  const texts = {
    anos: "vivendos os momentos mais lindos que existem ao seu lado",
    meses: "agradecendo todo dia por ter você ao meu lado",
    dias: "me impressionando com a beleza surreal que você carrega",
    horas: "esperando ansiosamente para te ver novamente",
    minutos: "recebendo o amor mais bonito que já existiu",
    segundos: "te amando cada vez mais",
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="w-4/5 text-3xl font-semibold p-2 text-left">
        Tempo apaixonado 🩵 E contando . . .
      </h2>
      <div className="w-full md:w-4/5 flex flex-wrap justify-center space-x-0 md:space-x-4 p-4 md:p-10">
        {Object.keys(timeDifference).map((unit, index) => (
          <div key={index} className="w-1/2 md:w-auto text-center p-2">
            <article>
              <h2>
                <span className="flex justify-center tabular-nums text-4xl md:text-5xl font-extrabold mb-2">
                  {timeDifference[unit]}
                </span>
                <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-sky-300 mb-2">
                  {unit}
                </span>
              </h2>
              <p className="text-xs md:text-sm text-slate-500">{texts[unit]}</p>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
