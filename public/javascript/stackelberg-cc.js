function syncInputs(className) {
  const inputs = document.querySelectorAll(`input.${className}`);
  inputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const value = e.target.value;
      inputs.forEach(i => {
        if (i !== e.target) i.value = value;
      });
    });
  });
}

function getFirstNonEmptyValue(className) {
  const inputs = document.querySelectorAll(`.${className}`);
  for (let input of inputs) {
    if (input.value.trim() !== '') {
      return input.value.trim();
    }
  }
  return '';
}

document.addEventListener('DOMContentLoaded', () => {
  syncInputs('Qm');
  syncInputs('Qc');
  syncInputs('Qd');

  const sendBtn = document.getElementById('send');
  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      const qm = getFirstNonEmptyValue('Qm');
      const qd = getFirstNonEmptyValue('Qd');
      const qc = getFirstNonEmptyValue('Qc');

      const btnValues = {};
      for (let i = 1; i <= 9; i++) {
        const input = document.getElementById(`btn${i}`);
        btnValues[`btn${i}`] = input ? input.value.trim() : '';
      }

      fetch('/stackelberg/save-quantities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ qm, qd, qc, ...btnValues })
      })
        .then(res => res.text())
        .then(response => {
          if (response === 'success.') {
            alert('Veriler başarıyla kaydedildi.');
          } else {
            alert('Bir hata oluştu.');
          }
        })
        .catch(error => {
          console.error(error);
          alert('Sunucu hatası!');
        });
    });
  }
});
