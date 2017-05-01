const fetch = require('node-fetch');
// https://git.overstock.com/rest/api/1.0/projects/PP/repos/redeux/pull-requests/275/activities?limit=500

const createBitBucketUrl = ({
    host,
    project,
    repo
}) => resourcePath => `${host || 'https://bitbucket.org'}` +
    `/rest/api/1.0/projects/${project}/repos/${repo}${resourcePath}`;

exports.fetchFromBitBucket = config => {
    const { username, authToken } = config;
    const _createBitBucketUrl = createBitBucketUrl(config);

    return resourcePath => fetch(_createBitBucketUrl(resourcePath), {
        headers: {
            'X-Auth-User': username,
            'X-Auth-Token': authToken
        }
    });
};

exports.createBitBucketUrl = createBitBucketUrl;
