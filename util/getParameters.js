const axios = require("axios").default;
const cheerio = require('cheerio');
const _ = require("lodash");


const {isOgParameter, isSeoParameter} = require("./parameter");

module.exports = async function getParameters(url){
	let res;
	try{
		res = await axios.get(url);
	}
	catch(ex){
		if(ex.errno === "ENOTFOUND")
			return null;
	}

	let $ = cheerio.load(res.data);
	
	const ogParameters = {};
	const otherParameters = {};

	$("meta").each((i, v)=>{
		const {attribs: attributes} = v;
	
		["property", "name", "itemprop", "http-equiv"].forEach(
			key=>{
				if(key in attributes){
					if(isOgParameter(attributes[key]))
						ogParameters[attributes[key]] = attributes.content;

					else if(isSeoParameter(attributes[key]))
						otherParameters[attributes[key]] = attributes.content;
				}
		});
	});

	if(_.isEmpty(ogParameters)){
		otherParameters["title"] = $("head > title").text();
		return otherParameters;
	}

	return ogParameters;
}
