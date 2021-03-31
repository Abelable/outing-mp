import Base from './base'

class BaseService extends Base {
  async getToken(code) {
    return await this.post({
      url: `${this.baseUrl}v1/token`,
      data: { code },
      loadingTitle: '登录中...'
    })
  }
}

export default BaseService
