const timeSplit = (data) => {
  const date = data.substring(10, 15);
  const timeMin = date.split(":");
  let time = timeMin[0];
  const min = timeMin[1];
  let dayNight = "오전";
  if (parseInt(time) * 100 + parseInt(min) >= 1200) {
    dayNight = "오후";
    time -= 12;
  }
  return `${dayNight} ${time}:${min}`;
};

export default timeSplit;
