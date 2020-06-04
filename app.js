console.log("Hello from Earth");
let viz;

const hideButton = document.getElementById("hideButton");
const showButton = document.getElementById("showButton");
const vizcontainer = document.getElementById("vizcontainer");
const exportPDF = document.getElementById("exportPDF");
const exportPowerPoint = document.getElementById("exportPowerPoint");
const applyFilter = document.getElementById("applyFilter");

const url =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard?";

const options = {
  device: "desktop",
};

function initViz() {
  console.log("My viz is loading...");
  viz = new tableau.Viz(vizcontainer, url, options);
}

function hideTheViz() {
  console.log("Going to hide the viz");
  viz.hide();
}
function showTheViz() {
  console.log("Going to show the viz");
  viz.show();
}
function exportPDFfunction() {
  console.log("Exporting PDF in Progress");
  viz.showExportPDFDialog();
}
function exportPowerPointfunction() {
  console.log("Exporting PowerPoint in Progress");
  viz.showExportPowerPointDialog();
}
function exportImagefunction() {
  console.log("Exporting Image in Progress");
  viz.showExportImageDialog();
}
function getRangeValues() {
  //1. Get the min and max value
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  console.log(minValue, maxValue);

  //2. Get Workbook, get Active sheet, get all the sheets, get the sheet with the sales bar chart
  const workbook = viz.getWorkbook();
  const activeSheet = workbook.getActiveSheet();
  const sheets = activeSheet.getWorksheets();
  console.log(sheets);
  const sheetToFilter = sheets[1];
  sheetToFilter
    .applyRangeFilterAsync("SUM(Sales)", {
      min: minValue,
      max: maxValue,
    })
    .then(console.log("Your filter was applied!"));
  //3. Apply the range filter from 1 to the bar chart
}

hideButton.addEventListener("click", hideTheViz);
showButton.addEventListener("click", showTheViz);
document.addEventListener("DOMContentLoaded", initViz);
exportPDF.addEventListener("click", exportPDFfunction);
exportPowerPoint.addEventListener("click", exportPowerPointfunction);
exportImage.addEventListener("click", exportImagefunction);
applyFilter.addEventListener("click", getRangeValues);
