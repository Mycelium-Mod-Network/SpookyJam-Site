export const TITLE = 'SpookyJam';
export const DESCRIPTION = 'The official home of the annual SpookyJam mod jam.';
export const DISCORD = 'https://discord.spooky-jam.com'
export const GITHUB = 'https://github.com/Mycelium-Mod-Network'

import DATA_SUBMISSIONS from './data/submissions.json'
export const SUBMISSIONS = new Map<string, number[]>(Object.entries(DATA_SUBMISSIONS).sort(([keyA], [keyB]) => Number(keyB) - Number(keyA)))