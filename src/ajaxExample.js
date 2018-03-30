import mocha from './lib/setup';
import $ from 'jquery';

//var expect = chai.expect;

describe('Over All Header/group of tests to run', function() {
    it('specific test in the group to run', function(done) {
        
        
        $.ajax('/cgi/pdfgen.pl',{
            method: 'POST',
            data: {
                head: '',
                body: '<p>Hello World</p>'
            },
            success: function(returnData) {
  //              expect(returnData).to.be.an('object');
  //              expect(returnData.fileName).to.exist;
                done();
            },
            error: function(err) {
                done(err);
            }
        
        });
    });
});
