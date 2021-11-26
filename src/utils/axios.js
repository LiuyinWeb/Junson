/* eslint-disable no-undef */
import axios from "axios";
import qs from "qs";
let appHost = '/gz-edas/';
export default function $axios(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: appHost,
      headers: {
        common: {
          'Content-Type': 'application/json;charset=utf-8',
        }
      },
      timeout: 30 * 1000,
      withCredentials: true,
      hasToken: false,
    });

    // request 拦截器
    instance.interceptors.request.use(
      config => {
        if (config.method === "post") {
          if (
            config.headers["Content-Type"] ===
            "application/x-www-form-urlencoded"
          ) {
            config.data = qs.stringify(config.data);
          } else if (config.headers["Content-Type"] === "application/json") {
            config.data = JSON.stringify(config.data);
          }
        } else if (config.method === "get") {
          let params = config.params || {};
          config.params = params;
        }
        return config;
      },
      error => {
        // 2. 需要重定向到错误页面
        const errorInfo = error.response;
        if (errorInfo) {
          error = errorInfo.data; // 页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
        }
        return Promise.reject(error); // 在调用的那边可以拿到(catch)你想返回的错误信息
      }
    );

    // response 拦截器
    instance.interceptors.response.use(
      response => {
        let data;
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if (response.data === undefined) {
          data = JSON.parse(response.request.responseText);
        } else {
          data = response.data;
        }
        // 根据返回的code值来做不同的处理
        switch (data.code) {
          case 1005:
            // sessionStorage.removeItem("user");
            break;
          default:
            break;
        }
        let res;
        if (response.headers && response.headers["content-disposition"]) {
          let headers = response.headers;
          res = {
            headers: headers,
            data: data
          };
        } else {
          res = data;
        }

        return res;
      },
      err => {
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = "请求错误";
              break;
            case 401:
              err.message = "未授权，请登录";
              break;
            case 403:
              err.message = "拒绝访问";
              break;
            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`;
              break;
            case 408:
              err.message = "请求超时";
              break;
            case 500:
              err.message = "服务器内部错误";
              break;
            case 501:
              err.message = "服务未实现";
              break;
            case 502:
              err.message = "网关错误";
              break;
            case 503:
              err.message = "服务不可用";
              break;
            case 504:
              err.message = "网关超时";
              break;
            case 505:
              err.message = "HTTP版本不受支持";
              break;
            default:
              break;
          }
        }
        // console.error(err);
        return Promise.reject(err);
        // // 重新发送请求
        // var config = err.config
        // if (!config || !config.retry) {
        //   return Promise.reject(err) // 返回接口返回的错误信息
        // }
        // config.__retryCount = config.__retryCount || 0
        // if (config.__retryCount >= config.retry) {
        //   return Promise.reject(err)
        // }
        // config.__retryCount += 1
        // var backoff = new Promise(function (resolve) {
        //   setTimeout(function () {
        //     resolve()
        //   }, config.retryDelay || 1)
        // })
        // return backoff.then(function () {
        //   return axios(config)
        // })
      }
    );

    // 请求处理
    instance(options)
      .then(res => {
        resolve(res);
        return false;
      })
      .catch(error => {
        reject(error);
      });
  });
}
