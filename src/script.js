const yrd = document.querySelector(".yrd");
const fdate = new Date();
const cdate = fdate.getFullYear();
yrd.textContent = cdate;

document.querySelector("form").onsubmit = function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const fname = document.querySelector("#fname").value;
  const lname = document.querySelector("#lname").value;
  const year = parseInt(document.querySelector("#year").value);
  const sem = document.querySelector("#sem").value;

  let yrvalue;

  if (year === 2019 && sem === "first") {
    yrvalue = 2011;
  } else if (year === 2019 && sem === "second") {
    yrvalue = 2012;
  } else if (year === 2019 && sem === "inter") {
    yrvalue = 2013;
  }
  if (year === 2020 && sem === "first") {
    yrvalue = 2111;
  } else if (year === 2020 && sem === "second") {
    yrvalue = 2112;
  } else if (year === 2020 && sem === "inter") {
    yrvalue = 2113;
  }
  if (year === 2021 && sem === "first") {
    yrvalue = 2211;
  } else if (year === 2021 && sem === "second") {
    yrvalue = 2212;
  } else if (year === 2021 && sem === "inter") {
    yrvalue = 2213;
  }
  if (year === 2022 && sem === "first") {
    yrvalue = 2311;
  } else if (year === 2022 && sem === "second") {
    yrvalue = 2312;
  } else if (year === 2022 && sem === "inter") {
    yrvalue = 2313;
  }
  if (year === 2023 && sem === "first") {
    yrvalue = 2411;
  } else if (year === 2023 && sem === "second") {
    yrvalue = 2412;
  } else if (year === 2023 && sem === "inter") {
    yrvalue = 2413;
  }

  if (year < 2019 || year > 2023) {
    alert("Select a year between 2019 and 2023");
    return false;
  }

  var ID = "S" + fname.substring(0, 3) + lname.substring(0, 2) + yrvalue;
  document.querySelector("#msg").innerHTML = ID.toLocaleUpperCase(); // Set the ID value to the "msg" <p> tag
  document.querySelector("#msgOutput").classList.remove("hidden");
};
