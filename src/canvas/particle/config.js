export default {
    bgColor: 'rgba(17, 17, 19, 1)',
    particleConfig: {
        colors: ['rgba(255, 40, 40, 1)', 'rgba(40, 255, 40, 1)', 'rgba(40, 40, 255, 1)'],
        radius: 3,
        count: 60,
        maxVelocity: 0.5,
    },
    lineConfig: {
        maxLength: 150,
        width: 0.5,
        color: (opacity = 1) => `rgba(255, 40, 40, ${opacity})`,
    }
}
