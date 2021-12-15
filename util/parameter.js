exports.isOgParameter = function (attribute){
	const ogRegex = new RegExp("^og:\\w+", "i");
	return ogRegex.test(attribute);
}

exports.isSeoParameter = function (attribute){
	const seoRegex = new RegExp("\\w*:\\w*|^$");
	return !seoRegex.test(attribute);
}