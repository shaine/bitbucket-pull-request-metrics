const { describe, it } = require('mocha');
const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const proxyquire = require('proxyquire');
const fetchStub = sinon.stub().returns('fetchStubReturn');
const { createBitBucketUrl, fetchFromBitBucket } = proxyquire('./utils', {
    'node-fetch': fetchStub
});

describe('utils', () => {
    describe('createBitBucketUrl', () => {
        it('creates a BitBucket URL', () => {
            expect(createBitBucketUrl({
                host: 'https://test.com',
                project: 'TEST',
                repo: 'test-repo'
            })('/my/path')).to.equal('https://test.com/rest/api/1.0/projects/TEST/repos/test-repo/my/path');
        });
    });

    describe('fetchFromBitBucket', () => {
        it('makes a BitBucket request', () => {
            const value = fetchFromBitBucket({
                host: 'https://test.com',
                project: 'TEST',
                repo: 'test-repo',
                username: 'foobar',
                authToken: 'my token'
            })('/my/path');

            expect(value).to.equal('fetchStubReturn');
            expect(fetchStub).to.have.been.calledWith(
                'https://test.com/rest/api/1.0/projects/TEST/repos/test-repo/my/path',
                {
                    headers: {
                        'X-Auth-User': 'foobar',
                        'X-Auth-Token': 'my token'
                    }
                }
            );
        });
    });
});
