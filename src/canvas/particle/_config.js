/**
 * @typedef ParticleConfig
 * @type {{maxVelocity?: number, radius: number, colors: string[], expTime?: number}}
 */

/**
 * @typedef LineConfig
 * @type {{color: (function(*=): string), width: number, maxLength: number}}
 */

/**
 * @typedef Config
 * @type {{ bgColor: string, count?: number, particleConfig: ParticleConfig, cursorConfig: ParticleConfig, lineConfig: LineConfig}}
 */
const config = {
    bgColor: 'rgba(17, 17, 19, 1)',
    // count: 60,
    particleConfig: {
        colors: ['rgba(255, 40, 40, 1)', 'rgb(255, 255, 0, 1)', 'rgba(40, 40, 255, 1)'],
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
        width: 0.5,
        color: (opacity = 1) => `rgba(255, 40, 40, ${opacity})`,
    }
}

export default config;
