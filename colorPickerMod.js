//color picker logic
const colorPicker = document.getElementById("bg-color-picker");

export function openColorPicker() {
  colorPicker.click();
}

export function onColorChange(callback) {
  colorPicker.addEventListener("input", (event) => {
    const color = event.target.value;
    callback(color);
  });
}
