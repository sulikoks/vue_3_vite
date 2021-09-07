export function changeOpacity(color, opacity) {
    const rgba = color.split(',');
    rgba[rgba.length - 1] = `${opacity})`
    return rgba.join(',')
}
