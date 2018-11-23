// Core 
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

// Instruments
import Styles from './styles.m.css';

const portal = document.getElementById('spinner');

export default class Spinner extends Component {
	static propTypes = {
        spinning: PropTypes.bool.isRequired
    }

	render () {
		const { spinning } = this.props;

		return createPortal(
			(spinning === true) ? <div className = { Styles.spinner } /> : null,
			portal,
		);
	}
}