/* 
* Version: 1
* Last Updated: 2/14/2014
* Author: Penton, Inc.
* URL: http://www.penton.com
* Brand: NEXT Trend
* Summary: Populates Business Type Primary and controls 
* which Business Type Secondaries are displayed based on 
* the Business Type Primary selected by the user.
*/

/* ==========================================================================
   Business Type Primary
   ========================================================================== */

//Create the function populateBusinessTypePrimary
function populateBusinessTypePrimary() { 

	//Create the variable optionsBusinessTypePrimary to equal the following
	var optionsBusinessTypePrimary = document.submgmt.prePopBusinessTypePrimary; 
 
	//Set optionsBusinessTypePrimary to be empty
	optionsBusinessTypePrimary.options.length = 0; 

	//Populate	the select ID called "prePopBusinessTypePrimary" with the following options	
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Select One', '');
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Consulting Services');
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Consumer Insights/Research');
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Financial Services');
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Manufacturer/Supplier');
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Marketing');
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Operations/Supply Chain');
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Product Development');
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Retail/Sales');	
		
} 
	
	
/* ==========================================================================
   Business Type Secondary
   ========================================================================== */
 
//Create the function populateBusinessTypeSecondary with an argument called "o"
function populateBusinessTypeSecondary(o) { 

	//Create the variable optionsBusinessTypeSecondary to equal the following
	var optionsBusinessTypeSecondary = document.submgmt.prePopBusinessTypeSecondary; 
 
	//Set optionsBusinessTypeSecondary to be empty
	optionsBusinessTypeSecondary.options.length = 0; 

	//Hide the <div> called "BTS" if the Business Type Primary is any of the following
	if (o == "Select One" || o == "Please Select" || o == "-Please Select One-" || o == "")	{
		document.getElementById('BTS').className='hide';
	}
	
	//Populate	the select ID called "prePopBusinessTypeSecondary" with the following options	if the Business Type Primary equals what "o" equals
	if (o == "Consulting Services") {
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Brand Development');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Innovation Consulting');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Management Consulting');			
	} 
		
	if (o == "Consumer Insights/Research") { 
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Information Services');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Marketing Research');		
	}
	
	if (o == "Financial Services") { 
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Financial Institution');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Investment Banking');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Investor');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Private Equity');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Venture Capital');
	}
	
	if (o == "Manufacturer/Supplier") { 
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Consumer Packaged Goods');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Natural Products');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Nutraceuticals');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Raw Ingredients');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Restaurant/Food Service');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Ingredient Importer/Exporter');   	
	}
	
	if (o == "Marketing") { 
		document.getElementById('BTS').className='show';			     
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Brand Management');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Marketing - General');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Marketing Services');
	}
	
	if (o == "Operations/Supply Chain") { 
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Purchasing');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Quality Assurance');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Regulatory');
	}	
	
	if (o == "Product Development") { 
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Food Science');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Product Development');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Research and Development');
	}	
	
	if (o == "Retail/Sales") { 
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Category Management');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Chain Drug Store/Pharmacy');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Chain Natural Products Store ');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Convenience Store');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Conventional Supermarket');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Independent Grocery');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Mass Merchandiser');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Sales Organization');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Wholesale');
	}	 

}

/* ==========================================================================
   Execute
   ========================================================================== */

  $(window).load(function()  {
    
    //Populate the select ID called "prePopBusinessTypePrimary" with the options from the external file
    populateBusinessTypePrimary(document.submgmt.prePopBusinessTypePrimary.options[document.submgmt.prePopBusinessTypePrimary.selectedIndex].value);
  });