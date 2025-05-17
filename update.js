const { execSync } = require('child_process');
const fs = require('fs');

const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
fs.appendFileSync('update.txt', `Updated at ${timestamp}\n`);

console.log('✅ File updated');

try {
  execSync('git add update.txt');
  execSync(`git commit -m "Daily update: ${timestamp}"`);
  execSync('git push');
  console.log('✅ Changes committed and pushed.');
} catch (err) {
  console.error('❌ Git command failed:', err.message);
  process.exit(1);
}
