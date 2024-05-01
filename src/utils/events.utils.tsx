export const getFormattedWeather = (weatherString: string) => {
  let newWeatherString = weatherString.trim();
  newWeatherString = newWeatherString.replace(" ", ", ");
  const wLen = newWeatherString.length;

  if (wLen < 1) return weatherString;

  if (newWeatherString[wLen - 1] === "C")
    return (
      <span>
        {newWeatherString.slice(0, wLen - 1)}
        <sup>o</sup>
        {newWeatherString.slice(wLen - 1, wLen)}
      </span>
    );

  return newWeatherString;
};

export const getFormattedWeatherandDistance = (
  weatherString: string,
  distanceString: string
) => {
  // the logic used here (divide by 100) is questionable but that is what the requirements suggest so...
  const formattedDist = Math.floor(parseInt(distanceString) / 100) + " Km";

  return (
    <>
      {getFormattedWeather(weatherString)} | {formattedDist}
    </>
  );
};
