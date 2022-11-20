const HEADER = `---
layout: layouts/post.njk
tags:
- post
---
`

const prefix = new Date().toJSON().split('T')[0];
const id = crypto.randomUUID().split('-')[0];
const name = `${prefix}_${id}`;
await Deno.writeTextFile(
    `./posts/${name}.md`,
    HEADER
);
