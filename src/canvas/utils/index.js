export function changeOpacity(color, opacity) {
    const rgba = color.split(',');
    rgba[rgba.length - 1] = `${opacity})`
    return rgba.join(',')
}

export function random(min, max) {
    return Math.random() * (max - min) + min
}

/**
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {{ x: number, y: number }} pos
 * @param {number} radius
 * @param {string} color
 * @param {boolean} stroke
 */
export function createCircle(ctx, pos, radius, color = 'red', stroke = false) {
    ctx.fillStyle = color
    ctx.strokeStyle = color
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2)
    ctx.closePath()
    stroke ? ctx.stroke() : ctx.fill()
}
