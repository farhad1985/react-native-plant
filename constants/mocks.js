const categories = [
    {
        id: 'plants',
        name: 'Plants',
        tags: ['products', 'shop'],
        count: 147,
        image: require('../assets/images/leaves.png')
    },
    {
        id: 'seeds',
        name: 'Seeds',
        tags: ['products', 'inspirations', 'shop'],
        count: 16,
        image: require('../assets/images/seed.png')
    },
    {
        id: 'flowers',
        name: 'Flowers',
        tags: ['products', 'shop'],
        count: 20,
        image: require('../assets/images/flower.png')
    },
    {
        id: 'spray',
        name: 'Spray',
        tags: ['products', 'inspirations', 'shop'],
        count: 60,
        image: require('../assets/images/spray.png')
    },
]

const products = [
    {
        id: 1,
        name: 'Plant Biology New',
        description: 'Find out everything there is to know about plants and stay updated on the latest environment news with the comprehensive articles, interactive features and plant pictures at LiveScience.com. Learn more about plants as scientists continue to make amazing discoveries. Plants',
        gallery: [
            require('../assets/images/explore_1.jpg'),
            require('../assets/images/explore_2.jpg'),
            require('../assets/images/explore_3.jpg'),
            require('../assets/images/explore_4.jpg'),
        ]
    }
]

const explore = [
    require('../assets/images/explore_1.jpg'),
    require('../assets/images/explore_2.jpg'),
    require('../assets/images/explore_3.jpg'),
    require('../assets/images/explore_4.jpg'),
]

const profile = {
    username: 'Farhad',
    location: 'Tehran',
    email: 'farhad.public@gmail.com',
    avatar: require('../assets/images/flower.png'),
    budget: 1000,
    monthly_cap: 2000,
    notification: true,
    newsletter: false
}

export {
    categories,
    explore,
    products,
    profile,
}