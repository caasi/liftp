import sholud from 'should';
import request from 'superagent';
import Promise from 'bluebird';
import liftp from '../';

const moedict = 'https://www.moedict.tw/'

var { all }   = Promise,
    lift      = liftp(all),
    getPinyin = lift((c) => c.heteronyms[0].pinyin),
    getDict;

getDict = lift((c) => {
  return new Promise((resolve, reject) => {
    request
      .get(`${moedict}${c}.json`)
      .accept('json')
      .end((err, res) => {
        if (err)
          reject(err);
        else
          resolve(res.body);
      });
  });
});

describe('liftp', () => {
  describe('lifted function', () => {
    it('should take promise as arguments', (done) => {
      var pinyins = ['萌', '芽'].map(getDict).map(getPinyin);

      all(pinyins)
        .then((pinyins) => {
          pinyins.join(' ').should.equal('méng yá');
          done();
        });
    });
  });
});

