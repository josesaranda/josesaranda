import React from "react";

export type TimeProps = {
  time: Date;
  language?: string;
};

export const Time = ({ time, language = "en" }: TimeProps) => {
  const timeFormat: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const datetime = time.toISOString();
  const firstChar = time
    .toLocaleDateString(language, timeFormat)
    .charAt(0)
    .toUpperCase();

  const rest = time.toLocaleDateString(language, timeFormat).slice(1);
  return (
    <time className="time" dateTime={datetime}>
      {firstChar}
      {rest}
    </time>
  );
};
