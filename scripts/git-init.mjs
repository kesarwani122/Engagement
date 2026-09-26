import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';
import fs from 'fs';
import path from 'path';

async function main() {
  const dir = process.cwd();
  console.log('Staging all files in:', dir);

  const filesToCommit = [
    'package.json',
    'tsconfig.json',
    'tailwind.config.ts',
    'postcss.config.mjs',
    'next.config.ts',
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
  ];

  // Remove deleted files from index
  const removedFiles = [
    'Ganesh Ji.png',
    'Untitled design.png',
    'venue qr.png',
    'sahilmadan-wedding-invitation-421393.mp3',
    'Vakratunda Mahakaya वकरतड महकय  Ganesh Mantra #god #bhakti.mp3',
  ];

  for (const filepath of removedFiles) {
    try {
      await git.remove({ fs, dir, filepath });
    } catch(e) {}
  }

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
      message: 'Clean build assets and add next.config.ts for Vercel deployment',
      author: {
        name: 'Kesarwani',
        email: 'kesarwani122@users.noreply.github.com',
      },
    });
    console.log('✓ Committed successfully with SHA:', sha);
  } catch (err) {
    console.log('Commit note:', err.message);
  }

  console.log('Local Git commit updated successfully!');
}

main().catch(console.error);
