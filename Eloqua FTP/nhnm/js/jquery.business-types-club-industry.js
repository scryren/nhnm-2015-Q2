/* 
* Version: 2.1
* Last Updated: 04/03/2015
* Author: Penton, Inc.
* URL: http://www.penton.com
* Brand: Club Industry
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
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Business Services'); 	
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Educational');
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Lifestyle');
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Manufacturer');
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Medical and Wellness');	
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Press-Print, Television or Radio Media'); 
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Public/Not-For-Profit');
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Retailer/Distribution'); 	
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Studio');
	optionsBusinessTypePrimary.options[optionsBusinessTypePrimary.options.length] = new Option('Traditional Fitness');
	
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
	if (o == "Select One" || o == "Please Select" || o == "-Please Select One-" || o == "Press-Blogger" || o == "")	{
		document.getElementById('BTS').className='hide';
	}

	//Populate	the select ID called "prePopBusinessTypeSecondary" with the following options	if the Business Type Primary equals what "o" equals
	if (o == "Business Services") {
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Certification');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Consulting'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Developer, Designer or Architect');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Financial Institution'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Media'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Other Club or Business'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Sales/Marketing'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Technology'); 
	} 

	if (o == "Educational") {
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('College, University or Institution'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('K-12 Education');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Other Club or Business');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Personal Trainer');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Student');	
	} 
	
	if (o == "Lifestyle") {
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Aquatics Only'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Climbing Gym'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Golf/Country Club'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Hotel or Resort'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Indoor Climbing Center'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Racquetball/Tennis Club'); 	
	} 
	
	
	if (o == "Manufacturer") {
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Beverages'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Clothing/Apparel'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Fitness Accessories'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Fitness Equipment'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Food and Snacks'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Other Club or Business'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Software');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Supplements');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Supplies'); 
	} 
	
	if (o == "Medical and Wellness") {
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Alternative Holistic'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Corporate Recreation Facility');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Hospital/HMO Facility');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Medical Clinic');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Nutritional Center');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Other Club or Business');		
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Physical Therapy/Rehabilitation');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Spa/Massage'); 	 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Wellness Clinic, Hospital or Physical Therapy/Medical Fitness Center');	
	} 
	
	if (o == "Press-Print, Television or Radio Media") {
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Consumer Press'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Press Crew'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Trade Press'); 
	} 
	
	
	if (o == "Public/Not-For-Profit") {
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Boys and Girls Clubs'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Blogger');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Community Center'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Government or Military'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Other Club or Business'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Parks and Recreation/City Club'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Personal Trainer'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Public Safety Facility'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('YMCA/YWCA/JCC'); 	
	} 
	
	if (o == "Retailer/Distribution") {
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Beverages'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Clothing/Apparel'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Commercial Dealer or Retailer'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Fitness Accessories'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Fitness Equipment'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Food and Snacks'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Other Club or Business'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Supplements'); 	
	} 
	
	if (o == "Studio") {
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Aerobics, Dance, Yoga or Pilates Studios'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Gymnastics'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Martial Arts Studio/MMA/Boxing'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('No Facility/In-Home/Mobile'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Other Club or Business'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Personal Trainer'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Swim Club'); 	
	} 
	
	if (o == "Traditional Fitness") {
		document.getElementById('BTS').className='show';			
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Select One', '');
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Gym/Fitness Only Club'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Multipurpose Club (Full Service)'); 
		optionsBusinessTypeSecondary.options[optionsBusinessTypeSecondary.options.length] = new Option('Other Club or Business'); 
		
	} 
	
}

/* ==========================================================================
   Execute
   ========================================================================== */

  $(window).load(function()  {
    
    //Populate the select ID called "prePopBusinessTypePrimary" with the options from the external file
    populateBusinessTypePrimary(document.submgmt.prePopBusinessTypePrimary.options[document.submgmt.prePopBusinessTypePrimary.selectedIndex].value);
  });