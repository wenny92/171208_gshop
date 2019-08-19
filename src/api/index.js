/*
包含n个接口请求函数的模块
*/
// 1、根据经纬度获取位置详情
import ajax from './ajax'
// export const reqAddress = geohash => ajax(`/position/`, {geohash})//{geohash}这里这种写法geohash是query参数，是封装问号的参数，所以不能这么传值，我们需要的是params参数。
export const reqAddress = geohash => ajax(`/position/${geohash}`)
// 2、获取食品分类列表 get请求
export const reqFoodTypes = () => ajax(`/index_category`)
// 3、根据经纬度获取商铺列表 {latitude, longitude} 对象同名属性
export const reqShops = ({ latitude, longitude }) =>
  ajax(`/shops`, { latitude, longitude })
// 4、根据经纬度和关键字搜索商铺列表
// 5、获取一次性验证码
// 6、用户名密码登陆
// 7、发送短信验证码
// 8、手机号验证码登陆
// 9、根据会话获取用户信息
// 10、用户登出
