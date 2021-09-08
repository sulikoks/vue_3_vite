/**
 * @typedef BubbleConfig
 * @type {{ colors: string[], radius?: number, minRadius?: number, maxRadius?: number, massFactor: number }}
 */

/**
 * @typedef Config
 * @type {{ bgColor: string, maxCount: number, bubbleConfig: BubbleConfig, cursorConfig: BubbleConfig }}
 */
const config = {
    bgColor: 'rgba(17, 17, 19, 1)',
    minCount: 30,
    maxCount: 120,
    smooth: 0.95,
    sphereRadius: 300,
    cursorRadius: 120,
    bubbleConfig: {
        colors: ['rgb(255,0,0, 0.5)', 'rgb(62,239,3, 0.5)', 'rgb(245,189,0, 0.5)', 'rgb(21,36,194, 0.5)', 'rgb(168,11,220, 0.5)'],
        minRadius: 6,
        maxRadius: 20,
        massFactor: 0.002
    },
    cursorConfig: {
        colors: ['rgb(255, 255, 255, 0.5)'],
        radius: 25,
        massFactor: 0.002
    },
}

export default config;
