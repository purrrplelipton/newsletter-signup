const notification = document.createElement('aside');
notification.setAttribute('class', 'notification show hidden');

const iconSuccess = document.createElementNS(
  'http://www.w3.org/2000/svg',
  'svg',
);
iconSuccess.setAttribute('width', '64');
iconSuccess.setAttribute('height', '64');
iconSuccess.setAttribute('viewBox', '0 0 64 64');

const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

const linearGradient = document.createElementNS(
  'http://www.w3.org/2000/svg',
  'linearGradient',
);
linearGradient.setAttribute('id', 'a');
linearGradient.setAttribute('x1', '100%');
linearGradient.setAttribute('x2', '0%');
linearGradient.setAttribute('y1', '0%');
linearGradient.setAttribute('y2', '100%');

defs.appendChild(linearGradient);

const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
stop1.setAttribute('offset', '0%');
stop1.setAttribute('stop-color', '#FF6A3A');

linearGradient.appendChild(stop1);

const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
stop2.setAttribute('offset', '100%');
stop2.setAttribute('stop-color', '#FF527B');

linearGradient.appendChild(stop2);

const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
g.setAttribute('fill', 'none');

const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle.setAttribute('cx', '32');
circle.setAttribute('cy', '32');
circle.setAttribute('r', '32');
circle.setAttribute('fill', 'url(#a)');

g.appendChild(circle);

const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path.setAttribute('stroke', '#FFF');
path.setAttribute('stroke-width', '4');
path.setAttribute('d', 'm18.286 34.686 8.334 7.98 19.094-18.285');

g.appendChild(path);

iconSuccess.appendChild(defs);
iconSuccess.appendChild(g);

notification.appendChild(iconSuccess);

const heading = document.createElement('h2');
heading.innerHTML = 'Thanks for subscribing!';

notification.appendChild(heading);

const message = document.createElement('p');
message.innerHTML =
  'A confirmation email has been sent to <b>ash@loremcompany.com</b>. Please open it and click the button inside to confirm your subscription.';

notification.appendChild(message);

const dismissBtn = document.createElement('button');
dismissBtn.innerHTML = 'Dismiss message';
dismissBtn.setAttribute('type', 'button');
dismissBtn.setAttribute('id', 'dismiss-btn');

dismissBtn.addEventListener('click', () => {
  notification.classList.add('hidden');

  setTimeout(function () {
    return document.body.removeChild(notification);
  }, 400);
});

notification.appendChild(dismissBtn);

const emailRegex = /^[\w\.-]+@[\w\.-]+\.\w+$/;
const form = document.getElementById('email-form');
const emailField = document.getElementById('email-field');

emailField.addEventListener('input', function (evt) {
  const fieldValue = evt.target.value;
  setTimeout(function () {
    if (fieldValue && !emailRegex.test(fieldValue)) {
      evt.target.classList.add('err');
    } else {
      evt.target.classList.remove('err');
    }
  }, 375);
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const inputValue = event.target['email-field'].value;

  if (emailRegex.test(inputValue)) {
    setTimeout(function () {
      event.target['email-field'].value = '';
    }, 100);
    document.body.appendChild(notification);

    setTimeout(function () {
      notification.classList.remove('hidden');
    }, 100);

    setTimeout(function () {
      return notification.classList.add('hidden');
    }, 10100);

    setTimeout(function () {
      return document.body.removeChild(notification);
    }, 10400);
  } else {
    event.target['email-field'].classList.add('err');
  }
});
