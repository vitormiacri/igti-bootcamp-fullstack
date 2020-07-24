const API_URL = 'http://localhost:3001/users';

const usersList = [];
const input = document.querySelector('input');
const button = document.querySelector('button');

window.addEventListener('load', async () => {
  const usersList = await loadUsersFromAPI();

  input.addEventListener('keyup', (event) => {
    let inputValue = event.target.value;
    if (inputValue !== '' && event.code === 'Enter') {
      findUserEvent(usersList);
    }
  });

  button.addEventListener('click', () => {
    findUserEvent(usersList);
  });

  render(usersList);
});

function findUserEvent(usersList) {
  const usersFiltred = findByName(usersList, input.value);
  render(usersFiltred);
}

async function loadUsersFromAPI() {
  const response = await fetch(API_URL);
  const users = await response.json();
  return users.map((user) => ({
    name: `${user.name.first} ${user.name.last}`,
    picture: user.picture.thumbnail,
    age: user.dob.age,
    gender: user.gender,
  }));
}

function render(users) {
  const usersListElement = document.querySelector('#userslist');
  const statisticsListElement = document.querySelector('#statisticsList');
  const usersListTitleElement = document.querySelector('#usersListTitle');
  const statisticsTitleElement = document.querySelector('#statisticsTitle');

  usersListElement.innerHTML = '';
  usersListTitleElement.innerHTML = '';

  statisticsTitleElement.innerHTML = '';
  statisticsListElement.innerHTML = '';

  if (users.length === 0) {
    usersListTitleElement.innerHTML = `Nenhum usuário filtrado`;
    statisticsTitleElement.innerHTML = `Nada a ser exibido`;
    usersListElement.innerHTML = '';
    statisticsListElement.innerHTML = '';
  } else {
    usersListTitleElement.innerHTML = `${users.length} usuario(s) encontrado(s)`;
    statisticsTitleElement.innerHTML = `Estatisticas`;

    users.forEach((user) => {
      usersListElement.innerHTML += `
        <li>
          <img
            src="${user.picture}"
          />
          <span>${user.name}, ${user.age} anos</span>
        </li>
      `;
    });

    const usersMale = findByGender(users, 'male');
    const usersFemale = findByGender(users, 'female');

    statisticsListElement.innerHTML = `
      <li>Sexo masculino: ${usersMale.length}</li>
      <li>Sexo feminino: ${usersFemale.length}</li>
      <li>Soma das idades: ${totalAges(users)}</li>
      <li>Média das idades: ${(totalAges(users) / users.length).toFixed(2)}</li>
    `;
  }
}

function totalAges(usersList) {
  return usersList.reduce((accumulator, current) => {
    return accumulator + current.age;
  }, 0);
}

function findByName(usersList, name) {
  return usersList.filter((value) => {
    return value.name.toLowerCase().includes(name.toLowerCase());
  });
}

function findByGender(usersList, gender) {
  const usersByGender = usersList.filter((value) => {
    return value.gender === gender;
  });

  return usersByGender;
}
