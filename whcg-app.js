import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/polymer/lib/elements/dom-bind.js'; 
import '@polymer/polymer/lib/elements/dom-if.js'; 
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-pages/iron-pages.js'; 
import '@polymer/iron-ajax/iron-ajax.js'; 
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/app-route/app-route.js'; 
import '@polymer/app-route/app-location.js'; 
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js'; 
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js'; 
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js'; 
import '@vaadin/vaadin-button/vaadin-button.js'; 
import '@vaadin/vaadin-grid/vaadin-grid-column.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-tabs/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/vaadin-tab.js';
import '@whcg/whcg-box-container'; 
import '@whcg/whcg-chart'; 
import '@whcg/whcg-chart-feeder';
import '@whcg/whcg-grid'; 
import '@whcg/whcg-json-merger'; 
import '@whcg/whcg-login-check'; 
import '@whcg/whcg-login-fields';
import '@whcg/whcg-number-field'; 
import '@whcg/whcg-number-field-box'; 
import '@whcg/whcg-period-compounder';

import './whcg-period-discounter.js';
import './whcg-period-summarizer.js';
import './whcg-period-amplifier.js';
import './whcg-select.js';
import './whcg-multiplier.js';
import './whcg-json-maker.js';
//import { mycharts } from './whcg-chart-view.js';



export class WhcgApp extends PolymerElement {
  static get template() {
    return html`
	
	<div>
	

</div>

<dom-bind>


<template>





	<!-- <app-location route="{{route}}" use-hash-as-path></app-location>
	
	<app-route route="{{route}}" pattern="/:login" data="{{loginData}}" tail="{{tail}}">
	</app-route>

	<whcg-login-check user="{{user}}" path="{{loginData.login}}" tail="{{tail}}"></whcg-login-check>


	<app-header reveals>
	  <app-toolbar>
		<div main-title>huvudrubrik</div>
		<iron-selector attr-for-selected="key" selected="{{tail.path}}">
		  <template is="dom-if" if="{{user}}">
			<a href="#/{{loginData.login}}/one" key="/one">ONE</a>
			<a href="#/{{loginData.login}}/two" key="/two">TWO</a>
			<a href="#/{{loginData.login}}/three" key="/three">THREE</a>
		  </template>
		  
		  <template is="dom-if" if="{{!user}}">
		  
			<a href="#/{{loginData.login}}/one" key="/one">ONE</a>
			<a href="#/{{loginData.login}}/two" key="/two">TWO</a>
			<a href="#/{{loginData.login}}/three" key="/three">THREE</a>
		  </template>
		</iron-selector>

		<whcg-login-fields apikey="AIzaSyBg0h8l3HLHl5ukcr4D9xInKW7P_yhdoyM" projectId="test-d7150" user="{{user}}">
		</whcg-login-fields>

	  </app-toolbar>
	</app-header>
	
	<iron-pages selected="{{tail.path}}" attr-for-selected="key" fallback-selection="/">
	  <div key="/one">
		<div hidden$="{{!user}}">USER CONTENT ONE</div>
		<div hidden$="{{user}}">NOT USER CONTENT</div>
	  </div>

	  <div key="/two">
	  







		<div hidden$="{{!user}}">USER CONTENT TWO</div>
		<div hidden$="{{user}}">







		
		</div>
	  </div>

	  <div key="/three">
		<div hidden$="{{!user}}">USER CONTENT THREE</div>
		<div hidden$="{{user}}">NOT USER CONTENT THREE</div>
	  </div>

	  <div key="/">
		StartPage
	  </div>
   
	</iron-pages> -->



	

	






	<whcg-box-container name="Allmänt">

	<whcg-number-field-box column name="Kalkyllängd" mode="none">
	  <whcg-select label="Kalkyllängd" suffix="år" value="8" placeholder="...antal år" valueoutput="{{period}}" jsoninput='[{"value": 1, "caption": "1"}, {"value": 2, "caption": "2"}, {"value": 3, "caption": "2"}, {"value": 4, "caption": "4"}, {"value": 5, "caption": "5"}, {"value": 6, "caption": "6"}, {"value": 7, "caption": "7"}, {"value": 8, "caption": "8"}, {"value": 9, "caption": "9"}, {"value": 10, "caption": "10"}]'></whcg-select>
	  <whcg-select label="Startår" value="2018" placeholder="...år" valueoutput="{{startår}}" jsoninput='[{"value": 2018, "caption": "2018"}, {"value": 2019, "caption": "2019"}, {"value": 2020, "caption": "2020"}, {"value": 2021, "caption": "2021"}, {"value": 2022, "caption": "2022"}, {"value": 2023, "caption": "2023"}, {"value": 2024, "caption": "2024"}, {"value": 2025, "caption": "2025"}, {"value": 2026, "caption": "2026"}, {"value": 2027, "caption": "2027"}]'></whcg-select>
	</whcg-number-field-box>


	<whcg-number-field-box name="Inflation" mode="none">
	  <whcg-select label="Inflation" suffix="%" value="0.02" placeholder="...antal procent" valueoutput="{{inflation}}" jsoninput='[{"value": 0.01, "caption": "1"}, {"value": 0.02, "caption": "2"}, {"value": 0.03, "caption": "2"}, {"value": 0.04, "caption": "4"}, {"value": 0.05, "caption": "5"}, {"value": 0.06, "caption": "6"}, {"value": 0.07, "caption": "7"}, {"value": 0.08, "caption": "8"}, {"value": 0.09, "caption": "9"}, {"value": 0.10, "caption": "10"}]'></whcg-select>
	</whcg-number-field-box>

	<whcg-number-field-box name="Kalkylränta" mode="none">
	  <whcg-select label="Kalkylränta" suffix="%" value="0.07" placeholder="...antal procent" valueoutput="{{discountrate}}" jsoninput='[{"value": 0.01, "caption": "1"}, {"value": 0.02, "caption": "2"}, {"value": 0.03, "caption": "2"}, {"value": 0.04, "caption": "4"}, {"value": 0.05, "caption": "5"}, {"value": 0.06, "caption": "6"}, {"value": 0.07, "caption": "7"}, {"value": 0.08, "caption": "8"}, {"value": 0.09, "caption": "9"}, {"value": 0.10, "caption": "10"}]'></whcg-select>
	</whcg-number-field-box>





	<!-- <whcg-number-field-box column name="Brukare" mode="none">
	  <whcg-number-field label="Antal brukare" value="300" placeholder="...antal" valueoutput="{{initialUserAmount}}"></whcg-number-field>
	</whcg-number-field-box> -->

  </whcg-box-container>



  <whcg-box-container name="Hyra">

	<whcg-number-field-box column name="Initial ytstorlek" mode="none">
	  <whcg-number-field label="Antal kvm" value="1000" suffix="kvm" placeholder="...antal" valueoutput="{{initialAreaAmount}}"></whcg-number-field>
	</whcg-number-field-box>



	<whcg-number-field-box column name="Hyresnivå och hyresutveckling" mode="none">
	  <whcg-number-field label="Hyreskostnad per kvm" value="12" suffix="kr" placeholder="...antal" kind="amount" valueoutput="{{initialRentCostPerSqm}}"></whcg-number-field>
	  <whcg-select label="Hyreshöjningstakt" suffix="%" value="0.02" placeholder="...antal procent" valueoutput="{{rentincrease}}"
		jsoninput='[{"value": 0.01, "caption": "1"}, {"value": 0.02, "caption": "2"}, {"value": 0.03, "caption": "2"}, {"value": 0.04, "caption": "4"}, {"value": 0.05, "caption": "5"}, {"value": 0.06, "caption": "6"}, {"value": 0.07, "caption": "7"}, {"value": 0.08, "caption": "8"}, {"value": 0.09, "caption": "9"}, {"value": 0.10, "caption": "10"}]'></whcg-select>

	</whcg-number-field-box>


	<whcg-number-field-box column name="Värmekostnad" mode="none">
	  <whcg-number-field label="Antal kWh/kvm/år" value="12" placeholder="...antal" kind="amount" suffix="kWh" valueoutput="{{kwh}}"></whcg-number-field>
	  <whcg-number-field label="Kostnad per kWh" value="8" placeholder="... antal" kind="price" suffix="kr" valueoutput="{{krperkwh}}"></whcg-number-field>
	</whcg-number-field-box>


	<whcg-number-field-box column name="Uppförande- och avvecklingskostnader" mode="none">
	  <whcg-number-field label="Etableringskostnad/kvm" value="3000" placeholder="...kostnad" valueoutput="{{initialEstablishCostPerSqm}}"></whcg-number-field>
	  <whcg-number-field label="Expansionskostnad/kvm" value="300" placeholder="...kostnad" valueoutput="{{initialExpandCostPerSqm}}"></whcg-number-field>
	  <whcg-number-field label="Avvecklingskostnad/kvm" value="250" placeholder="...kostnad" valueoutput="{{initialDeclineCostPerSqm}}"></whcg-number-field>


	</whcg-number-field-box>


  </whcg-box-container>





  <whcg-box-container name="Expansionsfaser">

	<whcg-number-field-box column name="Expansionsfas 1" mode="none">
	  <whcg-number-field label="År" value="3" placeholder="...antal" valueoutput="{{exp1year}}"></whcg-number-field>
	  <whcg-number-field label="Tillfört antal kvm" value="700" suffix="kvm" placeholder="...antal" valueoutput="{{exp1area}}"></whcg-number-field>

	</whcg-number-field-box>

	<whcg-number-field-box column name="Expansionsfas 2" mode="none">
	  <whcg-number-field label="År" value="5" placeholder="...antal" valueoutput="{{exp2year}}"></whcg-number-field>
	  <whcg-number-field label="Tillfört antal kvm" value="340" suffix="kvm" placeholder="...antal" valueoutput="{{exp2area}}"></whcg-number-field>

	</whcg-number-field-box>

	<whcg-number-field-box column name="Expansionsfas 3" mode="none">
	  <whcg-number-field label="År" value="2" placeholder="...antal" valueoutput="{{exp3year}}"></whcg-number-field>
	  <whcg-number-field label="Tillfört antal kvm" value="249" suffix="kvm" placeholder="...antal" valueoutput="{{exp3area}}"></whcg-number-field>

	</whcg-number-field-box>

	<whcg-number-field-box column name="Expansionsfas 4" mode="none">
	  <whcg-number-field label="År" value="5" placeholder="...antal" valueoutput="{{exp4year}}"></whcg-number-field>
	  <whcg-number-field label="Tillfört antal kvm" value="340" suffix="kvm" placeholder="...antal" valueoutput="{{exp4area}}"></whcg-number-field>

	</whcg-number-field-box>

	<whcg-number-field-box column name="Expansionsfas 5" mode="none">
	  <whcg-number-field label="År" value="2" placeholder="...antal" valueoutput="{{exp5year}}"></whcg-number-field>
	  <whcg-number-field label="Tillfört antal kvm" value="249" suffix="kvm" placeholder="...antal" valueoutput="{{exp5area}}"></whcg-number-field>

	</whcg-number-field-box>
  </whcg-box-container>


  <whcg-box-container name="Avvecklingsfaser">

	<whcg-number-field-box column name="Avvecklingsfas 1" mode="none">
	  <whcg-number-field label="År" value="3" placeholder="...antal" valueoutput="{{dec1year}}"></whcg-number-field>
	  <whcg-number-field label="Avvecklat antal kvm" value="70" suffix="kvm" placeholder="...antal" valueoutput="{{dec1area}}"></whcg-number-field>

	</whcg-number-field-box>

	<whcg-number-field-box column name="Avvecklingsfas 2" mode="none">
	  <whcg-number-field label="År" value="5" placeholder="...antal" valueoutput="{{dec2year}}"></whcg-number-field>
	  <whcg-number-field label="Avvecklat antal kvm" value="345" suffix="kvm" placeholder="...antal" valueoutput="{{dec2area}}"></whcg-number-field>

	</whcg-number-field-box>

	<whcg-number-field-box column name="Avvecklingsfas 3" mode="none">
	  <whcg-number-field label="År" value="2" placeholder="...antal" valueoutput="{{dec3year}}"></whcg-number-field>
	  <whcg-number-field label="Avvecklat antal kvm" value="600" suffix="kvm" placeholder="...antal" valueoutput="{{dec3area}}"></whcg-number-field>

	</whcg-number-field-box>

	<whcg-number-field-box column name="Avvecklingsfas 4" mode="none">
	  <whcg-number-field label="År" value="5" placeholder="...antal" valueoutput="{{dec4year}}"></whcg-number-field>
	  <whcg-number-field label="Avvecklat antal kvm" value="345" suffix="kvm" placeholder="...antal" valueoutput="{{dec4area}}"></whcg-number-field>

	</whcg-number-field-box>

	<whcg-number-field-box column name="Avvecklingsfas 5" mode="none">
	  <whcg-number-field label="År" value="2" placeholder="...antal" valueoutput="{{dec5year}}"></whcg-number-field>
	  <whcg-number-field label="Avvecklat antal kvm" value="600" suffix="kvm" placeholder="...antal" valueoutput="{{dec5area}}"></whcg-number-field>
	</whcg-number-field-box>
  </whcg-box-container>

  




  <!-- Users -->
  <!-- <whcg-json-maker name="users" key="0" value="{{initialUserAmount}}" datapackage="yearlyamounts" label="antal" period="{{period}}"
	fill whcgjsonoutput="{{whcgNonCompoundedUserAmountsJson}}"></whcg-json-maker> -->


  <!-- Established Area -->
  <whcg-json-maker name="Initialt etablerad yta" key="0" value="{{initialAreaAmount}}" datapackage="yearlyamounts" label="kvm" period="{{period}}"
	fill whcgjsonoutput="{{whcgNonCompoundedAreaAmountsJson}}"></whcg-json-maker>

  <!-- Establish cost per sqm -->
  <whcg-json-maker name="Etableringskostnader per kvm" key="0" value="{{initialEstablishCostPerSqm}}" datapackage="yearlyamounts"
  label="kr" period="{{period}}" whcgjsonoutput="{{whcgInitialEstablishCostPerSqmJson}}"></whcg-json-maker>

  <!-- Establish cost -->
  <whcg-json-merger whcgjsonoutput="{{whcgInitialEstablishCostPerSqmAndNonCompoundedAreaAmountsJson}}" whcgjsonarrayinput="[{{whcgInitialEstablishCostPerSqmJson}}, {{whcgNonCompoundedAreaAmountsJson}}]"></whcg-json-merger>
  <whcg-period-summarizer mode="multiply" name="Etableringskostnader" whcgjsonoutput="{{whcgInitialEstablishCost}}" whcgjsoninput="{{whcgInitialEstablishCostPerSqmAndNonCompoundedAreaAmountsJson}}"></whcg-period-summarizer>


  <!-- Area modifications -->
  <whcg-json-maker name="Expansionsfas 1" key="{{exp1year}}" value="{{exp1area}}" datapackage="yearlyamounts" label="kvm" period="{{period}}"
	whcgjsonoutput="{{whcgExpansionOneJson}}"></whcg-json-maker>
  <whcg-json-maker name="Expansionsfas 2" key="{{exp2year}}" value="{{exp2area}}" datapackage="yearlyamounts" label="kvm" period="{{period}}"
	whcgjsonoutput="{{whcgExpansionTwoJson}}"></whcg-json-maker>
  <whcg-json-maker name="Expansionsfas 3" key="{{exp3year}}" value="{{exp3area}}" datapackage="yearlyamounts" label="kvm" period="{{period}}"
	whcgjsonoutput="{{whcgExpansionThreeJson}}"></whcg-json-maker>
  <whcg-json-maker name="Expansionsfas 4" key="{{exp4year}}" value="{{exp4area}}" datapackage="yearlyamounts" label="kvm" period="{{period}}"
	whcgjsonoutput="{{whcgExpansionFourJson}}"></whcg-json-maker>
  <whcg-json-maker name="Expansionsfas 5" key="{{exp5year}}" value="{{exp5area}}" datapackage="yearlyamounts" label="kvm" period="{{period}}"
	whcgjsonoutput="{{whcgExpansionFiveJson}}"></whcg-json-maker>
  <whcg-json-maker name="Avvecklingsfas 1" key="{{dec1year}}" value="{{dec1area}}" datapackage="yearlyamounts" label="kvm"
	period="{{period}}" whcgjsonoutput="{{whcgDeclineOneJson}}"></whcg-json-maker>
  <whcg-json-maker name="Avvecklingsfas 2" key="{{dec2year}}" value="{{dec2area}}" datapackage="yearlyamounts" label="kvm"
	period="{{period}}" whcgjsonoutput="{{whcgDeclineTwoJson}}"></whcg-json-maker>
  <whcg-json-maker name="Avvecklingsfas 3" key="{{dec3year}}" value="{{dec3area}}" datapackage="yearlyamounts" label="kvm"
	period="{{period}}" whcgjsonoutput="{{whcgDeclineThreeJson}}"></whcg-json-maker>
  <whcg-json-maker name="Avvecklingsfas 4" key="{{dec4year}}" value="{{dec4area}}" datapackage="yearlyamounts" label="kvm"
	period="{{period}}" whcgjsonoutput="{{whcgDeclineFourJson}}"></whcg-json-maker>
  <whcg-json-maker name="Avvecklingsfas 5" key="{{dec5year}}" value="{{dec5area}}" datapackage="yearlyamounts" label="kvm"
	period="{{period}}" whcgjsonoutput="{{whcgDeclineFiveJson}}"></whcg-json-maker>


  <!-- Expand areas -->
  <whcg-json-merger whcgjsonoutput="{{whcgExpansionAreasJson}}" whcgjsonarrayinput="[{{whcgExpansionOneJson}}, {{whcgExpansionTwoJson}}, {{whcgExpansionThreeJson}}, {{whcgExpansionFourJson}}, {{whcgExpansionFiveJson}}]"></whcg-json-merger>
  <whcg-period-summarizer name="Expanderad yta" mode="add" whcgjsonoutput="{{whcgSumExpansionAreasJson}}" whcgjsoninput="{{whcgExpansionAreasJson}}"></whcg-period-summarizer>

  <!-- Expand cost per sqm -->
  <whcg-json-maker name="Expansionskostnader per kvm (ej uppräknade)" key="0" value="{{initialExpandCostPerSqm}}" datapackage="yearlyamounts"
  label="kr" period="{{period}}" fill whcgjsonoutput="{{whcgNonCompoundedExpandCostsPerSqmJson}}"></whcg-json-maker>
  <whcg-period-compounder name="Expansionskostnader per kvm" whcgjsonoutput="{{whcgCompoundedExpandCostsPerSqmJson}}" datapackage="yearlyamounts" label="kr" period="{{period}}"
  rate="{{inflation}}" whcgjsoninput="{{whcgNonCompoundedExpandCostsPerSqmJson}}"></whcg-period-compounder>

  <!-- Expand cost -->
  <whcg-json-merger whcgjsonoutput="{{whcgCompoundedExpandCostsPerSqmAndSumExpansionAreasJson}}" whcgjsonarrayinput="[{{whcgCompoundedExpandCostsPerSqmJson}}, {{whcgSumExpansionAreasJson}}]"></whcg-json-merger>
  <whcg-period-summarizer mode="multiply" name="Expansionskostnader" whcgjsonoutput="{{whcgCompoundedExpandCostsJson}}" whcgjsoninput="{{whcgCompoundedExpandCostsPerSqmAndSumExpansionAreasJson}}"></whcg-period-summarizer>
  <whcg-period-discounter name="Expansionskostnader per kvm (diskonterade)" whcgjsonoutput="{{whcgDiscountedCompoundedExpandCostsJson}}" datapackage="yearlyamounts" label="kr" period="{{period}}"
  rate="{{discountrate}}" whcgjsoninput="{{whcgCompoundedExpandCostsJson}}"></whcg-period-discounter>
 
  <!-- Decline areas -->
  <whcg-json-merger whcgjsonoutput="{{whcgDeclineAreasJson}}" whcgjsonarrayinput="[{{whcgDeclineOneJson}}, {{whcgDeclineTwoJson}}, {{whcgDeclineThreeJson}}, {{whcgDeclineFourJson}}, {{whcgDeclineFiveJson}}]"></whcg-json-merger>
  <whcg-period-summarizer name="Avvecklad yta" mode="add" whcgjsonoutput="{{whcgSumDeclineAreasJson}}" whcgjsoninput="{{whcgDeclineAreasJson}}"></whcg-period-summarizer>
  
  <!-- Decline cost per sqm -->
  <whcg-json-maker name="Avvecklingskostnader per kvm (ej uppräknade)" key="0" value="{{initialDeclineCostPerSqm}}" datapackage="yearlyamounts"
  label="kr" period="{{period}}" fill whcgjsonoutput="{{whcgNonCompoundedDeclineCostsPerSqmJson}}"></whcg-json-maker>
  <whcg-period-compounder name="Avvecklingskostnader per kvm" whcgjsonoutput="{{whcgCompoundedDeclineCostsPerSqmJson}}" datapackage="yearlyamounts" label="kr" period="{{period}}"
  rate="{{inflation}}" whcgjsoninput="{{whcgNonCompoundedDeclineCostsPerSqmJson}}"></whcg-period-compounder>

  <!-- Decline cost -->
  <whcg-json-merger whcgjsonoutput="{{whcgCompoundedDeclineCostsPerSqmAndSumDeclineAreasJson}}" whcgjsonarrayinput="[{{whcgCompoundedDeclineCostsPerSqmJson}}, {{whcgSumDeclineAreasJson}}]"></whcg-json-merger>
  <whcg-period-summarizer mode="multiply" name="Avvecklingskostnader" whcgjsonoutput="{{whcgCompoundedDeclineCostsJson}}" whcgjsoninput="{{whcgCompoundedDeclineCostsPerSqmAndSumDeclineAreasJson}}"></whcg-period-summarizer>
  <whcg-period-discounter name="Avvecklingskostnader per kvm (diskonterade)" whcgjsonoutput="{{whcgDiscountedCompoundedDeclineCostsJson}}" datapackage="yearlyamounts" label="kr" period="{{period}}"
  rate="{{discountrate}}" whcgjsoninput="{{whcgCompoundedDeclineCostsJson}}"></whcg-period-discounter>


  <!-- Rented area -->
  <whcg-json-merger whcgjsonoutput="{{whcgEstablishedAndExpandAreasJson}}" whcgjsonarrayinput="[{{whcgNonCompoundedAreaAmountsJson}}, {{whcgSumExpansionAreasJson}}]"></whcg-json-merger>
  <whcg-period-summarizer mode="add" name="Hyrd yta" whcgjsonoutput="{{whcgSumEstablishedAndExpandAreasJson}}" whcgjsoninput="{{whcgEstablishedAndExpandAreasJson}}"></whcg-period-summarizer>
  <whcg-json-merger whcgjsonoutput="{{whcgSumEstablishedAndExpandAreasAndDeclineAreasJson}}" whcgjsonarrayinput="[{{whcgSumEstablishedAndExpandAreasJson}}, {{whcgSumDeclineAreasJson}}]"></whcg-json-merger>
  <whcg-period-summarizer mode="subtract" name="Hyrd yta" whcgjsonoutput="{{whcgSumAreasJson}}" whcgjsoninput="{{whcgSumEstablishedAndExpandAreasAndDeclineAreasJson}}"></whcg-period-summarizer>


  <!-- Rent cost per sqm -->
  <whcg-json-maker name="Hyreskostnader per kvm (ej uppräknade)" key="0" value="{{initialRentCostPerSqm}}" datapackage="yearlyamounts" label="kr/kvm"
	period="{{period}}" fill whcgjsonoutput="{{whcgNonCompoundedRentCostsPerSqmJson}}"></whcg-json-maker>
  <whcg-period-compounder name="Hyreskostnader per kvm" whcgjsonoutput="{{whcgCompoundedRentCostsPerSqmJson}}" datapackage="yearlyamounts" label="kr" period="{{period}}"
	rate="{{rentincrease}}" whcgjsoninput="{{whcgNonCompoundedRentCostsPerSqmJson}}"></whcg-period-compounder>

  <!-- Rent cost -->
  <whcg-json-merger whcgjsonoutput="{{whcgCompoundedRentCostsPerSqmAndSumAreasJson}}" whcgjsonarrayinput="[{{whcgCompoundedRentCostsPerSqmJson}}, {{whcgSumAreasJson}}]"></whcg-json-merger>
  <whcg-period-summarizer mode="multiply" name="Hyreskostnader" whcgjsonoutput="{{whcgCompoundedRentCostsJson}}" whcgjsoninput="{{whcgCompoundedRentCostsPerSqmAndSumAreasJson}}"></whcg-period-summarizer>
  <whcg-period-discounter name="Hyreskostnader (diskonterade)" whcgjsonoutput="{{whcgDiscountedCompoundedRentCostsJson}}" datapackage="yearlyamounts" label="kr" period="{{period}}"
  rate="{{discountrate}}" whcgjsoninput="{{whcgCompoundedRentCostsJson}}"></whcg-period-discounter>
  
  <!-- Heat cost per sqm -->
  <whcg-multiplier valuearray="[{{kwh}}, {{krperkwh}}]" valueoutput="{{initialHeatCostPerSqm}}"></whcg-multiplier>
  <whcg-json-maker name="Värmekostnader per kvm (ej uppräknade)" datapackage="yearlyamounts" label="kr/kvm" key="0" value="{{initialHeatCostPerSqm}}" period="{{period}}"
	fill whcgjsonoutput="{{whcgNonCompoundedHeatCostsPerSqmJson}}"></whcg-json-maker>
  <whcg-period-compounder name="Värmekostnader per kvm" whcgjsonoutput="{{whcgCompoundedHeatCostsPerSqmJson}}" datapackage="yearlyamounts" label="kr" period="{{period}}"
  rate="{{inflation}}" whcgjsoninput="{{whcgNonCompoundedHeatCostsPerSqmJson}}"></whcg-period-compounder>

  <!-- Heat cost -->
  <whcg-json-merger whcgjsonoutput="{{whcgCompoundedHeatCostsPerSqmAndSumAreasJson}}" whcgjsonarrayinput="[{{whcgCompoundedHeatCostsPerSqmJson}}, {{whcgSumAreasJson}}]"></whcg-json-merger>
  <whcg-period-summarizer mode="multiply" name="Värmekostnader" whcgjsonoutput="{{whcgCompoundedHeatCostsJson}}" whcgjsoninput="{{whcgCompoundedHeatCostsPerSqmAndSumAreasJson}}"></whcg-period-summarizer>
  <whcg-period-discounter name="Värmekostnader (diskonterade)" whcgjsonoutput="{{whcgDiscountedCompoundedHeatCostsJson}}" datapackage="yearlyamounts" label="kr" period="{{period}}"
  rate="{{discountrate}}" whcgjsoninput="{{whcgCompoundedHeatCostsJson}}"></whcg-period-discounter>


  <!-- Merged Costs -->
  <whcg-json-merger whcgjsonoutput="{{whcgMergedCompoundedCostsJson}}" whcgjsonarrayinput="[{{whcgCompoundedHeatCostsJson}}, {{whcgCompoundedRentCostsJson}}, {{whcgCompoundedDeclineCostsJson}}, {{whcgCompoundedExpandCostsJson}}, {{whcgInitialEstablishCost}}]"></whcg-json-merger>
  <whcg-period-summarizer mode="add" name="Totala kostnader" whcgjsonoutput="{{whcgTotalMergedCompoundedCostsJson}}" whcgjsoninput="{{whcgMergedCompoundedCostsJson}}"></whcg-period-summarizer>
  <whcg-json-merger whcgjsonoutput="{{whcgMergedDiscountedCompoundedCostsJson}}" whcgjsonarrayinput="[{{whcgDiscountedCompoundedHeatCostsJson}}, {{whcgDiscountedCompoundedRentCostsJson}}, {{whcgDiscountedCompoundedDeclineCostsJson}}, {{whcgDiscountedCompoundedExpandCostsJson}}, {{whcgInitialEstablishCost}}]"></whcg-json-merger>
  <whcg-period-summarizer mode="add" name="Totala kostnader (diskonterade)" whcgjsonoutput="{{whcgTotalMergedDiscountedCompoundedCostsJson}}" whcgjsoninput="{{whcgMergedDiscountedCompoundedCostsJson}}"></whcg-period-summarizer>
  <whcg-json-merger whcgjsonoutput="{{whcgMergedAndTotalCompoundedCostsJson}}" whcgjsonarrayinput="[{{whcgMergedCompoundedCostsJson}}, {{whcgTotalMergedCompoundedCostsJson}}]"></whcg-json-merger>
  <whcg-json-merger whcgjsonoutput="{{whcgDiscountedMergedAndTotalCompoundedCostsJson}}" whcgjsonarrayinput="[{{whcgMergedDiscountedCompoundedCostsJson}}, {{whcgTotalMergedDiscountedCompoundedCostsJson}}]"></whcg-json-merger>




	</template>
</dom-bind>
  
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      loginData: Object,
	  tail: Object,
	  whcgSumAreasJson: {
		type: String,
		notify: true,
		readOnly: false
	  },
	 chartJsSumAreasJson: {
		 type: String,
		 notify: true,
		 readOnly: false
	 }
    };
  }

  static get observers() {
    return [
      '_routePageChanged(tail.path)'
    ];
  }

  _routePageChanged(tail) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
	console.log('tail.path changed!');
	console.log(tail);
	this.page = tail
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
	// statement, so break it up.
	console.log('page changed');
	console.log(page);
    switch (page) {
      case '/one':
        import('./whcg-chart-view.js');
        break;
      case '/two':
        import('./whcg-chart-view.js');
        break;
      case '/three':
        import('./whcg-chart-view.js');
        break;
    }
  }
}

window.customElements.define('whcg-app', WhcgApp);