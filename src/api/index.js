import http from '../service';

// 搜索
export function commonSearch(data) {
  const url = '/cloudsearch';
  return http.post(url, data);
}

export function search(data) {
  const url = '/cloudsearch';
  return http.post(url, data);
}
