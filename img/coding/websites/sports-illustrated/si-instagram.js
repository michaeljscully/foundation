/*jslint devel: false, browser: true, maxerr: 50, indent: 4, white: true*/
/*global SI_GLOBAL: false, $: false, jQuery: false, console: false, controller: false, clearInterval: false, clearTimeout: false, document: false, event: false, frames: false, history: false, Image: false, location: false, name: false, navigator: false, Option: false, parent: false, screen: false, setInterval: false, setTimeout: false, window: false, XMLHttpRequest: false */
/*
JavaScript Name: SI Instagram Widget 
JavaScript URI: http://www.si.com
Description: This will create a new widget to handle the instagram data on SwimDaily
Version: 0.0.1
Author: Matt Stills
Author URI: http://www.mattstills.com
License: GPL2
*/
/*  Copyright 2012  Matt Stills  (email : matthew.stills@turner.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as 
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

(function () {
	'use strict';
	var init, markup, render, txtError, page,
		$inner, $lpager, $rpager,
		clean = [], activeSlide = 1, tries = 1, maxSlides = 1;
		
	var $ = jQuery;

	init = function () {
		if (typeof window.si_instagram === 'undefined') {
			txtError('No data found from the server.');
			$('#si-instagram').remove();
			return;
		}

		// cache jQuery elements we'll be needed later at render-time
		$inner = $('#si-instagram-inner');
		$lpager = $('#si-instagram-left-pager');
		$rpager = $('#si-instagram-right-pager');

		// gather the data from the DOM (provided by the PHP component of this plugin) and then destroy it
		clean = window.si_instagram;
		
		render(); // grab the data out of the DOM and render it

		$rpager.on('click', function () {
			page('right');
		});

		$lpager.on('click', function () {
			page('left');
		});
	};

	page = function (dir) {
		var nextSlide;

		dir = dir || 'left';

		if (dir === 'left') {
			nextSlide = (activeSlide < 2) ? maxSlides : activeSlide - 1;
		} else if (dir === 'right') {
			nextSlide = (activeSlide > 11) ? 1 : activeSlide + 1;
		}
		
		$('#si-ig-slide-' + activeSlide).fadeOut(500, function () {
			$(this).addClass('hidden');
		});

		$('#si-ig-slide-' + nextSlide).fadeIn(1000);

		activeSlide = nextSlide;
	};

	txtError = function (msg) {
		if (typeof console !== 'undefined' && typeof console.error === 'function') {
			console.error('SI Instagram: ' + msg);
		}
	};

	render = function () {
		var i, subject, mu, startIdx,
			// limit = 60, accepted = 0, addClass = '', slideNumber = 1;
			limit = 30, accepted = 0, addClass = '', slideNumber = 1;

		$inner.html('').removeClass('loading');
		mu = '';

		// iterate over the cleaned array until we have 15 usable pictures to render in the strip
		for (i = 0; i <= clean.length; i += 1) {
			subject = clean[i];

			if (accepted === limit) {
				break;
			}

			// ensure we get good data back from the API at every juncture
			if (typeof subject === 'object') {
				// cut slides at 5 images per
				if ((i % 5) === 0) {
					mu += (slideNumber > 1) ? '</div>' : '';
					mu += '<div id="si-ig-slide-' + slideNumber + '" class="ig-slide' + ((i >= 5) ? ' hidden' : '') + '" style="z-index: ' + (slideNumber + 10) + ';">';
					slideNumber += 1;
				}

				mu += markup(subject.photo, subject.link, subject.alt);
				accepted += 1;
			}
		}

		mu += '</div>';
		maxSlides = slideNumber - 1;

		// remove controls
		if (maxSlides === 1) {
			$lpager.hide();
			$rpager.hide();
		} else {
			$lpager.show();
			$rpager.show();
		}
		$inner.append(mu);
	};

	markup = function (img, link, title) {
		title = title || '';

		return '<div class="ig-image">' +
					'<a href="' + link + '" target="_blank">' +
					'<img src="' + img + '" title="' + title + '" />' +
					'</a>' +
				'</div>';
	};

	$(document).ready(function () {
		init();
	});
}());