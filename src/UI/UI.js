export function Title(title, tag) {
    return `
        <div class="title">
            <${tag}>${title}</${tag}>
        </div>
    `
}