import slugify from "slugify";
import {formatString} from "./util/text";

export const TITLE = 'SpookyJam';
export const DESCRIPTION = 'The official home of the annual SpookyJam mod jam.';
export const DISCORD = 'https://discord.spooky-jam.com'
export const GITHUB = 'https://github.com/Mycelium-Mod-Network'

import DATA_SUBMISSIONS from './data/submissions.json'

export const SUBMISSIONS = new Map<string, number[]>(Object.entries(DATA_SUBMISSIONS).sort(([keyA], [keyB]) => Number(keyB) - Number(keyA)))

export interface IdeaEntry {
    title: string,
    body: string,
    summary?: string,
    suggester: string,
    slug?: string,
    tags: string[]
}

import DATA_IDEAS from './data/ideas.json'
export const IDEAS = new Map<string, IdeaEntry>()
export const IDEA_TAGS = new Map<string, IdeaEntry[]>()
DATA_IDEAS.ideas.forEach((idea: IdeaEntry) => {
    idea.slug = slugify(idea.title, {lower: true})
    if (IDEAS.has(idea.slug)) {
        throw new Error(`Idea slug already exists. ${idea.slug}`)
    }
    IDEAS.set(idea.slug, idea)
    idea.summary = formatString(idea.body.split("\n")[0], 90)
    if (idea.summary.includes("*") || idea.summary.includes("\\") || idea.summary.includes("|") || idea.summary.includes("[")) {
        throw new Error(`Idea summary contains illegal characters. All formatting must be after a new line! idea=${idea.title}`)
    }
    if (!idea.tags || idea.tags.length < 1) {
        throw new Error(`Idea must have at least one tag. idea=${idea.title}`)
    }
    idea.tags.forEach(tag => {
        const ideasForTag = IDEA_TAGS.get(tag);
        if (ideasForTag) {
            ideasForTag.push(idea)
        }
        else {
            IDEA_TAGS.set(tag, [idea])
        }
    })
})

export const PACK_2017 = 280083
export const PACK_2018 = 304943
export const PACK_2019 = 349899
export const PACK_2020 = 416505
export const PACK_2021_FABRIC = 542248
export const PACK_2021_FORGE = 541411
export const PACK_2022_FABRIC = 698246
export const PACK_2022_FORGE = 694223
export const PACK_2023 = 930842
export const PACK_2024 = 1144364

export const MODPACK_IDS = [PACK_2017, PACK_2018, PACK_2019, PACK_2020, PACK_2021_FABRIC, PACK_2021_FORGE, PACK_2022_FABRIC, PACK_2022_FORGE, PACK_2023, PACK_2024]