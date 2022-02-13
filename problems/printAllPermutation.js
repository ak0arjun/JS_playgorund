const res = [];

const permute = (val) => {
  if (val) {
    permuteRec(val, 0, val.length - 1);
  }
  return res;
};

const permuteRec = (val, si, ei) => {
  if (si == ei) {
    console.log(val);
    res.push(val);
    return;
  }
  for (let li = si; li <= ei; li++) {
    val = swap(val, si, li);
    permuteRec(val, si + 1, ei);
    val = swap(val, si, li);
  }
};

const swap = (val, fi, si) => {
  if (val) {
    if (typeof val == "string") {
      let valArr = val.split("");
      let temp = valArr[fi];
      valArr[fi] = valArr[si];
      valArr[si] = temp;
      val = valArr.join("");
    } else {
      let temp = val[fi];
      val[fi] = val[si];
      val[si] = temp;
    }
  }
  return val;
};

module.exports = permute;
