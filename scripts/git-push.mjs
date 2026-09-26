import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';
import fs from 'fs';

async function push(token) {
  const dir = process.cwd();
  console.log('Pushing to https://github.com/kesarwani122/Engagement.git on branch main...');
  
  const pushResult = await git.push({
    fs,
    http,
    dir,
    remote: 'origin',
    ref: 'main',
    onAuth: () => ({
      username: token || process.env.GITHUB_TOKEN,
      password: '',
    }),
  });

  console.log('Push result:', pushResult);
  console.log('✓ Successfully pushed to GitHub!');
}

const token = process.argv[2] || process.env.GITHUB_TOKEN;
if (!token) {
  console.log('Usage: node scripts/git-push.mjs <YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>');
  console.log('Or set GITHUB_TOKEN environment variable.');
} else {
  push(token).catch(console.error);
}
