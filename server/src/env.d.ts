declare global {
    namespace NodeJs {
        interface ProcessEnv {
            DB_URL?: string
            NODE_ENV?: 'development' | 'production'
        }
    }
}

export {}