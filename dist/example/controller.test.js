describe("exampleController",function(){
	var exampleController;
	
	beforeEach(module('pennyTracker.core'));
	
	beforeEach(inject(function($controller){
		
		//inject the $controller provider and create the exampleController.
		exampleController = $controller('exampleController');
		
	}));
	
	it("should exist", function(){
		expect(exampleController).toBeDefined();
	});
	
	it("should have a test variable",function(){
		expect(exampleController.test).toBe("hi");
	});
});