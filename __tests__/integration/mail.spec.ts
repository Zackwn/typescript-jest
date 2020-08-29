import request from 'supertest'
import { app } from '../../src/app'

describe('Mail', () => {
  it('should send successfully a mail', async () => {
    const response = await request(app)
      .get('/send-email')

    expect(response.status).toBe(200)
  })
})