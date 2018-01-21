var assert = require('assert');
describe('webdriver.io page', function() {
    
    it('should match title from homepage', function () {
        browser.url('http://react.placeinuk.info');
        //browser.url('/');
        var title = browser.getTitle();  
        assert.equal(title,'React Redux Node.Js MongoDB CRUD App');
    });
 
    it('should redirect to events list', function () {
        browser.url('/');
        browser.click('/events');
        // continue after input from command
        browser.debug();
    });


    it('set value to inputs, then add a new event', function () {
        browser.url('http://react.placeinuk.info/events/new');
        //browser.debug();
        browser.setValue('input[name="name"]','Event Name ' + Math.floor(Math.random() * 10000) );
        browser.setValue('input[name="id"]','123456789');
        browser.setValue('textarea[name="description"]','Description Event Name');
        browser.setValue('input[name="start_time"]','231342242');
        browser.setValue('input[name="end_time"]','231842242');
        
        // continue after input from command
        browser.debug();

        var myButton = $('button');
        myButton.click();

        // make a scrreenshot
        browser.saveScreenshot('screen.png');
        // continue after input from command
        browser.debug();
    });
    

});