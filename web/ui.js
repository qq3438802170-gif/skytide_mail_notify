'use strict';

async function loadStatus() {
  const screen = document.getElementById('screen');
  try {
    const result = await window.tideUI.call('home', {});
    if (typeof result?.status !== 'string') throw new Error('邮箱状态不可用');
    screen.textContent = result.status;
  } catch {
    screen.textContent = '无法读取邮箱状态，请确认插件已启用后重新打开。';
  }
}

loadStatus();
