/* const rainfallOriginal = [
  { area: 'sk', rain: 12 },
  { area: 'sk', rain: 3 },
  { area: 'al', rain: 7 },
]; */


let oldRainfall = [
  { area: 'SK', rain: 12 },
  { area: 'AB', rain: 7 },
  { area: 'MB', rain: 4 },
];

function updateRainfall() {
  let maxFields = 2;
  let x = 1;
  const provinces = ["BC", "AB", "SK", "MB"]
  while (x <= maxFields) {
    let addArea = (document.getElementById('prov' + [x]).value).toUpperCase();
    let addRain = document.getElementById('rain' + [x]).valueAsNumber;
    if ((addArea == "") && (isNaN(addRain))) {
      x++;
    } else if ((addArea !== "") && (!isNaN(addRain))) {
      let addRainfall = {
        area: addArea,
        rain: addRain
      }
      oldRainfall.push(addRainfall);
      console.log(oldRainfall);
      x++;
    } else {
      alert("Please enter Province in the format BC,AB, SK, MB and rain value.");
      return;
    }
  }
};


/* DO NOT DELETE
  let maxFields = 2;
  let x = 1;
  console.log(maxFields);
  while (x <= maxFields) {
    console.log(x);
    let addArea = document.getElementById('prov' + [x]).value;
    let addRain = document.getElementById('rain' + [x]).valueAsNumber;
    console.log(addArea + addRain);
    if (addArea !== "" && !isNaN(addRain)) {
      let addRainfall = {
        area: addArea,
        rain: addRain
      }
      oldRainfall.push(addRainfall);
      console.log(oldRainfall);
    } else {
      alert("Please enter data");
      return;
    }
    x++;
  }
};*/


/* DO NOT DELETE
    let addArea = document.getElementById('prov1').value;
    let addRain = document.getElementById('rain1').valueAsNumber;
    console.log(addArea + addRain);
    if (addArea == "" || isNaN(addRain)) {
      alert("Please enter data");
    } else {
      let addRainfall = {
        area: addArea,
        rain: addRain
      }
      oldRainfall.push(addRainfall);
      console.log(oldRainfall);
    }
  };
*/

function sumRain() {

  const uniqueArea = [...new Set(oldRainfall.map(x => x.area))];
  console.log(uniqueArea);

  for (var i = 0; i < uniqueArea.length; i++) {
    newArea = uniqueArea[i];
    console.log(i + newArea);
    const filteredArea = oldRainfall.filter(i => newArea.includes(i.area));
    console.log(filteredArea);
    const totRain = filteredArea.reduce((base, object) => {
      return base + object.rain;
    }, 0);
    console.log(newArea + totRain);
    const newRainfall = oldRainfall.filter(name => name.area !== newArea);
    newRainfall.push(
      { area: newArea, rain: totRain }
    );
    oldRainfall = newRainfall;
    console.log(newRainfall);
  };
  return oldRainfall;
};

function displayRainfall() {
  console.log(oldRainfall);
  let rainTable = '';
  oldRainfall.forEach(function (prov) {
    rainTable += '<div class="item col-sm-4"><h2>' + prov.area + ": " + prov.rain + '</h2></div>';
  });
  document.getElementById('rainChart').innerHTML = rainTable;
}

/* Desired outcome is:

 function summary(arr1) {
    return [
        { area: 'sk', total: 15 },
        { area: 'al', total: 7 }
    ];
}
*/