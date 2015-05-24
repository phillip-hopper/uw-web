
sofia.textproviders['ufw'] = (function() {

	var text_data = [],
		text_data_is_loaded = false,
		text_data_is_loading = false,
		text_data_callbacks = [],
		providerName = 'ufw',
        ufw_data={};

	function getTextManifest (callback) {

		// check for offline use
//		if (!sofia.config.enableOnlineSources ) {
//			callback(null);
//			return;
//		}

		// if loaded immediately callback
		if (text_data_is_loaded) {

			callback(text_data);

		} else {

			// store callback
			text_data_callbacks.push(callback);

			// don't continue
			if (text_data_is_loading) {
				return;
			}

			text_data_is_loading = true;


			sofia.ajax({
				url: 'https://api.unfoldingword.org/uw/txt/2/catalog.json',
				dataType: 'json',
				cache: false,
				success: function(data) {

					text_data = [];
                    ufw_data = data.cat[0].langs[1].vers;
                    ufw_data.forEach(function(item){
                            text_data.push({
                                "id": "ufw_" + item.slug,
                                "name": item.name,
                                "nameEnglish": item.name,
                                "abbr": item.slug,
                                "lang": "eng",
                                "langName": "English",
                                "langNameEnglish": "English",
                                "dir": "ltr",
                                "type": "bible",
                                "content":item.toc
                            });
                    });

					TextLoader.processTexts(text_data, providerName);

					for (var i=0, il=text_data.length; i<il; i++) {
						text_data[i].aboutHtml = createAboutHtml(text_data[i].name, text_data[i].abbr);
					}


					finish();
				},
				error: function(jqXHR, textStatus, errorThrown) {
					text_data = null;
					finish();
				}
			});
		}
	}

	function finish() {
		text_data_is_loading = false;
		text_data_is_loaded = true;

		while (text_data_callbacks.length > 0) {
			var cb = text_data_callbacks.pop();
			cb(text_data);
		}
	}

	function createAboutHtml(title, version_code) {
		return '<h1>' + title + ' (' + version_code + ')' + '</h1>' +
				'<dl>' +
					'<dt>Source</dt>' +
					'<dd>This text comes from unfoldingword</dd>' +
				'</dl>';
	}
	
	function getProviderid(textid) {
		var parts = textid.split(':'),
			fullid = providerName + ':' + (parts.length > 1 ? parts[1] : parts[0]);
			
		return fullid;
	}

	function getTextInfo(textid, callback) {
        console.log(ufw_data);
        console.log(textid);
		if (!text_data_is_loaded) {

			getTextManifest (function() {
				getTextInfo(textid, callback);
			});
			return;
		}
		
		var providerid = getProviderid(textid);		

        console.log(providerid);
		// get initial data
		var info = text_data.filter(function(text) {
			return text.id == textid;
		})[0];
        console.log(info);
		if (typeof info.divisions == 'undefined' || info.divisions.length == 0) {

			info.providerName = providerName;
			info.divisions = [];
			info.divisionNames = [];
			info.sections = [];
            info.content.forEach(function(data){
                info.divisions.push(data.slug);
                info.divisionNames.push(data.title);
            });
            console.log("info callback");
            console.log(info);
            callback(info);

		} else {

			callback(info);
		}

	}

	function loadBooks(info, dam_id, callback) {

		$.ajax({
			beforeSend: function(xhr){
				if (xhr.overrideMimeType){
					xhr.overrideMimeType("application/javascript");
				}
			},
			dataType: 'jsonp',
			url: 'http://dbt.io/library/book?v=2&reply=jsonp&key=' + sofia.config.fcbhKey + '&dam_id=' + dam_id,
			success: function(data) {

				// push data onto info object
				for (var i=0, il=data.length; i<il; i++) {
					var book = data[i],
						osisIndex = bible.DEFAULT_BIBLE_OSIS.indexOf(book.book_id),
						dbsBookCode = bible.DEFAULT_BIBLE[osisIndex];


					info.divisions.push(dbsBookCode);
					info.divisionNames.push(book.book_name);

					for (var c=0; c<book.number_of_chapters; c++) {
						info.sections.push(dbsBookCode + (c+1).toString());
					}
				}

				callback();

			}
		});

	}


	function getTextInfoSync(textid) {

		var providerid = getProviderid(textid);

		// get initial data
		var info = text_data.filter(function(text) {
			return text.providerid == providerid;
		})[0];

		return info;
	}


	function loadSection(textid, sectionid, callback) {


		// check for complete textinfo first, since we'll need the .sections data to make this work
		getTextInfo(textid, function(textinfo) {

			var
				bookid = sectionid.substring(0,2),
				chapter = sectionid.substring(2),
				lang = textinfo.lang,
				dir = (textinfo.dir && (textinfo.dir == 'ltr' || textinfo.dir == 'rtl')) ? textinfo.dir : data.language.isRTL(lang) ? 'rtl' : 'ltr',
				//usfmbook = bible.BOOK_DATA[bookid].usfm.substr(0,1).toUpperCase() + bible.BOOK_DATA[bookid].usfm.substr(1).toLowerCase(),
				usfmbook = bible.BOOK_DATA[bookid].osis,
				dam_id = bible.OT_BOOKS.indexOf(bookid) > -1 ? textinfo.ot_dam_id : textinfo.nt_dam_id,
				sectionIndex = textinfo.sections.indexOf(sectionid),
				previd = sectionIndex > 0 ? textinfo.sections[sectionIndex-1] : null,
				nextid = sectionIndex < textinfo.sections.length ? textinfo.sections[sectionIndex+1] : null;
                //var hardcoded = "gen";
                //var url = textinfo.content.filter(function(data){
                //    return data.slug=hardcoded
                //})[0].src; 
                //console.log(url)
                var url="http://104.131.170.96/b001.html";

			$.ajax({
				dataType: 'html',
				url: url,
				success: function(data) {
                    console.log(data);
                    callback(data.substring(data.indexOf("<body>")+6,data.indexOf("</body")));
				}

			});


		});



	}

	function startSearch(textid, divisions, text, onSearchLoad, onSearchIndexComplete, onSearchComplete) {

		var info = getTextInfoSync(textid);

		var e = {
			type:'complete',
			target: this,
			data: {
				results: [],
				searchIndexesData: [], // not needed for SearchWindow
				searchTermsRegExp: SearchTools.createSearchTerms(text, false),
				isLemmaSearch: false
			}
		};

		var dam_id = '';

		if (info.ot_dam_id != '') {
			dam_id = info.ot_dam_id;
		} else if (info.nt_dam_id != '') {
			dam_id = info.nt_dam_id;
		}


		doSearch(dam_id, divisions, text, e, function() {

			onSearchComplete(e);

		});
	}
	function doSearch(dam_id, divisions, text, e, callback) {

		$.ajax({
			beforeSend: function(xhr){
				if (xhr.overrideMimeType){
					xhr.overrideMimeType("application/javascript");
				}
			},
			dataType: 'jsonp',
			
			// One giant call seems faster, than doing all the books individually?
			url: 'http://dbt.io/text/search?v=2&reply=jsonp&key=' + sofia.config.fcbhKey + '&dam_id=' + dam_id + '&query=' + text.replace(/\s/gi, '+') + '&limit=2000',
			success: function(data) {

				for (var i=0, il=data[1].length; i<il; i++) {
					var verse = data[1][i],
						dbsBookCode = bible.DEFAULT_BIBLE[ bible.DEFAULT_BIBLE_OSIS.indexOf(verse.book_id) ],
						fragmentid = dbsBookCode + verse.chapter_id + '_' + verse.verse_id,
						hasMatch = e.data.searchTermsRegExp[0].test(verse.verse_text);

					if (hasMatch && (divisions.length == 0 || divisions.indexOf(dbsBookCode) > -1)) {
						e.data.results.push({
							fragmentid: fragmentid,
							html: highlightWords(verse.verse_text, e.data.searchTermsRegExp)
						});
					}
				}

				callback(data);
			}
		});
	}

	function highlightWords(text, searchTermsRegExp) {

		var processedHtml = text;

		for (var j=0, jl=searchTermsRegExp.length; j<jl; j++) {

			searchTermsRegExp[j].lastIndex = 0;

			// surround the word with a highlight
			processedHtml = processedHtml.replace(searchTermsRegExp[j], function(match) {
				return '<span class="highlight">' + match + '</span>';
			});
		}

		return processedHtml;
	}


	return {
		getTextManifest: getTextManifest,
		getTextInfo: getTextInfo,
		loadSection: loadSection,
		startSearch: startSearch
	}

})();
