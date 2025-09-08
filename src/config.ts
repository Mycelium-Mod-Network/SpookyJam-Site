import slugify from "slugify";

export const TITLE = 'SpookyJam';
export const DESCRIPTION = 'The official home of the annual SpookyJam mod jam.';
export const DISCORD = 'https://discord.spooky-jam.com'
export const GITHUB = 'https://github.com/Mycelium-Mod-Network'

import DATA_SUBMISSIONS from './data/submissions.json'

export const SUBMISSIONS = new Map<string, number[]>(Object.entries(DATA_SUBMISSIONS).sort(([keyA], [keyB]) => Number(keyB) - Number(keyA)))

export interface IdeaEntry {
    title: string,
    summary: string,
    suggester: string,
    slug?: string
}

import DATA_IDEAS from './data/ideas.json'

export const IDEAS = new Map<string, IdeaEntry>()
DATA_IDEAS.ideas.forEach((idea: IdeaEntry) => {
    idea.slug = slugify(idea.title, {lower: true})
    if (IDEAS.has(idea.slug)) {
        throw new Error(`IDea slug already exists. ${idea.slug}`)
    }
    IDEAS.set(idea.slug, idea)
})