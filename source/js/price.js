const priceBlocks = document.querySelectorAll('.price-content__block-price');

const createSpan = (tag, className) => {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
};

const price = createSpan('span', 'price-span');

const renderSpan = () => {

  for (let i = 0; i <= priceBlocks.length - 1; i++) {
    const block = priceBlocks[i];
    const clone = price.cloneNode(true);
    block.append(clone);
    clone.textContent = block.textContent;
  }
};

export { renderSpan };
