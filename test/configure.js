const {expect} = require('chai')
const confige = require('../src/configure')
const path = require('path')

describe('Configure', () => {

    it('load default configuration json file', () => {
        expect(confige.users.db_dir).to.equal(path.join(_dirname, '../db'))
    });

    it('test2', function() {
        const a = 100;
        expect(a).to.equal(100);
    });
});

