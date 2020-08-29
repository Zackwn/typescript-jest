import { config } from 'dotenv'
config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})
import express from 'express'
import nodemailer from 'nodemailer'

const app = express()

app.use(express.json())

app.get('/send-email', async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '3d7652725795c6',
      pass: process.env.PASS
    }
  })

  try {
    await transporter.sendMail({
      to: {
        address: 'rafael@gmail.com',
        name: 'Rafael'
      },
      from: {
        address: 'equipe@meuapp.com',
        name: 'Equipe'
      },
      subject: 'Seja Bem vindo á nossa plataforma.',
      html: `<p>Óla, você já pode fazer login na nossa plataforma!</p>`
    })

    return res.status(200).send()
  } catch (error) {
    return res.status(500).send()
  }
})

export { app }