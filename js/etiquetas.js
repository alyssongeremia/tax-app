const btnGenerateTag = document.querySelector('#generate');
const btnGeneratePdf = document.querySelector('#generate-pdf');
const btnClearScreen = document.querySelector('#clear-screen');

const name = document.querySelector('#name-product');
const code = document.querySelector('#code-product');
const sale = document.querySelector('#value-product');

const tagsScreen = document.querySelector('#number-tags');
let tags = 0;

name.addEventListener('click', () => {
  name.select();
});

code.addEventListener('click', () => {
  code.select();
});

sale.addEventListener('click', () => {
  sale.select();
});

btnClearScreen.addEventListener('click', () => {
  clearScreen();
});

name.select();

function clearScreen() {
  let screen = document.querySelector('#screen');

  if (confirm('Excluir todas as etiquetas?') == true) {
    screen.innerHTML = ``;
    const formInputs = document.querySelector('form');
    formInputs.reset();
    name.select();
    tags = 0;
    tagsScreen.innerHTML = tags;
  } else {
    return;
  }
}

btnGenerateTag.addEventListener('click', (event) => {
  event.preventDefault();

  name.select();

  const amount = document.querySelector('#amount-tag');
  const screen = document.querySelector('#screen');

  tags = tags + 1;
  tagsScreen.innerHTML = String(tags).padStart(2, '0');

  if(tags == 30) {
    alert('Insira as próximas 3 etiquetas em branco')
  }

  if(tags == 33) {
    alert('Agora pode preencher novamente as etiquetas')
    
  }

  let id = `tag-${tags}`;

  screen.innerHTML += `
    <div class='tag elemento-a-deletar' id=${id}>
      <span class='title'>${name.value}</span>
      <span>Código: ${code.value}</span>
      <span>Valor: <span class='strong'> R$ ${sale.value}</span> </span>
      <i class="ph ph-trash delete-button" data-value='${id}' title='Excluir etiqueta'></i>
    </div>
  `;

  // Adicionando evento de clique dinâmico aos botões de exclusão
  document.querySelectorAll('.delete-button').forEach(button => {
    button.addEventListener('click', () => {
      const tagId = button.getAttribute('data-value');
      const tagToRemove = document.getElementById(tagId);
      if (tagToRemove) {
        tagToRemove.remove();
        tags--; // Decrementando o contador de etiquetas
        tagsScreen.innerHTML = String(tags).padStart(2, '0');
      }
    });
  });
});

btnGeneratePdf.addEventListener('click', () => {
  document.title = `Etiquetas - ${tags}`;
  window.print();
  document.title = 'Gerar etiquetas';
});
