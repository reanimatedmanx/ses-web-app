export function truncate(str, size) {
    return str.length > size ? str.slice(0, size - 1) + "…" : str;
}

