import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-scroll';

import { changeLanguage } from '../../tlwActionCreators';

import './TopNav.css';

const LanguageChooser = connect(
    state => ({
        currentLanguage: state.language.currentLanguage,
        languages: state.language.languages
    }),
    dispatch => ({
        onItemSelect: languageId => dispatch(changeLanguage(languageId))
    })
)(function ({currentLanguage, languages, onItemSelect}) {
    return (
        <div className="language-chooser">
            <span className="current-language">{currentLanguage.shortName}</span>
            <ul>
                {languages.map(language => (
                    language.id == currentLanguage.id ?
                    <li key={language.id} className="selected">{language.fullName}</li> :
                    <li
                        key={language.id}
                        onClick={() => onItemSelect(language.id)}>
                        {language.fullName}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default connect(
    state => ({
        brand: state.language.currentLanguage.strings.top_nav.brand,
        about: state.language.currentLanguage.strings.top_nav.about,
        ctaButton: state.language.currentLanguage.strings.top_nav.cta_button
    })
)(function ({brand, about, ctaButton}) {
    return (
        <div className="top-nav">
            <div className="brand">{brand}</div>
            <ul className="links row">
                <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-50}>{about}</Link></li>
                <li><a href="#" className="button">{ctaButton}</a></li>
                <li><LanguageChooser /></li>
            </ul>
        </div>
    );
});