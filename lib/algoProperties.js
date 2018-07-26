var bignum = require('bignum');
var multiHashing = require('unomp-multi-hashing');
var util = require('./util.js');

var diff1 = global.diff1 = 0x00000000ffff0000000000000000000000000000000000000000000000000000;

var algos = module.exports = global.algos = {
    sha256: {
        //Uncomment diff if you want to use hardcoded truncated diff
        //diff: '00000000ffff0000000000000000000000000000000000000000000000000000',
        hash: function(){
            return function(){
                return util.sha256d.apply(this, arguments);
            }
        }
    }	     
    vipstar: {
        hash: function(){
            return function(){
                return multiHashing.vipstar.apply(this, arguments);
            }
        }
    },
};



for (var algo in algos){
    if (!algos[algo].multiplier)
        algos[algo].multiplier = 1;

    /*if (algos[algo].diff){
        algos[algo].maxDiff = bignum(algos[algo].diff, 16);
    }
    else if (algos[algo].shift){
        algos[algo].nonTruncatedDiff = util.shiftMax256Right(algos[algo].shift);
        algos[algo].bits = util.bufferToCompactBits(algos[algo].nonTruncatedDiff);
        algos[algo].maxDiff = bignum.fromBuffer(util.convertBitsToBuff(algos[algo].bits));
    }
    else if (algos[algo].multiplier){
        algos[algo].maxDiff = diff1.mul(Math.pow(2, 32) / algos[algo].multiplier);
    }
    else{
        algos[algo].maxDiff = diff1;
    }*/
}
