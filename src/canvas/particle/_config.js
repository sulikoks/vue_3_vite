/**
 * @typedef ParticleConfig
 * @type {{maxVelocity?: number, radius: number, colors: string[], expTime?: number}}
 */

/**
 * @typedef LineConfig
 * @type {{color: (function(*=): string), maxWidth: number, maxLength: number}}
 */

/**
 * @typedef Config
 * @type {{ bgColor: string, count?: number, particleConfig: ParticleConfig, cursorConfig: ParticleConfig, lineConfig: LineConfig}}
 */
const config = {
    bgColor: 'rgba(17, 17, 19, 1)',
    // count: 60,
    particleConfig: {
        colors: ['rgb(255,0,0, 1)', 'rgb(62,239,3, 1)', 'rgb(245,189,0, 1)', 'rgb(21,36,194, 1)', 'rgb(168,11,220, 1)'],
        radius: 3,
        maxVelocity: 0.8,
        expTime: 60 * 10,
    },
    cursorConfig: {
        radius: 5,
        colors: ['rgb(255, 255, 255, 1)']
    },
    lineConfig: {
        maxLength: 150,
        maxWidth: 5,
        color: (opacity = 1) => `rgba(255, 40, 40, ${opacity})`,
    }
}

export default config;
