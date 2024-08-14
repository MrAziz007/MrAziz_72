import { getAxios } from "../libs/http"

export function createHeader(header) {
  header.innerHTML = `
    <div class="container contHead">
      <nav>
        <ul>
          <li>
            <a href="/" class="global">Главное</a>
          </li>
          <li>
            <a href="/pages/cards/" class="cards">Мои кашельки</a>
          </li>
          <li>
            <a href="/pages/transaction/" class="transaction">Мои транзакции</a>
          </li>
        </ul>
      </nav>
      <div>
        <button class="exit">
          <p class="userEmail">...</p>
          <img src="/log-out (1) 1.png" alt="OUT">
        </button>
      </div>
    </div>
    `

  let token = localStorage.getItem('token');

  if (!token) {
    window.location.replace('/pages/logon/');
  }

  getAxios(`users?token=${token}`)
    .then(res => {
      for (const item of res.data) {
        document.querySelectorAll('.userEmail').forEach(elem => {
          elem.textContent = item.email;
        })
        document.querySelector('.userName').textContent = item.sername + ' ' + item.name;
      };
    })
    .catch(error => console.error(error));

  document.querySelector('.exit').onclick = () => {
    window.location.replace('/pages/login/');
  }

  return header
}