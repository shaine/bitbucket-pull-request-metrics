const config = require('./config');
const { fetchFromBitBucket } = require('./lib/utils');

const fetch = fetchFromBitBucket(config);
