import {MikroORM} from "@mikro-orm/core"
import { __prod__ } from "./constants"
import {Post} from './entities/Post'
import microConfig from './mikro-orm.config'
import express from 'express'

const main = async () => {
    const orm = await MikroORM.init(microConfig)
    // await orm.getMigrator().up()
    // const post = orm.em.create(Post, {title: 'My first title'})
    // await orm.em.persistAndFlush(post)

    const app = express();
    app.get('/', (_,res) => {
        res.send('hello')
    })
    app.listen(4000, () => {
        console.log('server started')
    })

}


main()