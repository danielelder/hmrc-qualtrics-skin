# hmrc-qualtrics-skin

Set of CSS overrides that can be applied to a HMRC survey to replicate the GDS look and feel.

This repo contains a subset of the available question types, these are:

* Information page, this is normally used at the start of the survey to explain the purpose of the survey and to provide the user with any specific instructions.
* Text input page - Single line / small amount of text
* Text area page - Multiple lines / large amount of text
* Checkboxes - Multiple choice / multiple selections
* Radios - Multiple choice / single selection

## Additional styles

* Error messages
* Footer
* Details component

## How to use

Create a new blank survey project.

Apply the following settings under the Look and feel section within Qualtrics.

Leave all other options as the default values.

### Theme

Blank

### Layout

Flat

### General

Next button text: Next

Previous Button text: Previous

Questions Per Page: 1

Header: Add the content of the GOVUK_logo.svg file from this repo.

### Style

Font: Arial

Foreground Contrast: High

Question Text: 18

Answer Text: 18

Custom CSS: Add the content of the overrides.css file from this repo.
