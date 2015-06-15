/* 
* Version: 2.1
* Last Updated: 5/06/2014
* Author: Penton, Inc.
* URL: http://www.penton.com
* Brand: New Hope Natural Media
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
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Business Services/Other');
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Distributor');
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Health Practitioner');
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Manufacturer');
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Retailer');
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Supplier/Raw Ingredient Distributor'); 	
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
	if (o == "Business Services/Other") {
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Advertising/PR'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Association'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Consultant'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Education/Training'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Financial Institution'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Government Agency'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Investment Banking'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Laboratory'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Legal/Regulatory'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Not for Profit'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Other'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Publisher'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Research and Development'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('School/University Research'); 
	} 
	
	if (o == "Distributor") { 
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Broker of Finished Products');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Importer/Exporter of Finished Products');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Ingredient Importer/Exporter');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Third Party Distributor of Finished Products');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Wholesaler of Finished Products'); 
	}	
	
	if (o == "Health Practitioner") { 
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Alternative Health Clinic/Practitioner');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Health Club/Gym'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Medical Professional'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Spas/Salons');  
	}	
	
	if (o == "Manufacturer") { 
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Beverage Manufacturer'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Contract Manufacturer');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Food Manufacturer');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Home and Textile Manufacturer');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Natural Building Material');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Natural Living');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Nutraceuticals');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('OTC Pharmaceuticals');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Personal Care');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Pet Food/Products');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Research and Development');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Vitamin/Mineral/Herb/Supplements');
	}	
	
	if (o == "Retailer") { 
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Bookstore'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Chain Drug Store/Pharmacy');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Chain Natural Products Store');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Convenience Store');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Conventional Supermarket');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Discount Mass Merchandiser');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('E-tailer');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Gift Product Store');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Gourmet/Specialty Products');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Home and Textile');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Independent Drug Store/Pharmacy');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Independent Grocer');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Independent/Co-op/Natural Product Store');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Mail Order Catalog');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Pet Supply Store/Grooming');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Restaurant/Food Service');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('School/University (Food Services)');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Tea Room/Coffee House');
	}	
	
	if (o == "Supplier/Raw Ingredient Distributor") { 
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Equipment Supplier/Packaging'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Farm/Grower'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Ingredient Importer/Exporter'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Raw Ingredient Producer/Supplier'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Research and Development'); 
	}	

}

/* ==========================================================================
   Execute
   ========================================================================== */

  $(window).load(function()  {
    
    //Populate the select ID called "prePopBusinessTypePrimary" with the options from the external file
    populateBusinessTypePrimary(document.submgmt.prePopBusinessTypePrimary.options[document.submgmt.prePopBusinessTypePrimary.selectedIndex].value);
  });