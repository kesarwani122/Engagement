import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';
import fs from 'fs';
import path from 'path';

async function main() {
  const dir = process.cwd();
  console.log('Initializing Git repo in:', dir);
  
  try {
    await git.init({ fs, dir, defaultBranch: 'main' });
    console.log('✓ Git repository initialized.');
  } catch (err) {
    console.log('Init note:', err.message);
  }

  // Find all files not in .gitignore
  const filesToCommit = [
    'package.json',
    'tsconfig.json',
    'tailwind.config.ts',
    'postcss.config.mjs',
    '.gitignore',
    'README.md',
    'app/layout.tsx',
    'app/page.tsx',
    'app/globals.css',
    'lib/config.ts',
    'components/FloralDecorations.tsx',
    'components/FloatingPetals.tsx',
    'components/MusicPlayer.tsx',
    'components/GaneshIntro.tsx',
    'components/InvitationHero.tsx',
    'components/RingExchange.tsx',
    'components/DateSection.tsx',
    'components/VenueSection.tsx',
    'components/ClosingSection.tsx',
    'components/Navigation.tsx',
    'components/Footer.tsx',
    'components/PageTransition.tsx',
    'public/images/ganesh-ji.png',
    'public/images/invitation-reference.png',
    'public/images/venue-qr.png',
    'public/music/ganesh-mantra.mp3',
    'public/music/engagement.mp3',
    'Ganesh Ji.png',
    'Untitled design.png',
    'venue qr.png',
    'sahilmadan-wedding-invitation-421393.mp3',
  ];

  for (const filepath of filesToCommit) {
    if (fs.existsSync(path.join(dir, filepath))) {
      await git.add({ fs, dir, filepath });
    }
  }

  console.log('✓ Files staged.');

  try {
    const sha = await git.commit({
      fs,
      dir,
      message: 'Initial commit: Vaishnavi & Satyam Engagement Invitation Website',
      author: {
        name: 'Kesarwani',
        email: 'kesarwani122@users.noreply.github.com',
      },
    });
    console.log('✓ Committed successfully with SHA:', sha);
  } catch (err) {
    console.log('Commit note:', err.message);
  }

  try {
    await git.addRemote({
      fs,
      dir,
      remote: 'origin',
      url: 'https://github.com/kesarwani122/Engagement.git',
      force: true,
    });
    console.log('✓ Added remote origin: https://github.com/kesarwani122/Engagement.git');
  } catch (err) {
    console.log('Remote note:', err.message);
  }

  console.log('Local Git repo prepared and committed!');
}

main().catch(console.error);
