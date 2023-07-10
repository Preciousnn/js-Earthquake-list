fetch(
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
)
  // => returning re.json
  .then((res) => res.json())
  .then((obj) => {
    console.log(obj.features);

    // loop through the data and run the output function
    obj.features.forEach((item, i) => {
      console.log(item.properties.mag);
      console.log(item.properties.place);

      const li = document.createElement("li");
      li.innerHTML = `<span class ="magnitude">${item.properties.mag}</span><br><span class="place">${item.properties.place}</span>`;
      // li.classList.add("circle");
      // const li = `<li>${item.properties.mag} - ${item.properties.place}</li>`;
      // document.querySelector(`#eq-list`).innerHTML += li;
      document.querySelector(`#eq-list`).appendChild(li);
    });
  });
function output(item) {
  // outputs the item on the page
}

// obj.features.forEach((item, i) => {
//   console.log(item.properties.mag);
//   const li = `<li>${item.properties.place}</li>`;
//   document.querySelector(`#eq-list`).innerHTML += li;
// });
