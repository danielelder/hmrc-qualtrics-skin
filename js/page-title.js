// Create and update page title for each question
Qualtrics.SurveyEngine.addOnReady(function() {
    var h1 = jQuery('h1').text();
    // Exit if H1 missing
    if (h1.length === 0 ) {
        return;
    }

    var title = jQuery('title').text();
    // If page title not fully formatted (page - survey - domain)
    // Create a new full format title
    if (title.indexOf('- GOV.UK') === -1) {
        jQuery('title').text(h1 + ' - ' + title + ' - GOV.UK');
    }
    // Else update page title part only
    else {
        var surveyName = title.substring(title.indexOf('-') + 1).trim();
        jQuery('title').text(h1 + ' - ' + surveyName);
    }
});
