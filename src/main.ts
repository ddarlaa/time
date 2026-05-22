// Импорт кастомного SCSS
import './scss/styles.scss';

// Импорт только JS-компонента Modal от Bootstrap
import { Modal } from 'bootstrap';

// Импорт Luxon
import { DateTime } from 'luxon';

const showTimeBtn = document.getElementById('showTimeBtn') as HTMLButtonElement;
const timeSpan = document.getElementById('currentDateTime') as HTMLSpanElement;
const modalElement = document.getElementById('timeModal') as HTMLElement;

let myModal: Modal | null = null;
if (modalElement) {
  myModal = new Modal(modalElement);
}

function updateDateTime(): void {
  if (timeSpan) {
    const now = DateTime.local();
    timeSpan.textContent = now.toFormat('dd.MM.yyyy HH:mm:ss');
  }
}

if (showTimeBtn && myModal) {
  showTimeBtn.addEventListener('click', () => {
    updateDateTime();
    myModal!.show();
  });
}

if (modalElement && myModal) {
  modalElement.addEventListener('show.bs.modal', updateDateTime);
}

// Начальное обновление (чтобы не было прочерков)
updateDateTime();