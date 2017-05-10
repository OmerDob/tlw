import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BodyClasses from '../BodyClasses/BodyClasses';
import Avatar from '../Avatar/Avatar';
import TopNav from '../TopNav/TopNav';

import workshopsAvatar from '../../resources/workshops_avatar.jpg';
import partiesAvatar from '../../resources/parties_avatar.jpg';
import tlvAvatar from '../../resources/tlv_avatar.jpg';

import './App.css';

const Jumbotron = connect(
    state => ({
        brand: state.language.currentLanguage.strings.jumbotron.brand,
        dates: state.language.currentLanguage.strings.jumbotron.dates,
        ctaButton: state.language.currentLanguage.strings.jumbotron.cta_button
    })
)(function ({brand, dates, ctaButton}) {
    return (
        <div className="jumbotron">
            <div className="container column">
                <div>
                    <div className="brand">{brand}</div>
                    <div className="dates">{dates}</div>
                </div>
                <a className="button">{ctaButton}</a>
            </div>
        </div>
    );
});

const About = connect(
    state => ({
        header: state.language.currentLanguage.strings.about.header,
        workshops: state.language.currentLanguage.strings.about.workshops,
        parties: state.language.currentLanguage.strings.about.parties,
        tlv: state.language.currentLanguage.strings.about.tlv
    })
)(function ({header, workshops, parties, tlv}) {
    return (
        <div id="about">
            <h1 className="header">{header}</h1>
            <div className="row">
                <Avatar img={workshopsAvatar} title={workshops.header}>
                    <p>{workshops.content}</p>
                </Avatar>
                <Avatar img={partiesAvatar} title={parties.header}>
                    <p>{parties.content}</p>
                </Avatar>
                <Avatar img={tlvAvatar} title={tlv.header}>
                    <p>{tlv.content}</p>
                </Avatar>
            </div>
        </div>
    );
});

export default function ({}) {
    return (
        <div>
            <BodyClasses />
            <TopNav />
            <Jumbotron />
            <div className="container">
                <About />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    );
}