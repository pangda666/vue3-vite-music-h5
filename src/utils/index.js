/**
 * @description: 全局主题样式变更
 * @param {*} valueMap 样式对象
 * @return {*}
 */
function changeGlobalStyle(valueMap = {}) {
  /* 
    vant4动态变更主题色：https://blog.csdn.net/qq_37993468/article/details/128843751
  */
  const root = document.querySelector(':root');
  if (!root || typeof valueMap !== 'object') {
    return;
  }
  Object.keys(valueMap).forEach((key) => {
    root.style.setProperty(key, valueMap[key]);
  });
}

function aaa() {}

export { changeGlobalStyle, aaa };
