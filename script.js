const companies = [
    {name: 'Intelliswift', hq: 'Newark, CA', indiaLocations: ['Pune', 'Bengaluru']},
    {name: 'Salesforce', hq: 'San Francisco, CA', indiaLocations: ['Hyderabad', 'Bengaluru', 'Mumbai', 'Gurugram', 'Jaipur']}
  ];
  

  //task-1
  console.log(companies.length);
  companies.forEach(function(company) {
    console.log(company.name + ': ' + company.hq);
  });
  


  //task-2
  function showInfo() {
    const companyInfoDiv = document.getElementById('companyInformation');
    
    let outputHtmlSnippet = '';
    outputHtmlSnippet += '<h3>Number of companies: ' + companies.length + '</h3>';
    outputHtmlSnippet += '<ol>'
  

    for (let i = 0; i < companies.length; i++) {
      let company = companies[i];
      outputHtmlSnippet += '<li>' + company.name + ' - ' + company.hq + ' - ' + company.indiaLocations.join(', ') + '</li>';
    }
  
    companies.forEach(function(company) {
      outputHtmlSnippet += '<li>' + company.name + ' - ' + company.hq + ' - ' + company.indiaLocations.join(', ') + '</li>';
    });
  
    outputHtmlSnippet += '</ol>'
  
    companyInfoDiv.innerHTML = outputHtmlSnippet;
  }