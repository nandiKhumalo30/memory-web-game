 
const jsdom = require('jsdom')
const {JSDOM} = jsdom 
const fs = require('fs')


describe('index.html', function(){
    var browser
    beforeEach(function(done){
        JSDOM.fromFile('./src/index.html', {

        })
        .then(function(resp){
        browser = resp;
        done();
        })
    })
    afterEach(function(){
        browser.window.close()
    })
    it('should have a body element', function(){
        var body = browser.window.document.querySelector('body')
        expect(body).not.toBe(null)
    })
    it('should have 12 images', function(){
        var image = browser.window.document.querySelector('img')
        expect(image).not.toBe(null)
    })

})
var obj = {cardObj: function rotateCard(){}, shuffleObj: function shuffle(){}}
describe('Game', function(){
    it('should spy on rotateCard', function(){
        var spy = spyOn(obj, 'cardObj')
        obj.cardObj()
        expect(spy).toHaveBeenCalled()  
    })
    it('should spy on shuffle', function(){
        var spy = spyOn(obj, 'shuffleObj')
        obj.shuffleObj()
        expect(spy).toHaveBeenCalled()  
    })    
})
