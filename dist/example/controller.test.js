describe("controller",function(){
	var controller;
	
	beforeEach(module('pennyTracker.core'));
	
	beforeEach(inject(function($controller){
		
		controller = $controller
	}));
	
	it("should do something", function(){
		expect(controller.test).toBe("hi");
	});
})