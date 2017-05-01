# bitbucket-pull-request-metrics

A tool to evaluate BitBucket pull requests and report back various metrics about
how the pull request impacts a project.

## Installation

NOTE: This project is not currently published.

`$ npm install --save-dev bitbucket-pull-request-metrics`

## Usage

### CLI

Assuming the module was installed globally:

```bash
$ bitbucket-pull-request-metrics --username foobar --authToken 123abc --project DEV --repo my-repo --pr 123
```

#### Arguments

**--username, -u** (string, required)
User's BitBucket username.

**--authToken, -t** (string, required)
User's BitBucket auth token.

**--project, -p** (string, required)
BitBucket project's key/name.

**--repo, -r** (string, required)
The BitBucket project's repository which contains the pull request.

**--pr** (number, required)
The pull request to inspect.

**--host** (string, optional)
The protocol and hostname of the BitBucket server. Defaults to "https://bitbucket.org".

### Programmatic

```javascript
// Initialize metrics lib
const metrics = require('bitbucket-pull-request-metrics')({
    host: 'https://bitbucket.org', // Optional parameter. This is the default.
    // The following are all required.
    project: 'DEV',
    repo: 'my-repo',
    username: 'foobar',
    authToken: '123abc'
});

// Fetch details about PR 123
metrics(123, (err, prMetrics) => {
    console.log(prMetrics);
})
```

### TODO
- Design to review one PR versus a list of PRs, maybe all currently open, and
all for a project? Pagination?
