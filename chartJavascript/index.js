window.onload = init;
function init(){
  loadJSON(function(response){
    data = JSON.parse(response);

      var xbarData = [];
      var ybarData = [];
      for (var x of data.Countries){
        xbarData.push(x.Country)
        ybarData.push(x.TotalConfirmed)
      }
      console.log(xbarData, ybarData);

      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: xbarData,
              datasets: [{
                  label: 'Total  de casos de COVID por país',
                  data: ybarData,
                  backgroundColor: [ ],
                  borderColor: [ ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });
  })
}

function loadJSON(callback){
  var xHR = new XMLHttpRequest;
  xHR.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      callback(this.responseText);
    }else{
      return false;
    }
  }

  xHR.open('GET','https://api.covid19api.com/summary',true);
  xHR.send();
  console.log(xHR);
  }
