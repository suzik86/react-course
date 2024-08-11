export function getSelectedMessage(selectedBooks: number) {
  if (selectedBooks === 1) {
    return `${selectedBooks} book is selected`;
  }
  return `${selectedBooks} books are selected`;
}
