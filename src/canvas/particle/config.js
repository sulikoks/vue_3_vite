const config = {
    bgColor: 'rgba(17, 17, 19, 1)',
    particleConfig: {
        colors: ['rgba(255, 40, 40, 1)', 'rgb(255, 255, 0, 1)', 'rgba(40, 40, 255, 1)'],
        radius: 3,
        count: 60,
        maxVelocity: 0.8,
    },
    lineConfig: {
        maxLength: 150,
        width: 0.5,
        color: (opacity = 1) => `rgba(255, 40, 40, ${opacity})`,
    }
}

config.cursorConfig = {
    ...config.particleConfig,
    radius: 5,
    colors: ['rgb(255, 255, 255, 1)']
}

export default config;
