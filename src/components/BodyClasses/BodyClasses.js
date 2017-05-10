import React, { Component } from 'react';
import { connect } from 'react-redux';

export default connect(
    state => ({
        languageClass: state.language.currentLanguage.extraBodyClass
    })
)(class BodyClasses extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.languageClass) {
            this.currentLanguageClass = this.props.languageClass;

            document.body.classList.add(this.currentLanguageClass);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.componentWillUnmount();
        
        if (nextProps.languageClass) {
            this.currentLanguageClass = nextProps.languageClass;

            document.body.classList.add(this.currentLanguageClass);
        }
    }
    
    componentWillUnmount() {
        if (this.currentLanguageClass) {
            document.body.classList.remove(this.currentLanguageClass);

            this.currentLanguageClass = undefined;
        }
    }

    render() {
        return (<span></span>);
    }
});