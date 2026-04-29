#!/usr/bin/env node
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { getDb, createPack, createSource, getConfig, setConfig } from '../src/db.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

console.log('🚀 Initializing AI Leader Source Pack...');
const db = getDb();

const AI_LEADERS = [
  { id: '44196397', name: 'Elon Musk', handle: 'elonmusk', bio: 'CEO of X, Tesla, SpaceX, xAI' },
  { id: '823477', name: 'Sam Altman', handle: 'sama', bio: 'OpenAI CEO' },
  { id: '32316206', name: 'Demis Hassabis', handle: 'demishassabis', bio: 'Google DeepMind CEO' },
  { id: '14556631', name: 'Andrej Karpathy', handle: 'karpathy', bio: 'AI educator, former Tesla/OpenAI' },
  { id: '14807496', name: 'Yann LeCun', handle: 'ylecun', bio: 'Meta Chief AI Scientist' },
  { id: '242158105', name: 'Dario Amodei', handle: 'darioamodei', bio: 'Anthropic CEO' },
  { id: '10731172', name: 'Greg Brockman', handle: 'gdb', bio: 'OpenAI former CTO' },
  { id: '1070790248', name: 'Mira Murati', handle: 'miramurati', bio: 'OpenAI former CTO' },
  { id: '14391701', name: 'Gary Marcus', handle: 'GaryMarcus', bio: 'NYU Professor, AI Critic' },
  { id: '140529334', name: 'Daniela Amodei', handle: 'danielaamodei', bio: 'Anthropic President' },
  { id: '11830974', name: 'Andrew Ng', handle: 'andrewyng', bio: 'AI Educator' },
  { id: '14807495', name: 'Ilya Sutskever', handle: 'ilyasutskever', bio: 'SSI Founder, OpenAI co-founder' },
];

const packSources = [];

console.log('\n📋 Creating AI leader Twitter sources...');
for (const leader of AI_LEADERS) {
  const sourceConfig = JSON.stringify({
    userId: leader.id,
    handle: leader.handle,
    name: leader.name
  });
  
  const source = createSource(db, {
    name: `@${leader.handle}`,
    type: 'twitter',
    config: sourceConfig,
    isPublic: 1
  });
  
  packSources.push({
    id: source.id,
    type: 'twitter',
    name: `@${leader.handle}`,
    description: leader.bio
  });
  
  console.log(`  ✅ @${leader.handle} (${leader.name})`);
}

console.log('\n📦 Creating AI Leader Source Pack...');
const pack = createPack(db, {
  name: 'AI Leaders Pack',
  description: 'Track top AI leaders on Twitter — curated for AI industry insights',
  slug: 'ai-leaders-pack',
  sourcesJson: JSON.stringify({
    sources: packSources
  }),
  createdBy: null
});

setConfig(db, 'ai_leaders_pack_id', pack.id);

console.log(`\n✅ AI Leader Source Pack created!`);
console.log(`   Pack ID: ${pack.id}`);
console.log(`\nNow you can install this pack from the Sources page!`);
