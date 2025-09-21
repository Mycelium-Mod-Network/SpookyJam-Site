import { remark } from "remark";
import html from "remark-html";

export async function renderMarkdown(md: string): Promise<string[]> {
    const elements = [];
    for (const line of md.split("\n")) {
        const processed = await remark().use(html).process(line);
        elements.push(processed.toString())
    }
    return elements
}

export function formatString(input: string, maxLength: number): string {
    return input.length > maxLength ? input.slice(0, maxLength - 3).replace(/[^a-zA-Z0-9]+$/g, "") + "..." : input;
}

export function capitalize(input: string): string {
    return input.split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}