const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    const time = {
      text: "",
      value: "",
    };
    if (random() < 0.5) {
      time.text = i + ":00";
      time.value = time.text;
      result.push(time);
    } else {
      time.text = i + ":30";
      time.value = time.text;
      result.push(time);
    }
  }
  return result;
};
