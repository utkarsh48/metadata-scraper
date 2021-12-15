const {isOgParameter, isSeoParameter} = require("../util/parameter");

describe("Identification of ", function(){
	it("valid OG parameters", function (){
		const params = ["og:image", "og:description"];

		params.forEach(param=>{
			expect(isOgParameter(param)).toBeTruthy();
		});
	});

	
	it("invalid OG parameters", function (){
		const params = ["og:", "", ":", "go:", "og", ":og"];

		params.forEach(param=>{
			expect(isOgParameter(param)).toBeFalsy();
		});
	});

	
	it("SEO parameters", function (){
		const params = ["name", "description", "content-type", "author"];

		params.forEach(param=>{
			expect(isSeoParameter(param)).toBeTruthy();
		});
	});

	it("non SEO parameters", function (){
		const params = ["twitter:", ":", "", "og:"];

		params.forEach(param=>{
			expect(isSeoParameter(param)).toBeFalsy();
		});
	});
});