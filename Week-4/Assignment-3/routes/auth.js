import express from 'express'
import {getUser, createUser} from '../database.js'

const authRouter = express.Router()

// index
authRouter.get('/', (req, res) => {
    if (req.session.user) {
        return res.render('index', {user: req.session.user})
    }
    res.render('index', {message: req.flash('message')})
})

// login
authRouter.post('/login', async(req, res) => {
    const {email, password} = req.body 
    const user = await getUser(email)

    if (user) {
        if (password === user.password) {
            console.log('Authenticated')
            req.session.user= email;
            res.redirect('/member')
        } else {
            req.flash('message', '密碼輸入錯誤，請重新輸入')
            res.redirect('/')
        }
    } else {
        req.flash('message', '無此信箱，請註冊')
        res.redirect('/')
    }
})

// register
authRouter.post('/register', async(req, res) => {
    const {email, password} = req.body
    const user = await getUser(email)
    if (user) {
        req.flash('message', '信箱已被使用，請直接登入')
        res.redirect('/')
    } else {
        await createUser(email, password)
        const user = await getUser(email);
        console.log(user)
        req.session.user= email;
        console.log('Success to sign up!')
        res.redirect('/member')
    }
})

export { authRouter };