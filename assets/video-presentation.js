'use strict';
(() => {
  const dialog = document.getElementById('video-presentation');
  if (!dialog) return;
  document.querySelectorAll('[data-video-trigger]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      if (dialog.open) return;
      dialog.showModal();
      document.documentElement.classList.add('video-presentation-open');
    });
  });
  dialog.querySelector('[data-video-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.documentElement.classList.remove('video-presentation-open'));
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
})();
