/* eslint-disable no-undef */
import axios from "./axios";
export const dataGet = (params, link, suc, err) => {
  suc = suc || function() {};
  err = err || function() {};
  return axios({
    url: link,
    method: "get",
    params
  })
    .then(res => {
      if (res.success === true) {
        suc(res.data, res.msg);
      } else {
        err();
      }
    })
    .catch(() => {
      err();
    });
};
export const dataPost = (data, link, suc, err) => {
    suc = suc || function() {};
    err = err || function() {};
    return axios({
      url: link,
      method: "post",
      data
    })
      .then(res => {
        if (res.success === true) {
          suc(res.data, res.msg);
        } else {
          err();
        }
      })
      .catch(() => {
        err();
      });
  };
export const dataPostJson = (data, link, suc, err) => {
  suc = suc || function() {};
  err = err || function() {};
  return axios({
    url: link,
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    data
  })
    .then(res => {
      if (res.success === true) {
        suc(res.data, res.msg);
      } else {
        err();
      }
    })
    .catch(() => {
      err();
    });
};