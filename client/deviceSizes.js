const sizes = {
    mobileS: '400px',
    mobileM: '600px',
    mobileL: '720px',
    tablet: '975px'
}

export default {
    mobileS: `(max-width: ${sizes.mobileS})`,
    mobileM: `(max-width: ${sizes.mobileM})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`
};