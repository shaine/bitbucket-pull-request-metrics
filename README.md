# bitbucket-pull-request-metrics

A tool to evaluate BitBucket pull requests and report back various metrics about
how the pull request impacts a project. Presently, only designed to support
JavaScript ES6 projects.

## Installation

NOTE: This project is not currently published.

`$ npm install --save-dev bitbucket-pull-request-metrics`

## Usage

### CLI

Assuming the module was installed globally:

```bash
$ bitbucket-pull-request-metrics \
    --username foobar \
    --authToken 123abc \
    --project DEV \
    --repo my-repo \
    --pr 123
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
});
```

### TODO
#### General
- Design to review one PR versus a list of PRs, maybe all currently open, and
all for a project? Pagination?
- Design hooks for static code analysis. Unit test coverage hook,

#### BitBucket
- Number of images (screenshots?)
- Number of commits
- Number of subsequent additional commits
- Number of original author comments
- Number of follow up comments (non-author, or replies)
- Min/max/median comment thread length
- Number of days in development
- Number of approvals
- Number of "Needs Work" reviews
- Number of contributing reviewers (submitted some sort of PR review activity)
    - Number of contributing reviewers who did not approve PR
- User IDs of contributing reviewers
- Author user ID
- PR number, link
- PR approval status (open/merged/declined)
- Number of open, completed tasks
- Min/max/median per-file LOC changes
- Number of files changed, added, deleted, moved

#### Supplemental Analysis
- Plato LOC, complexity, bug estimate, maintainability, deltas per-file
- Instanbul code coverage delta
- Esprima comment density delta

#### Someday/Maybe
- Suggested PR quality score
