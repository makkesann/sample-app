require('dotenv').config()

function getValidConfig(configEnv, keys) {
    let { config, missingKeys } = keys.reduce(
        (acc, key) => {
            if (!configEnv[key]) {
                acc.missingKeys.push(key)
            } else {
                acc.config[key] = configEnv[key]
            }
            return acc
        },
        { config: {}, missingKeys: [] }
    )

    if (missingKeys.length) {
        throw new Error(`Contentful key is missing : ${missingKeys.join(', ')}`)
    }
    return config
}

module.exports = {
    getConfigForKeys(keys) {
        const configEnv = {
            CTF_BLOG_POST_TYPE_ID: "rpp9rqpod3d1",
            CTF_SPACE_ID: "gTLEoKX1Ypssr5gO597y6cpGqCJI71YAsZQbK21yFk4",
            CTF_CDA_ACCESS_TOKEN: "blog"
        }
        return getValidConfig(configEnv, keys)
    }
}