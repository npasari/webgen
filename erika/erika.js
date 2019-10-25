console.log('erika.js is starting');
  
betterFetch = async function(url,body){
  let fetchData = { 
      method: 'POST', 
      body: JSON.stringify(body),
      headers:{'Content-Type':'application/json'}
  };
  let tmpData = (await fetch(url, fetchData)).json();
  return(tmpData);
};

getPieChartData = function(projectData) {
    let pieChartData=[];
    projectData.data.hits.forEach(function(prj,i){
        pieChartData = pieChartData.concat({
            "label" : prj.id,
            "y" : prj.summary.case_count,})
    })
    return pieChartData
};

getBarChartData = function(projectData2) {
    let barChartData = [];
    projectData2.data.hits.map(x=>{
        if(!array[x.data_category]) { 
        array[x.data_category]=0}
        array[x.data_category]+=1
    })
    return barChartData
};

console.log('erika.js finished');