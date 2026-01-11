// document.addEventListener('DOMContentLoaded', () => {
//   const cardsContainer = document.getElementById('cards');
//   let currentTf = 'weekly';

//   fetch('data.json')
//     .then((res) => res.json())
//     .then((data) => {
//       renderCards(data);
//       setupTimeframeButtons(data);
//       updateCards(data);
//     })
//     .catch((err) => console.error('Failed to load data.json', err));

//   function renderCards(data) {
//     cardsContainer.innerHTML = '';
//     data.forEach((item) => {
//       const card = document.createElement('section');
//       card.className = 'card';
//       card.dataset.title = item.title;
//       card.innerHTML = `
//         <div class="card__bg"></div>
//         <div class="card__content">
//           <div class="card__header">
//             <h3 class="card__title">${item.title}</h3>
//             <button class="ellipsis">⋯</button>
//           </div>
//           <div class="card__hours">
//             <div class="current">0hrs</div>
//             <div class="previous">Previous - 0hrs</div>
//           </div>
//         </div>
//       `;
//       cardsContainer.appendChild(card);
//     });
//   }

//   function setupTimeframeButtons(data) {
//     document.querySelectorAll('.timeframe button').forEach((btn) => {
//       btn.addEventListener('click', () => {
//         document.querySelectorAll('.timeframe button').forEach((b) => b.classList.remove('active'));
//         btn.classList.add('active');
//         currentTf = btn.dataset.timeframe;
//         updateCards(data);
//       });
//     });
//   }

//   function hrText(value) {
//     return value === 1 ? '1hr' : `${value}hrs`;
//   }

//   function updateCards(data) {
//     data.forEach((item) => {
//       const card = Array.from(cardsContainer.children).find((c) => c.dataset.title === item.title);
//       if (!card) return;
//       const current = item.timeframes[currentTf].current;
//       const previous = item.timeframes[currentTf].previous;
//       card.querySelector('.current').textContent = hrText(current);
//       card.querySelector('.previous').textContent = `Previous - ${hrText(previous)}`;
//     });
//   }
// });
