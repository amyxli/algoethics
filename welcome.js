var welcome = {};

// --------------  things that vary from task to task --------------

welcome.task = {};
welcome.task.blurb = "<b>Algorithms in everyday life</b> is a short psychological study investigating people's decision-making about algorithms.";
welcome.task.time = '<b>15 minutes</b>';
welcome.task.pay = '&pound;1.88';

// --------------  things that vary between ethics approvals --------------

welcome.ethics = {};
welcome.ethics.approval = '3605';
welcome.ethics.name = 'Judgements About Algorithms';
welcome.ethics.selection = 'You are invited to take part in this research study. The research study aims to examine how people incorporate different information in their judgements about the trustworthiness of algorithms. You have been invited because you have responded to an advertisement for this study.';
welcome.ethics.who = 'The study is being carried out by the following researchers: Professor Benjamin Newell, Garston Liang, and Amy Li at the School of Psychology, at UNSW Sydney.';
welcome.ethics.excluion = 'Not applicable.';
welcome.ethics.voluntary = 'Participation in this research study is voluntary. If you do not want to take part, you do not have to. If you decide to take part and later change your mind, you are free to withdraw from the study at any stage (See Item 11).';
welcome.ethics.participation = '<p>If you decide to take part in the research study, we will ask you to complete a simple task which will take approximately '+ welcome.task.time +'. In this task, you will be provided with a series of text vignettes, respond using text and rating scales, and complete some questionnaires.</p>' +
    '<p>We don\'t expect this research to cause any harm. However, you may skip any or all written or verbal questions if you wish.  Please let the researchers know if you need any assistance for any reason. </p>'

welcome.ethics.time = 'In total, participation in this study will require ' + welcome.task.time + '. This will include one single session in which you will complete the task described above.'
welcome.ethics.recompense = 'You will receive ' + welcome.task.pay + ' as recompense for your participation, which equates to &pound;7.52 an hour'
welcome.ethics.benefits = 'We cannot promise that you will receive any benefits from this study, but we hope to use the findings from this study to further our understanding of the factors influencing people’s judgements about algorithms, and hence shed light on what might affect their acceptability to users.'
welcome.ethics.confidential = 'The information that you give us will be kept for a minimum of 5 years after the project’s completion.  We will store information about you in a deidentified format at a secure location in the School of Psychology at UNSW Sydney. <br><br>' +
    'Researchers at UNSW are requested to store their aggregated research data in the UNSW data repository, this is a system called ResData. Once the aggregated data are deposited into this repository, they will be retained in this system permanently, but in a format where your data will not be individually identifiable.<br><br>' +
    'We hope to publish the results of this study, but this will not include information that identifies you. Information collected for this research project may be shared with other researchers in de-identified form only; for example, in order to verify that our findings are robust, or form the basis of future research.'   
welcome.ethics.results = 'The research team intend to publish and/ report the results of the research study in a variety of ways. All information published will be done in a way that will not identify you. If you would like to receive a copy of the results, you can let the research team know by contacting Amy Li via email (amy.x.li@unsw.edu.au).'
welcome.ethics.withdraw = 'If you do consent to participate, you may withdraw at any time. You can do this by closing the questionnaire. If you withdraw from the research, we will destroy any information has already been collected. Once you have submitted the questionnaire however, we will not be able to withdraw your responses as the questionnaire is anonymous.<br><br>' +
    'Your decision not to participate or to withdraw from the study will not affect your relationship with UNSW Sydney. If you decide to withdraw from the research study, the researchers will not collect additional information from you. Any identifiable information about you will be withdrawn from the research project.' 
welcome.ethics.contact = 'If you require further information regarding this study or if you have any problems that may be related to your involvement in the study, you can contact the following member/s of the research team: <br><br>' +
    '   <b>Chief Investigator </b> Benjamin Newell<br>' +
    '   <b>Position </b> Professor<br>' +
    '   <b>Telephone </b> +61 2 9385 1606<br>' +
    '   <b>Email </b>ben.newell@unsw.edu.au <br><br>' +

    '   <b>Investigator </b> Amy X. Li<br>' +
    '   <b>Position </b> Research Assistant<br>' +
    '   <b>Telephone </b> -<br>' +
    '   <b>Email </b>amy.x.li@unsw.edu.au  <br><br>' +

    '<b>What if I have a complaint or any concerns about the research study?</b><br>'+
    'If you have a complaint regarding any aspect of the study or the way it is being conducted, please contact the UNSW Human Ethics Coordinator: <br>' +
    '   <b>Position </b> UNSW Human Research Ethics Coordinator <br>' +
    '   <b>Telephone </b> + 61 2 9385 6222<br>' +
    '   <b>Email </b>humanethics@unsw.edu.au<br>' +
    '   <b>HC Reference Number </b>' + welcome.ethics.approval + ' <br><br>' 

    // ----------------------- function to start the task ------------------
welcome.run = function() { 
    document.getElementById("welcome").innerHTML =
        welcome.section.header + 
        welcome.section.start + 
        welcome.section.consent +
        welcome.section.demographics;
}

// ------------- actions to take at the end of each click ----------------
welcome.click = {};
welcome.click.start = function() {
    welcome.helpers.setDisplay('start', 'none');
    welcome.helpers.setDisplay('consent', '');
    welcome.helpers.setHeader(' ');   
}
welcome.click.consent = function() {
    welcome.helpers.setDisplay('consent', 'none');
    welcome.helpers.setDisplay('demographics', '');
    welcome.helpers.setHeader(' ');
}

welcome.click.demographics = function() {
    welcome.helpers.setDisplay('demographics', 'none');
    welcome.helpers.setDisplay('header', 'none');
    jsPsych.data.addProperties({  // record the condition assignment in the jsPsych data
        gender: welcome.helpers.getRadioButton("gender"),
        age: document.getElementById("age").value,
        country: document.getElementById("country").value
    });
    startExperiment(); // start the jsPsych experiment
}


// ------------- html for the various sections ----------------
welcome.section = {};
welcome.section.header =
    '<!-- ####################### Heading ####################### -->' +
    '<a name="top"></a>' +
    '<h1 style="text-align:center; width:1200px" id="header" class="header">' +
    '   &nbsp; UNSW Judgement and Decision-making</h1>';

welcome.section.start =
    '<!-- ####################### Start page ####################### -->' +
    '<div class="start" style="width: 1000px">' +
    '<div class="start" style="text-align:left; border:0px solid; padding:10px;' +
    '                          width:800px; float:right; font-size:110%">' +
    '<p>Thanks for signing up for this survey. ' + welcome.task.blurb + ' It involves the following steps:</p>' +
    '<ol>' +
    '<li> Because this is a University research project, we ask for your informed consent. ' +
    '    <br></li>' +
    '<li> Next, we give you the experiment itself with instructions to explain the task.<br></li>' +
    "<li> At the end, we will provide you a <b>completion code</b> to enter on Prolific's site and receive your payment.</li>" +
    '</ol>' +
    '<p>The total time taken should be about ' + welcome.task.time + '. Please <u>do not</u> use the "back" ' +
    '   button on your browser or close the window until you reach the end. ' +
    '   This is very likely to break the experiment and may make it difficult for you to get paid.' +
    '   However, if something does go wrong, please contact us! When you are ready to begin, click on' +
    '   the "start" button below.</p>' +
    '<!-- Next button for the splash page -->' +
    '<p align="center"> <input type="button" id="splashButton" class="start jspsych-btn" ' +
    'value="Start!" onclick="welcome.click.start()"> </p>' +
    '</div>' +
    '</div>';

welcome.section.consent =
    '	<!-- ####################### Consent ####################### -->' +
    '	<div class="consent" style="display:none; width:1000px">' +
    '		<!-- Text box for the splash page -->' +
    '		<div class="consent" style="text-align:left; border:0px solid; padding:10px;  width:800px; font-size:110%; float:right">' +
    '			<p align="right">Approval No ' + welcome.ethics.approval + '</p>' +
    '			<p align="center"><b>THE UNIVERSITY OF NEW SOUTH WALES<br>' +
    '			PARTICIPANT INFORMATION STATEMENT</b><br><br>' + welcome.ethics.name + '</p>' +
    '			<p><b>1.	What is the research study about?</b></p>' +
    '			<p>' + welcome.ethics.selection + '</p>' +
    '			<p><b>2.	Who is conducting this research?</b></p>' +
    '			<p>' + welcome.ethics.who + '</p>' +
    '			<p><b>3.	Inclusion/Exclusion Criteria</b></p>' +
    '			<p>' + welcome.ethics.excluion + '</p>' +
    '			<p><b>4.	Do I have to take part in this research study?</b></p>' +
    '			<p>' + welcome.ethics.voluntary + '</p>' +
    '			<p><b>5.	What does participation in this research require, and are there any risks involved?</b></p>' +
    '			<p>' + welcome.ethics.participation + '</p>' +
    '			<p><b>6.	Total participation time</b></p>' +
    '			<p>' + welcome.ethics.time + '</p>' +
    '			<p><b>7.	Recompense to participants</b></p>' +
    '			<p>' + welcome.ethics.recompense + '</p>' +
    '			<p><b>8.	What are the possible benefits to participation?</b></p>' +
    '			<p>' + welcome.ethics.benefits + '</p>' +
    '			<p><b>9.	What will happen to information about me?</b></p>' +
    '			<p>' + welcome.ethics.confidential + '</p>' +
    '			<p><b>10.	How and when will I find out what the results of the research study are?</b></p>' +
    '			<p>' + welcome.ethics.results + '</p>' +
    '			<p><b>11.	What if I want to withdraw from the research study?</b></p>' +
    '           <p>' + welcome.ethics.withdraw + '</p>' + 
    '			<p><b>12.	What should I do if I have further questions about my involvement in the research study?</b></p>' +
    '           <p>' + welcome.ethics.contact + '</p>' + 
    '			<p>Please keep a copy of this information sheet (you can download the pdf <a href="./images/consent_3605.pdf" target="_blank">here</a>)</p>' +
    '			<br>' +
    '			<p align="center"><b>PARTICIPANT CONSENT</b></p>' +
    '			By continuing, you are making a decision whether or not to participate. Clicking the button below indicates that, having read the information provided on the participant information sheet, you agree with the following:' +
    '           <ul>'+
    '               <li>I understand I am being asked to provide consent to participate in this research study;</li>' +
    '               <li>I have read the Participant Information Sheet or someone has read it to me in a language that I understand;</li>' +
    '               <li>I understand the purposes, study tasks and risks of the research described in the study;</li>' +
    '               <li>I provide my consent for the information collected about me to be used for the purpose of this research study only;</li>' +
    '               <li>I have been given contact details of the researchers to enable me to ask questions about my participation.</li>' +
    '               <li>I freely agree to participate in this research study as described and understand that I am free to withdraw at any time during the study and withdrawal will not affect my relationship with any of the named organisations and/or research team members.</li>' +
'               </ul>' +
'			<br>' +
'			<p align="center">' +
'           <input type="button" id="consentButton" class="consent jspsych-btn" value="I agree" onclick="welcome.click.consent()" >' +
'			</p>' +
'			<p>To withdraw your consent, simply close the browser tab and email Amy (amy.x.li@unsw.edu.au) the time when you stopped the task. Your data will be deleted from our records.</p>' +
'		</div><br><br></div>';
    welcome.section.demographics = 
 '	<!-- ####################### Demographics ####################### -->' +
    '	<div class="demographics" style="display:none; align:center; width: 1000px">' +
    '		<div class="demographics" style="text-align:left; border:0px solid; padding:10px;  width:800px; font-size:110%; float:right">' +
    '			<!-- Explanatory text -->' +
    '            <p font-size:120%><b>Demographic information:</b></p>' +
'               <p>We would first like to ask you for some demographics information, although this is optional.</p>' +
    '			<!-- Gender -->' +
    '           <label for="gender"><b>Gender you identify by: &nbsp;</b></label>' +
    '           <input type="radio" name="gender" value="male" /> Male &nbsp; ' +
    '           <input type="radio" name="gender" value="female" /> Female &nbsp;' +
    '           <input type="radio" name="gender" value="non-binary" /> Non-binary &nbsp;' +
    '           <input type="radio" name="gender" value="other" /> Other &nbsp;' +
    '           <input type="radio" name="gender" value="prefer" /> Prefer not to say<br /><br />' +
    '			<!-- Age -->' +
    '           <label for="age"><b>Age: &nbsp;</b></label><input id="age" name="age" autocomplete = "off"/><br /><br />' +
    '			<!-- country -->' +
    '           <label for="country"><b>Country of residence: &nbsp;</b></label>' +
    '            <input id="country" name="country" autocomplete = "off" /><br /><br />' +
    '			<br><br>' +
    '		<!-- Demographics  button -->' +
    '        <p align="center">' +
    '                <input type="button" class="demographics jspsych-btn"' +
    '                        id="demographicsButton" value="Next >"' +
    '                       onclick="welcome.click.demographics()">' +
    '       </p></div>';




// ----------------------- helper functions ------------------

welcome.helpers = {};
welcome.helpers.getRadioButton = function(name) { // get the value of a radio button
    var i, radios = document.getElementsByName(name);
    for (i = 0; i < radios.length; i = i + 1) {
        if (radios[i].checked) {
            return (radios[i].value);
        }
    }
    return ("NA");
}

welcome.helpers.setDisplay = function(theClass, theValue) { // toggle display status
    var i, classElements = document.getElementsByClassName(theClass);
    for (i = 0; i < classElements.length; i = i + 1) {
        classElements[i].style.display = theValue;
    }
}
welcome.helpers.setVisibility = function(theClass, theValue) { // toggle visibility
    var i, classElements = document.getElementsByClassName(theClass);
    for (i = 0; i < classElements.length; i = i + 1) {
        classElements[i].style.visibility = theValue;
    }
}
welcome.helpers.setHeader = function(theValue) { // alter the header
    document.getElementById("header").innerText = theValue;
}










