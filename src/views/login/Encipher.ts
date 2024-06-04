import JSEncrypt from 'jsencrypt'

// 假设您已经获取到了公钥
const publicKey =
  'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANL378k3RiZHWx5AfJqdH9xRNBmD9wGD\n' +
  '2iRe41HdTNF8RUhNnHit5NpMNtGL0NPTSSpPjjI1kJfVorRvaQerUgkCAwEAAQ=='

// 创建JSEncrypt实例
const encryptor = new JSEncrypt()

// 导入公钥
encryptor.setPublicKey(publicKey)

// 加密数据
export const encrypted = (data: string) => {
  return encryptor.encrypt(data)
}
